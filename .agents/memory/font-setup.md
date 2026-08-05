---
name: Font setup
description: Original and current font pairings for True North Accounting; user may want to revert
---

## Original (may want to revert to)
- **Serif / headings:** Cormorant Garamond — weights 400, 500, 600, 700 + italic 400
- **Sans / body:** DM Sans — weights 300, 400, 500, 600, 700 + italic 400
- No custom letter-spacing overrides

Google Fonts import:
```
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
```

CSS vars:
```css
--app-font-sans: 'DM Sans', system-ui, -apple-system, sans-serif;
--app-font-serif: 'Cormorant Garamond', Georgia, serif;
```

## Current (applied per user request)
- **Serif / headings:** Playfair Display — weights 600, 700 + italic 600, letter-spacing -0.03em
- **Sans / body:** Manrope — weights 400, 500, 600; body letter-spacing 0; buttons 0.03em

**Why:** User trialled IBM Plex Serif first (from TN_Font_set_up brief), then switched to Playfair Display after honest feedback that IBM Plex Serif read too "corporate tech". Playfair Display has more warmth and elegance. They explicitly said to remember original Cormorant Garamond + DM Sans in case they want to revert.
