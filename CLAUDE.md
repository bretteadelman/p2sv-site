# pushtostart.ventures

Static HTML. No build step, no framework. Pages are served from the repo root:

- `index.html` — the home sheet
- `medspa-market-brief.html` — the Med Spa Market Brief (Formspree contact form)
- `robots.txt`, `sitemap.xml`, `llms.txt` (AI-discoverability summary; keep in step with the homepage copy)

## Positioning

- Tagline: **"0 to 1, or 1 to $1M"** (was "1 to 100").
- Operating model: **flexible operating models, designed to fit the needs of founders.**
  P2SV no longer describes itself as a fixed builder-operator that runs every
  venture itself; don't reintroduce "builder-operator", "under one roof" or
  "no handoffs" as the model.
- Expertise: 16 years developing, testing and commercializing new treatments,
  including previously founding and exiting a digital health company.
- The positioning lives in the visible copy, the meta/OG/Twitter descriptions,
  the JSON-LD on both pages, and `llms.txt`. Change them together.
  Fuller internal notes: `.agents/p2sv-product-marketing-context.md` (local, gitignored).

## Design

All UI follows the P2SV design system in `p2sv-design-system/`.
Read `p2sv-design-system/README.md` and `INSTALL-FOR-CLAUDE-CODE.md` before any styling work.

It is installed into the site as:

- `assets/fonts/` — Climate Crisis + EB Garamond (self-hosted woff2, preloaded in each page head)
- `assets/css/tokens/` — the design system's token files, copied verbatim; only the `url()` paths in `fonts.css` are changed
- `assets/css/p2sv.css` — entry point, imports the tokens in order
- `assets/css/site.css` — the design system's React components recreated as plain CSS classes (`.p2-*`), since the site is static HTML

Use the tokens (CSS variables). Do not invent colors, fonts, radii or shadows.
When the design system is updated, re-copy `tokens/` and re-fix the font paths;
`site.css` is the only file that needs hand-merging.

### Rules worth repeating

- Strictly monochrome: ink `#111111` on paper `#FAFAF8`, warm grey ramp, no accent color.
- Radius 0, no shadows, no gradients except the hatch, no blur or transparency.
- One deliberate exception to "no full-bleed imagery": the home page sits on a
  full-bleed black-and-white photo (`.p2-canvas--photo`, `assets/img/home-lake.jpg`)
  with the sheet floating centred over it. The greyscale + contrast treatment is
  baked into the file. Keep any other photo the same way: B&W, never in colour.
- One ink frame per surface: 10px on the web. The header band is that frame thickened, wordmark bottom-left, italic meta right.
- Climate Crisis (`--font-display`) only for the wordmark, numerals and very short caps. Never below 20px, never body copy. Everything else is EB Garamond.
- Headlines: regular weight, title case, two beats — the second line italic.
- Lists use `—`, `·` or display-face numerals. No icons, no emoji.
- Transitions are 120–200ms on color and background only. Nothing moves, fades or scales.
- grey-400 is decorative only; body text meets 4.5:1.
- Voice: sober and factual. P2SV speaks in the third person. Sources cited in italic grey.

### Checking a change

```
python3 -m http.server 8899
```

Then render both pages at 1200px and at 360px, and print the brief to PDF, before calling a styling change done.

## Completed

- **Design system applied** to the home sheet and the Med Spa Market Brief:
  tokens, self-hosted fonts and `site.css` components installed (Oct 5, 2026).
- **Commercial-readiness positioning and AI discoverability**: JSON-LD
  Organization schema, `llms.txt`, AI-crawler rules in `robots.txt`.
- **Copy simplified**: builds table and FAQ sections dropped.
- **Home photo background**: B&W lake photo full-bleed behind the centred
  sheet; dropped in print.
- **Flexible-model positioning**: new tagline, new Studio bullets, and the
  meta, JSON-LD and `llms.txt` descriptions brought in line.
