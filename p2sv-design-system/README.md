# P2SV Design System

P2SV (Push to Start Ventures) is a health and wellness venture studio in Los Angeles. It partners with independent med spa operators competing on experience, not scale, and builds technology for them. Its public surfaces are the website (pushtostart.ventures), market briefs and reports, printed handouts and slide decks.

Everything is ink on paper: one heavy display face, one serif, square corners and a black frame. **The outline is the brand.**

## Sources
- An earlier "P2SV Design System" Claude artifact (https://claude.ai/artifact/LzaDayaUg3bARDdtzm7ovr), supplied as a full-page screenshot: `uploads/screencapture-claude-ai-artifact-LzaDayaUg3bARDdtzm7ovr-2026-10-03-09_26_46.png`. It was built from a P2SV design file (foundations, slides, handout) with colours sampled from pushtostart.ventures.
- None of the original source files were available: no Figma, no codebase, no wordmark SVGs (`p2sv-wordmark-ink.svg` / `-paper.svg` are listed in the source but weren't provided). Values were read from the screenshot. `grey-200` was hidden in the capture and is estimated as `#dededa`.

### Changes from the source
- Fonts are self-hosted (`assets/fonts/`), so the wordmark no longer falls back to Arial the way the source's handout and slide previews did.
- `text-caption` now maps to grey-500 (4.9:1). grey-400 (3.3:1) is kept only as `text-decorative`, for markers.
- The components are a React library, where the source had copy-paste HTML patterns. Frames, bands and footers are handled by shared parts (`Masthead`, `SheetFooter`).

## Content fundamentals
- **Voice:** sober, factual, analyst-grade. Lead with the number, then the meaning. No hype words, no exclamation marks, no emoji.
- **Headlines in two beats.** Line one states the fact. Line two, in italic, reframes it: *"A $32B Market. 90% Independent. / The Differentiator Is the Room."* Headlines use regular weight, never bold. They are title-cased.
- **Labels** are short nouns in small caps: Market Context, Tailwinds, Key Reports. On the homepage they are semibold caps: CONTACT.
- **Cite sources** in italic grey at the foot: *Source: Solomon Partners, Q2 2024.*
- **Lists** use an em-dash (brand), a middle dot (report) or two-digit numerals `01 02 03` in the display face. No icon bullets.
- **Person:** the studio speaks as "P2SV" in the third person ("P2SV builds technology for independent operators"). The reader isn't addressed except in calls to action ("Start a conversation").
- **Positioning line:** *P2SV partners with independent med spa operators competing on experience, not scale.*

## Visual foundations
- **Colour is strictly monochrome.** `ink` #111111 sits on `paper` #FAFAF8, with `white` for the sheet inside a frame and a six-step warm grey ramp (grey-700 → grey-100). Inverse surfaces are ink with paper text and `inverse-muted` labels. There is no accent colour. Emphasis comes from italics, scale and the display face.
- **Type:** `--font-display` is Climate Crisis at its heaviest year (`font-variation-settings:"YEAR" 1979`). It is used only for the wordmark, numerals, figures and very short caps statements, never below 20px and never for lowercase body copy. `--font-serif` is EB Garamond (400–600) for everything else, in roman and italic. Scale: display-xl 120 · wordmark 80 · display 64 · h1 32 · stat 30 · h2 22 · body-lg 18 · h3 17 · body 16 · small 14 · label 13. Leading is 1.7 for body, 1.18 for headings and 0.9 for display. Measure is 66ch.
- **Frames, bands, rules:** each surface gets one ink frame: 10px on the web, 14px on a letter handout, 20px on a 1920 slide. The header band (128px web / 132px print) is the frame thickened, with the wordmark bottom-left and italic meta on the right. `--border-rule` is 1.5px ink, for mastheads and footers. `--border-hair` is 1px grey-200, for grids, dividers and inputs. Card grids are 1px gaps over grey-200, with no border on each card.
- **Shape and depth:** radius 0 everywhere and no shadows. There are no gradients other than the hatch. There is no blur or transparency.
- **Backgrounds:** flat paper, white sheets or ink. No full-bleed imagery, illustration or texture other than the 135° hatch (`--hatch` for projected data, `--hatch-light` for image placeholders).
- **Data:** data-1 ink = actual, data-2 grey-500 = comparison, data-3 grey-200 = context. Projected values use `--hatch` with an ink outline. Charts never use colour.
- **Motion:** 120ms (`--dur-fast`) or 200ms with `cubic-bezier(.2,.7,.2,1)`, applied to colour and background only. Nothing moves, fades in or scales.
- **Hover / press:** primary buttons go ink → ink-2. Outline buttons fill with ink. Links thicken their underline from 1px to 2px. There is no press shrink. Selection is ink with paper text. Focus is a 2px ink outline.
- **Layout:** web is a centred 552px framed sheet (`--sheet-width`). Reports use a 590px column (`--report-width`). Slides are 1920×1080 with 96px margins and a 48px footer inset. Nothing is fixed-position.
- **Imagery:** no photography exists yet, so use `ImagePlaceholder`. When photos are added they should be black and white in natural light, with `filter:grayscale(1) contrast(1.08)`.
- **Accessibility:** contrast on paper is 18.1:1 for ink, 7.2:1 for grey-700 and 4.9:1 for grey-500. grey-400 (3.3:1) is decorative only.

## Iconography
None. P2SV is typographic. The only glyphs are the display face and the arrow `↓` in links ("Start a conversation ↓"), plus `—` and `·` as list markers. There is no icon font, SVG set or emoji. Don't introduce an icon set.

## Logo
The wordmark is "P2SV" set in Climate Crisis, YEAR 1979 (`Wordmark` component). It appears as ink on paper, or paper on ink inside the band. The source SVGs weren't supplied; replace with them if they differ.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `assets/fonts/` — Climate Crisis, EB Garamond roman + italic (latin woff2)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React library (namespace `window.P2SVDesignSystem_92a7d1`)
- `slides/` — Title, Stat and Section slide cards
- `ui_kits/website/` — pushtostart.ventures click-through (home sheet → report → handout)
- `SKILL.md` — agent skill entry

## Components
- **core/** — Button, Label, List, Headline, ImagePlaceholder
- **data/** — StatRow, BarChart, CardGrid
- **layout/** — Wordmark, Masthead, Callout, SheetFooter
- **surfaces/** — Handout, TitleSlide, StatSlide, SectionSlide

### Intentional additions
- **Wordmark** renders the logo as live type because no SVG was provided.
- **List** turns the source's list-marker rules (dash / dot / numeral) into a component.
- **SheetFooter** is the rule-and-colophon footer shared by Handout and the slides.
- **SectionSlide** is the ink divider with a 220px numeral, which the source describes but didn't preview.
