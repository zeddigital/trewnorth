import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

// PORT and BASE_PATH are injected by the Replit runtime. Everywhere else --
// CI, Cloudflare Pages, a local checkout -- they are absent, so fall back to
// defaults rather than failing the build.
const rawPort = process.env.PORT ?? '5173';

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    // SSR build writes to dist/server; client build writes to dist/public
    outDir: process.env.SSR_BUILD
      ? path.resolve(import.meta.dirname, 'dist/server')
      : path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
    rollupOptions: process.env.SSR_BUILD
      ? {}
      : {
          output: {
            manualChunks(id) {
              // Core React runtime — loaded on every page
              if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
                return 'vendor-react';
              }
              // Routing + data-fetching utilities
              if (
                id.includes('node_modules/wouter/') ||
                id.includes('node_modules/@tanstack/') ||
                id.includes('node_modules/react-helmet-async/')
              ) {
                return 'vendor-router';
              }
              // Radix UI primitives + other UI helpers
              if (id.includes('node_modules/@radix-ui/') || id.includes('node_modules/class-variance-authority/') || id.includes('node_modules/clsx/') || id.includes('node_modules/tailwind-merge/')) {
                return 'vendor-ui';
              }
            },
          },
        },
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
