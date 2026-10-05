# pushtostart.ventures

Static HTML. No build step, no framework. Pages are served from the repo root:

- `index.html` — the home sheet
- `medspa-market-brief.html` — the Med Spa Market Brief (Formspree contact form)
- `robots.txt`, `sitemap.xml`

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
