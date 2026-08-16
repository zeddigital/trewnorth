/**
 * Static pre-rendering script — runs after `vite build` + `vite build --ssr`.
 *
 * For every route, renders the React app server-side, extracts the SEO tags
 * that React 19 hoists to the top of renderToString output (<title>, <meta>,
 * <link>) plus any JSON-LD <script> tags, and writes a fully-annotated
 * index.html to dist/public/<route>/index.html.
 *
 * Googlebot will therefore see the correct <title> and all meta tags on the
 * very first request, rather than waiting days for JavaScript re-rendering.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../dist/public');
const serverDir = resolve(__dirname, '../dist/server');

// All routes to statically pre-render, with sitemap metadata.
// Each entry drives both prerendering and sitemap.xml generation.
// Add new routes here — sitemap updates automatically on the next build.
//
// Draft posts (/pages/blog-post-draft-*.tsx, routed in App.tsx) are
// deliberately absent: unpublished content should be neither statically
// served nor listed in the sitemap. Promoting a draft means adding its
// path here as well as to App.tsx and the blog index.
const routes = [
  // ─── Core ───────────────────────────────────────────────────────────────
  { path: '/',                                                         changefreq: 'monthly', priority: '1.0' },
  { path: '/about',                                                    changefreq: 'yearly',  priority: '0.7' },
  { path: '/contact',                                                  changefreq: 'yearly',  priority: '0.8' },
  { path: '/faqs',                                                     changefreq: 'monthly', priority: '0.7' },

  // ─── Services ───────────────────────────────────────────────────────────
  { path: '/services',                                                 changefreq: 'monthly', priority: '0.9' },
  { path: '/services/small-business-accountant',                       changefreq: 'monthly', priority: '0.9' },
  { path: '/services/accounting-and-tax-planning',                     changefreq: 'monthly', priority: '0.8' },
  { path: '/services/small-business-planning',                         changefreq: 'monthly', priority: '0.8' },
  { path: '/services/personal-tax-and-finance',                        changefreq: 'monthly', priority: '0.8' },
  { path: '/services/bookkeeping',                                     changefreq: 'monthly', priority: '0.8' },
  { path: '/services/self-managed-super-funds',                        changefreq: 'monthly', priority: '0.8' },

  // ─── Locations ──────────────────────────────────────────────────────────
  { path: '/suburbs',                                                  changefreq: 'monthly', priority: '0.8' },
  { path: '/service-areas',                                            changefreq: 'monthly', priority: '0.7' },
  { path: '/accountant-in-brighton',                                   changefreq: 'monthly', priority: '0.8' },
  { path: '/accountant-in-cheltenham',                                 changefreq: 'monthly', priority: '0.8' },
  { path: '/accountant-in-moorabbin',                                  changefreq: 'monthly', priority: '0.8' },
  { path: '/accountant-in-bentleigh',                                  changefreq: 'monthly', priority: '0.8' },
  { path: '/accountant-in-mordialloc',                                 changefreq: 'monthly', priority: '0.8' },
  { path: '/accountant-in-parkdale',                                   changefreq: 'monthly', priority: '0.8' },
  { path: '/accountant-in-braeside',                                   changefreq: 'monthly', priority: '0.8' },
  { path: '/accountant-in-sandringham',                                changefreq: 'monthly', priority: '0.8' },

  // ─── Blog ───────────────────────────────────────────────────────────────
  { path: '/blog',                                                     changefreq: 'weekly',  priority: '0.8' },
  { path: '/blog/what-is-a-profit-and-loss-statement',                 changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-17' },
  { path: '/blog/what-is-payrolling',                                  changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-16' },
  { path: '/blog/agent-nomination-ato',                                changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-15' },
  { path: '/blog/set-up-super-fund',                                   changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-14' },
  { path: '/blog/what-is-management-accounting',                       changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-13' },
  { path: '/blog/what-is-break-even-analysis',                        changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-12' },
  { path: '/blog/how-to-read-a-balance-sheet',                        changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-11' },
  { path: '/blog/victoria-payroll-tax',                                changefreq: 'yearly',  priority: '0.7', lastmod: '2026-08-05' },
  { path: '/blog/property-investment-using-superannuation',            changefreq: 'yearly',  priority: '0.7', lastmod: '2026-06-25' },
  { path: '/blog/the-atos-free-super-clearing-house-is-closing-what-your-melbourne-small-business-needs-to-do-before-30-june-2026', changefreq: 'yearly', priority: '0.7', lastmod: '2026-06-16' },
  { path: '/blog/tax-deductions-sole-trader',                          changefreq: 'yearly',  priority: '0.7', lastmod: '2026-05-27' },
  { path: '/blog/how-to-salary-sacrifice-super',                       changefreq: 'yearly',  priority: '0.7', lastmod: '2026-05-18' },
  { path: '/blog/tax-return-deadline',                                 changefreq: 'yearly',  priority: '0.7', lastmod: '2026-05-13' },
  { path: '/blog/discretionary-trust-vs-family-trust',                 changefreq: 'yearly',  priority: '0.7', lastmod: '2026-04-27' },
  { path: '/blog/investment-property-tax-deductions-australia',        changefreq: 'yearly',  priority: '0.7', lastmod: '2026-04-13' },
  { path: '/blog/payday-super-for-2026-the-small-business-accountants-checklist-to-stay-compliant-and-protect-cash-flow', changefreq: 'yearly', priority: '0.7', lastmod: '2026-03-30' },
  { path: '/blog/salary-sacrifice-is-it-worth-it',                     changefreq: 'yearly',  priority: '0.7', lastmod: '2026-03-10' },
  { path: '/blog/cash-flow-problems-in-small-business',                changefreq: 'yearly',  priority: '0.7', lastmod: '2026-02-13' },
  { path: '/blog/best-accounting-software-for-small-business-australia', changefreq: 'yearly', priority: '0.7', lastmod: '2026-02-02' },
  { path: '/blog/melbourne-tradies-tax-tips-and-bookkeeping-mistakes',  changefreq: 'yearly',  priority: '0.7', lastmod: '2025-10-27' },
  { path: '/blog/how-to-pay-yourself-as-a-business-owner-without-triggering-ato-red-flags', changefreq: 'yearly', priority: '0.7', lastmod: '2025-08-04' },
  { path: '/blog/the-impact-of-rising-interest-rates-on-small-businesses', changefreq: 'yearly', priority: '0.7', lastmod: '2025-06-26' },
  { path: '/blog/should-your-small-business-register-for-gst',         changefreq: 'yearly',  priority: '0.7', lastmod: '2025-06-15' },
  { path: '/blog/navigating-the-2025-tax-changes-what-small-businesses-in-melbourne-need-to-know', changefreq: 'yearly', priority: '0.7', lastmod: '2025-05-19' },
  { path: '/blog/top-small-business-bookkeeping-tips',                 changefreq: 'yearly',  priority: '0.7', lastmod: '2025-04-23' },
  { path: '/blog/top-small-business-grants-for-2025',                  changefreq: 'yearly',  priority: '0.7', lastmod: '2025-02-20' },
  { path: '/blog/10-ways-to-reduce-your-business-tax-bill',            changefreq: 'yearly',  priority: '0.7', lastmod: '2025-02-05' },
  { path: '/blog/succession-planning-for-small-businesses',            changefreq: 'yearly',  priority: '0.7', lastmod: '2025-01-29' },
  { path: '/blog/the-impact-of-ai-in-small-business',                  changefreq: 'yearly',  priority: '0.7', lastmod: '2024-08-19' },
  { path: '/blog/how-to-handle-an-ato-audit-letter-step-by-step-guide', changefreq: 'yearly', priority: '0.7', lastmod: '2024-07-11' },
  { path: '/blog/your-guide-to-the-best-melbourne-accountants-in-2024', changefreq: 'yearly', priority: '0.7', lastmod: '2024-04-16' },
  { path: '/blog/strategic-plan-for-small-business',                   changefreq: 'yearly',  priority: '0.7', lastmod: '2020-05-11' },
  { path: '/blog/business-structures-pros-cons',                       changefreq: 'yearly',  priority: '0.7', lastmod: '2020-04-14' },

  // ─── Legal ──────────────────────────────────────────────────────────────
  { path: '/privacy-policy',                                           changefreq: 'yearly',  priority: '0.3' },
  { path: '/terms-conditions',                                         changefreq: 'yearly',  priority: '0.3' },
];

// ─── Tag extraction ───────────────────────────────────────────────────────────

/**
 * React 19 hoists <title>, <meta>, <link> to the very beginning of
 * renderToString output (before the first block-level element). <script
 * type="application/ld+json"> stays inline wherever it appears.
 *
 * This function:
 *   1. Splits the rendered HTML at the first root block element.
 *   2. Returns {titleTag, otherHeadTags, jsonLdTags, bodyHtml} where bodyHtml
 *      is the full server-rendered page markup to inject into <div id="root">.
 */
function extractSeoTags(renderedHtml) {
  // Find where the actual page body starts (first block-level element tag).
  // Everything before this point was hoisted to <head> by React 19.
  const bodyStart = renderedHtml.search(
    /<(?:div|section|main|article|nav|header|footer|h[1-6])[\s>]/,
  );

  // Everything before the root block element is hoisted by React 19
  const hoisted = bodyStart > 0 ? renderedHtml.substring(0, bodyStart) : '';
  // The page markup that belongs inside <div id="root">
  const bodyHtml = bodyStart > 0 ? renderedHtml.substring(bodyStart) : renderedHtml;

  // Extract the <title> tag
  const titleMatch = hoisted.match(/<title>[^<]*<\/title>/);
  const titleTag = titleMatch ? titleMatch[0] : '';

  // All head content except the <title> (meta, link, OG tags, twitter tags…)
  const otherHeadTags = hoisted.replace(/<title>[^<]*<\/title>/, '').trim();

  // JSON-LD scripts can appear anywhere — pull them all out for <head> injection
  const jsonLdMatches = [
    ...renderedHtml.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g,
    ),
  ].map((m) => m[0]);

  return { titleTag, otherHeadTags, jsonLdTags: jsonLdMatches, bodyHtml };
}

/**
 * Inject the extracted SEO tags AND server-rendered body HTML into the template:
 *   - Replace the default <title>
 *   - Replace the default <meta name="description"> if a per-page one exists
 *   - Insert remaining meta/link/OG/Twitter tags + JSON-LD scripts before </head>
 *   - Inject the pre-rendered page markup into <div id="root"> so crawlers and
 *     non-JS clients receive full page content; React hydrates on the client.
 */
function injectIntoTemplate(template, { titleTag, otherHeadTags, jsonLdTags, bodyHtml }) {
  let html = template;

  // Replace default <title>
  if (titleTag) {
    html = html.replace(/<title>[^<]*<\/title>/, titleTag);
  }

  // Replace default description with per-page description to avoid duplicates.
  // React 19 serialises as name="description" content="..."/> (no space before />)
  // The template uses content="..." /> (space before />).  Handle both.
  let remainingHeadTags = otherHeadTags;
  const descMatch = otherHeadTags.match(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
  );
  if (descMatch) {
    // Remove the page description from the injection block (handled by replacement)
    remainingHeadTags = otherHeadTags.replace(descMatch[0], '').trim();
    // Replace the template's default description
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      descMatch[0],
    );
  }

  // Build the remaining injection block (OG, Twitter, canonical, preload, etc.)
  const injections = [remainingHeadTags, ...jsonLdTags]
    .map((s) => s.trim())
    .filter(Boolean)
    .join('\n    ');

  if (injections) {
    html = html.replace('</head>', `    ${injections}\n  </head>`);
  }

  // Inject the server-rendered page markup into <div id="root">.
  // React hydrates this on the client via hydrateRoot in main.tsx.
  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  }

  return html;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

// Read the built client HTML template once
const template = readFileSync(resolve(publicDir, 'index.html'), 'utf-8');

// Import the SSR bundle (use pathToFileURL for correct ESM resolution)
const bundlePath = pathToFileURL(resolve(serverDir, 'entry-server.js')).href;
const { render } = await import(bundlePath);

let successCount = 0;
let errorCount = 0;

for (const route of routes) {
  try {
    const { html: renderedHtml } = render(route.path);
    const seoTags = extractSeoTags(renderedHtml);
    const outputHtml = injectIntoTemplate(template, seoTags);

    const filePath =
      route.path === '/'
        ? resolve(publicDir, 'index.html')
        : resolve(publicDir, route.path.slice(1), 'index.html');

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, outputHtml, 'utf-8');

    const titleLabel = seoTags.titleTag
      ? seoTags.titleTag.replace(/<\/?title>/g, '').trim().substring(0, 60)
      : '(default title)';
    console.log(`✓  ${route.path.padEnd(55)} → ${titleLabel}`);
    successCount++;
  } catch (err) {
    console.error(`✗  ${route.path} — ${err.message}`);
    errorCount++;
  }
}

console.log(
  `\nPre-rendering complete: ${successCount} succeeded, ${errorCount} failed.`,
);

if (errorCount > 0) {
  process.exit(1);
}

// ─── Sitemap generation ───────────────────────────────────────────────────────

const CANONICAL_BASE = 'https://tnaccounting.com.au';

const urlEntries = routes
  .map(({ path, changefreq, priority, lastmod }) => {
    const loc = `${CANONICAL_BASE}${path}`;
    const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
    return [
      '  <url>',
      `    <loc>${loc}</loc>${lastmodLine}`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n\n');

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '',
  urlEntries,
  '',
  '</urlset>',
].join('\n');

const sitemapPath = resolve(publicDir, 'sitemap.xml');
writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log(`\n✓  sitemap.xml written → ${routes.length} URLs`);

