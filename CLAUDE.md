# pushtostart.ventures

Static HTML. No build step, no framework. Pages are served from the repo root:

- `index.html` — the home sheet
- `medspa-market-brief.html` — the Med Spa Market Brief (Formspree contact form)
- `privacy.html`, `terms.html` — Privacy Policy and Terms of Use, on the report sheet;
  linked from every footer as `/privacy` and `/terms` (Netlify serves clean URLs)
- `robots.txt`, `sitemap.xml`, `llms.txt` (AI-discoverability summary; keep in step with the homepage copy)

## Positioning

- Tagline: **"from 0 to 1 and from 1 to $10M"** (was "0 to 1, or 1 to $1M", before that "1 to 100").
  On the home lede the figures are held together with `&nbsp;` so they never split across lines.
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
- Deliberate exceptions on the home page only (`.p2-canvas--photo`):
  - Full-bleed imagery: the sheet floats centred over Lambert's Pictorial
    Anatomy, Pl. 2 (public domain, via Artvee), `assets/img/home-anatomy-2.jpg`.
    The figure is sized from the viewport so it stands in the right-hand gutter.
    On phones (≤600px) it is instead scaled to 150% of the page height and
    centred, cropping off the plate's lettering and softening the figure.
    The greyscale + contrast treatment is baked into the file. Keep any other
    image the same way: B&W, never in colour. The current file is the 1088px
    free download and looks soft on large monitors; swap in the hi-res version.
  - At 1400px and wider the sheet is set at `zoom: 1.5` (matches 150% browser
    zoom), so it is 828px there, not the design system's 552px. Only the
    sheet is zoomed, never the body: Chrome scales `vw` under `zoom` and
    Safari doesn't, so a zoomed body put the figure behind the sheet in
    Safari. The body's padding and background size are scaled by hand.
- One ink frame per surface: 10px on the web. The header band is that frame thickened, wordmark bottom-left, italic meta right.
- Climate Crisis (`--font-display`) only for the wordmark, numerals and very short caps. Never below 20px, never body copy. Everything else is EB Garamond.
  Site exception (Oct 6, 2026): section headers are set in it too, in caps at 20px: the
  numbered `.p2-label--heading` names and the home page's `.p2-label--caps`
  labels (The Studio, Contact, Key Reports).
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
- **Home background**: B&W anatomy plate (Lambert's Pl. 2) full-bleed, figure
  in the right gutter beside the sheet; dropped in print. Replaced an earlier
  lake photo.
- **Contact routes**: Founders, Partnerships, Investors (general Inquiries
  removed), mirrored in the JSON-LD contactPoints and `llms.txt`.
- **Large-screen sizing**: home page at 1.5x from 1400px.
- **Med Spa brief restyled** (Oct 5, 2026):
  - Report now sits on the framed sheet with the ink header band, like the
    home page (`.p2-sheet--report`).
  - Sections numbered 01–04 in the display face (`.p2-label--num`).
  - US Med Spa Locations bar chart: built, then taken off the page until the
    data is verified (the 2018 = 4,800 figure came from the design system's
    sample data). The `.p2-barchart` CSS is kept in `site.css`; restore the
    markup from commit acc8c16 once the numbers check out.
  - GLP-1 / Ozempic Effect card on ink (`.p2-card--inverse`).
  - Peptides is a feature section (`.p2-feature`): ink band head, "Clinical
    Benefits of Peptides" over five numbered cards (Anti-Aging and Longevity
    on ink, Hormonal Regulation full width), then a "Why Now?" ink callout
    (`.p2-callout--feature`) replacing the old Pharma to Aesthetics card.
  - Competitive Landscape trimmed: headline "9 in 10 med spas are
    independently owned.", one paragraph, "Key Features of Successful Med
    Spas" with four short bullets; its CTA button removed.
  - Fixes: card grids go to one column on phones (the inline `--p2-cols`
    used to win); printed card grids use borders so page breaks don't leave
    grey blocks.
  - A graphics-heavy rework of Competitive Landscape (ownership bar, PE vs
    founder-led panel) was tried and rejected; don't reintroduce it.
- **Flexible-model positioning**: new tagline, new Studio bullets, and the
  meta, JSON-LD and `llms.txt` descriptions brought in line.
- **Privacy Policy and Terms of Use** (Oct 6, 2026): linked from both footers
  and under the brief's form. The privacy policy names PostHog, Formspree and
  Netlify. Legal entity: Push to Start Ventures LLC.
- **Cookieless analytics** (Oct 6, 2026): PostHog runs with
  `cookieless_mode: 'always'` and `person_profiles: 'never'` on every page, so
  no cookies or browser storage and no cookie banner. It depends on
  "Cookieless server hash mode" being on in PostHog (Project Settings → Web
  analytics); without it PostHog drops every event. New pages must copy the
  same `posthog.init` config. If analytics,
  forms or hosting change, update `privacy.html` to match.
- **Section headings at h2** (Oct 6, 2026): numbered section names on the
  brief and legal pages use `.p2-label--heading` (22px, regular, title case)
  beside the display numerals. Report pages keep a 16px/12px gutter on
  phones so the frame doesn't touch the screen edge.
- **Brief unframed** (Oct 6, 2026): the med spa brief drops the 10px side
  frame (`.p2-sheet--unframed`); the black band alone heads the page. The
  legal pages keep the full frame.
- **Favicon and site name** (Oct 6, 2026): "P2" over "SV" in paper on an
  ink square, outlined from the self-hosted Climate Crisis font (so the SVG
  needs no font). Files: `favicon.svg`, `favicon.ico` (16/32/48),
  `apple-touch-icon.png` (180), `assets/icons/icon-192.png` / `-512.png`,
  `site.webmanifest`; linked in every page head. Site name everywhere is
  "P2SV: Push to Start Ventures. A Health + Wellness Venture Studio in Los
  Angeles, CA" (home title, OG/Twitter titles, `og:site_name`, descriptions,
  JSON-LD, `llms.txt`). The 512 icon doubles as `og:image` and the JSON-LD
  `logo` until a proper social card exists. If the real wordmark SVG
  arrives, regenerate the icons from it.
