# [Project name]

_Replace the heading above with the project's name, and this line with one sentence describing what this app does for users._

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

- **GA4 is hostname-guarded.** The inline gtag loader in `artifacts/true-north/index.html`
  only fires on `tnaccounting.com.au` and `www.`. Cloudflare gives every build a
  `pages.dev` preview URL; without the guard, each preview deploy and every check
  anyone makes on one lands in GA4 as real traffic.
- **The favicon is `tna-fav.png`, not `logo.svg`.** The SVG is the full horizontal
  wordmark and letterboxes to nothing at tab size.
- **`index.html` carries a default title and description** that react-helmet-async
  overrides per page. They are the fallback, not the homepage's real tags.
- **Nothing in the shipped page source is a note to a developer.** Rationale goes
  here or in the `.tsx` files, both of which stay out of the build output.

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

- **No em dashes anywhere in site copy.** Proper punctuation instead: a colon, a
  full stop, a comma or parentheses depending on the job the dash was doing.
- **One blog post published per day**, dated sequentially.
- **Blog posts live at the root** (`/slug`), never `/blog/slug`, matching the
  WordPress URLs they replaced. `public/_redirects` holds the 301s.
- **Darren has 40 years' experience.** Every claim on the site says 40.

## Gotchas

- **Publishing a post takes four registrations**, not one: `pages/blog.tsx`,
  `App.tsx` (lazy), `entry-server.tsx` (static, this is what prerenders), and the
  route manifest in `scripts/prerender.mjs` (which also drives `sitemap.xml`).
  Miss `entry-server.tsx` and the page 404s as a static file.
- **Pages Functions live in `/functions` at the repo root**, next to the build
  output, not inside it.
- **`public/_redirects` must stay enumerated.** A `/blog/*` wildcard would swallow
  the `/blog/*.webp` images the posts still reference.
- **Image scripts must run from the repo root** or `sharp` fails to resolve.
  House sizes: 800x450 cards, 1400x788 featured and body, webp.
- **Email HTML is tables and cell padding only.** Margins on tables and
  `display:inline-block` padding are both unreliable across clients.
- **Some posts were migrated from WordPress** as raw HTML. Check new content for
  Gutenberg `<!-- wp: -->` block markers; they render as comments in page source.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
