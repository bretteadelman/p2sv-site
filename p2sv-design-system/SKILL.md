---
name: p2sv-design
description: Use this skill to apply the P2SV (Push to Start Ventures) design system to the website or any UI: tokens, fonts, components, and brand rules. Use it whenever styling, building, or restyling P2SV pages.
user-invocable: true
---

Read `README.md` in this folder first (brand rules, voice, visual foundations). Then read `INSTALL-FOR-CLAUDE-CODE.md` for how to bring the system into the existing website.

Source of truth, in order:
1. `tokens/*.css`: every color, font, size, spacing and motion value. Never hard-code values that exist here.
2. `components/**/*.jsx` + `*.prompt.md`: reference implementations and usage rules for each component.
3. `guidelines/*.html` and `ui_kits/website/`: visual specimens and a reference build of the site.

If creating visual artifacts (mocks, throwaway prototypes), copy assets out and create static HTML files. If working on production code, port tokens and components into the site's own stack and follow the rules here.
