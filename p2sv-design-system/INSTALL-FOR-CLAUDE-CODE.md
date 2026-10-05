# Bringing the P2SV design system into the website

These are instructions for Claude Code, working in the website's repository.

## 0. Setup (done by the person, once)

1. Unzip this folder into the website repo, e.g. `design-system/p2sv/`.
2. Optional, to make it an auto-loaded skill: copy or symlink the folder to `.claude/skills/p2sv-design/`.
3. Add this to the repo's `CLAUDE.md`:

   ```
   ## Design
   All UI follows the P2SV design system in `design-system/p2sv/`.
   Read `design-system/p2sv/README.md` and `INSTALL-FOR-CLAUDE-CODE.md` before any styling work.
   Use its tokens (CSS variables); do not invent colors, fonts, radii or shadows.
   ```

4. Start Claude Code in the repo and say, for example:
   "Follow design-system/p2sv/INSTALL-FOR-CLAUDE-CODE.md and apply the P2SV design system to the site, starting with the global styles and the homepage."

## 1. Inspect the site before changing anything

- Identify the framework (plain HTML, Next.js, Astro, Vite/React, WordPress theme, etc.), where global CSS is loaded, and where static assets are served from (`public/`, `static/`, …).
- List the existing pages and shared layout components (header, footer, buttons, cards).
- Note any existing CSS variables, Tailwind config or theme files that will conflict.
- Report a short plan to the user before editing.

## 2. Install fonts and tokens

1. Copy `assets/fonts/*.woff2` to the site's public static folder (e.g. `public/fonts/p2sv/`).
2. Copy `tokens/` into the site's styles folder.
3. In `tokens/fonts.css`, update the `url('../assets/fonts/…')` paths to wherever the fonts now live (e.g. `/fonts/p2sv/…`).
4. Import once, globally, in this order: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` (or import `styles.css`, which does the same; fix its relative paths if moved).
5. If the site uses Tailwind, map the tokens into `tailwind.config` `theme.extend` (colors → `var(--ink)` etc., fontFamily → `var(--font-display)` / `var(--font-serif)`, borderRadius all `0`, boxShadow none). Do not add any non-token colors.

Verify: body text renders in EB Garamond, the wordmark renders in Climate Crisis, no console 404s for fonts.

## 3. Port components

The `.jsx` files in `components/` are reference implementations written against global `React` (no imports). Do not copy `_ds_bundle.js` into production; it is a prebuilt browser bundle for prototyping.

For each component the site needs:
1. Read `Component.jsx`, `Component.d.ts` (props) and `Component.prompt.md` (usage rules).
2. Recreate it in the site's stack (React/Next: a typed component with `import React`; Astro/HTML: a partial or plain CSS classes). Keep the exact token values and markup structure.
3. Replace the site's equivalent element with it.

Likely needed for the website: `Wordmark`, `Masthead` (header band), `Button`, `Label`, `Headline`, `List`, `CardGrid`, `StatRow`, `Callout`, `SheetFooter`, `ImagePlaceholder`. `ui_kits/website/` shows how they compose into the home sheet, report page and handout.

## 4. Brand rules to enforce (summary of README.md)

- Strictly monochrome: ink `#111111` on paper `#FAFAF8`, warm grey ramp, no accent color.
- Radius 0, no shadows, no gradients except the hatch pattern, no blur/transparency.
- One ink frame per surface: 10px on the web. Header band is the frame thickened, wordmark bottom-left.
- Display face (Climate Crisis, `font-variation-settings:"YEAR" 1979`) only for wordmark, numerals and very short caps; never under 20px; never body copy. Everything else is EB Garamond.
- Headlines regular weight, title case, two beats (second line italic).
- Labels in small caps. Lists use `—`, `·` or display-face numerals `01 02`. No icons, no emoji.
- Hover: primary button ink → ink-2; outline buttons fill ink; links thicken underline 1px → 2px. Transitions 120–200ms on color/background only. Nothing moves or fades in.
- Grey-400 is decorative only; body text must meet 4.5:1.
- Voice: sober and factual; P2SV speaks in the third person; cite sources in italic grey.

## 5. Check the result

- Compare each restyled page against `ui_kits/website/index.html` (open it in a browser) and `guidelines/*.html`.
- Search the codebase for leftover hard-coded colors, `border-radius`, `box-shadow` and non-brand fonts, and replace them with tokens.
- Check mobile widths; the web sheet is a centered 552px column (`--sheet-width`).
- Summarize what changed and what still needs the person's input (for example, real wordmark SVGs and photography are not included).
