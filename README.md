# Portfolio — Jakob Hansen, Design Leader

A fast, dependency-free portfolio site. The hero is a single full-viewport composition: a **Spline animation**, your **name**, and a row of **case cards visible above the fold** — visitors see your work without scrolling.

```
.
├── index.html      # structure + content (name, copy, contact)
├── styles.css      # the whole design system (CSS variables at the top)
├── main.js         # CASES list, Spline injection, reveals
└── assets/         # images / exports
```

No build step. Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

## Make it yours — 3 edits

1. **Your name & copy** — in `index.html`, replace `Jakob Hansen`, the role line, About, and the contact email.
2. **Your Spline scene** — in `index.html`, find `data-spline-url=""` on `.hero__visual` and paste your scene URL:
   ```html
   <div class="hero__visual" data-spline-url="https://prod.spline.design/XXXX/scene.splinecode">
   ```
   With a URL set, the live `<spline-viewer>` loads automatically and the placeholder gradient is removed. Leave it empty and a tasteful animated mesh stands in.
3. **Your cases** — edit the `CASES` array at the top of `main.js`. The first three appear in the hero strip; all of them fill the “Selected Work” list.

## Design tokens

Everything keys off CSS variables at the top of `styles.css` — change `--accent`, `--bg`, or the fonts in one place. Display type is **Fraunces**, UI/body is **Hanken Grotesk**.

Respects `prefers-reduced-motion` and degrades gracefully without JS.

## Deploy

Hosted on **GitHub Pages** (Settings → Pages → Deploy from `main` / root). Any static host works — Netlify, Vercel, Cloudflare Pages — just point it at the repo root.

## License

[MIT](LICENSE).
