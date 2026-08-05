---
name: Accessibility colour revert values
description: Original CSS variable values before WCAG 2.2 AA accessibility fixes. Use to revert individual settings in index.css.
---

# Accessibility Colour Revert Values

These are the original values in `artifacts/true-north/src/index.css` before the WCAG 2.2 AA pass.
All originals are also preserved as inline comments in the CSS itself.

## Changed CSS variables (light mode `:root` block)

| Variable | Original value | New (AA-compliant) value | Reason |
|---|---|---|---|
| `--cta-foreground` | `0 0% 100%` (white) | `215 35% 13%` (dark navy) | White on orange was ~2.6:1; navy gives ~6.4:1 |
| `--muted-foreground` | `215 12% 48%` | `215 12% 44%` | 48% lightness gave ~4.25:1 on white; 44% gives ~4.76:1 |

**To revert either:** open `artifacts/true-north/src/index.css`, find the relevant variable in the `:root` block, and swap the value back to the "Original" column above.

## Contact bar colour change (contact.tsx)

The cyan contact bar (`bg-primary`) previously used `text-white` / `text-white/60` / `text-white/70` for its labels and values (~2.36:1 on cyan — WCAG fail).

Changed to `text-secondary` / `text-secondary/60` for dark navy text on cyan (~7.2:1).

**To revert:** in `artifacts/true-north/src/pages/contact.tsx`, find the contact bar section and replace:
- `divide-secondary/20` → `divide-white/20`
- `text-secondary/60` on icons → `text-white/70`
- `text-secondary/60` on labels → `text-white/60`
- `text-secondary` on values → `text-white`
- `hover:text-secondary/70` → `hover:text-white/80`

## Other accessibility changes (non-reversible style, semantic only)

- `button.tsx`: `focus-visible:ring-1` → `focus-visible:ring-2` (focus ring thickness)
- `navbar.tsx`: added `aria-label`, `aria-expanded`, `aria-controls` to mobile menu button; separated Services chevron into its own keyboard-operable button with `aria-haspopup` + `aria-expanded`
- `small-business-accountant.tsx` FAQItem: added `aria-expanded` + `aria-controls`/`id` pairing
- `blog-post-gst.tsx`: byline opacity `text-foreground/55` → `text-foreground/70`; TOC `<nav>` got `aria-label="Table of contents"`
- `footer.tsx`: decorative contact icons got `aria-hidden="true"`
