# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is
A single-page portfolio site for a design leader. **Static, no build step, no dependencies** — plain `index.html` + `styles.css` + `main.js`. Open the file directly or serve it:

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

## Where things live (edit these, not random spots)
- **Name / copy / contact** → `index.html` (hero name, role line, About, contact email). Placeholders currently read "Jakob Hansen".
- **Case studies** → the `CASES` array at the top of `main.js`. First 3 render in the hero strip; all render in the "Selected Work" list. Do **not** hardcode cases into `index.html`.
- **Design tokens** (colors, fonts, accent) → CSS variables at the top of `styles.css`. Change them there, not inline. Display font is Fraunces, body is Hanken Grotesk, accent is `--accent`.

## Design decisions
For all visual/UX work — color, type, layout, motion, accessibility — follow
**`docs/DESIGN.md`**. Tokens are the source of truth in `styles.css` `:root`;
always reference variables, never hardcode values.

## The hero (the whole point)
Single full-viewport composition: name + Spline scene + case cards **above the fold** (visitors must see cases without scrolling — preserve this).
- Spline loads via `<spline-viewer>`, injected by `main.js` **only when** `data-spline-url` on `.hero__visual` (in `index.html`) is non-empty.
- Empty `data-spline-url` = animated gradient-mesh fallback. Keep that fallback working.

## Conventions
- No frameworks, no bundler, no package.json. Keep it that way unless asked.
- Must degrade without JS and respect `prefers-reduced-motion` (already wired in `styles.css`).
- Keep it responsive; the case strip becomes a horizontal scroll on small screens.

## Deploy
Hosted on GitHub Pages from `main` / root. **Push to `main` → site rebuilds automatically** (~1 min) at
https://jake-create1.github.io/portfolio-experimentation/
No deploy step or CI to run.
