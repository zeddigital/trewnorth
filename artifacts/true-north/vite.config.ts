import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    'PORT environment variable is required but was not provided.',
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    'BASE_PATH environment variable is required but was not provided.',
  );
}

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
