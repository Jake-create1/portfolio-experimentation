# Design Guidelines

The visual + UX source of truth for this portfolio. Tokens live in code
(`styles.css` `:root`); this doc explains the *intent* behind them and the
rules to hold to. When code and this doc disagree, fix one to match the other.

---

## 1. Direction

**Editorial · warm-dark · confident.** A design leader's site should feel
authored, not templated. Refined minimalism with one bold gesture — the
oversized serif name and the Spline scene — beats busy maximalism here.

Principles:
- **Restraint over decoration.** Negative space is the luxury. Add an element
  only if it earns its place.
- **One hero moment.** The page-load reveal + the name + the Spline scene carry
  the impact. Don't compete with them elsewhere.
- **Content is the proof.** Cases are the point; the chrome serves them.

## 2. Hard constraints (do not break)

- **Cases visible above the fold.** The hero must show the case strip without
  scrolling, on desktop *and* mobile. This is the core requirement of the site.
- **No build step / no dependencies.** Plain HTML/CSS/JS. Don't introduce a
  bundler, framework, or `package.json` without an explicit ask.
- **Graceful degradation.** The page must be usable with JS disabled, and must
  respect `prefers-reduced-motion` (animations collapse to instant).
- **Spline is optional.** Empty `data-spline-url` → the gradient-mesh fallback
  must still look intentional. Never ship an empty hero.

## 3. Color

Defined as CSS variables in `styles.css` `:root`. **Always reference the
variable — never hardcode a hex value in a rule.**

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#0c0b0a` | page canvas (warm near-black) |
| `--bg-soft` | `#141210` | raised surfaces, code chips |
| `--ink` | `#ece6da` | primary text (bone) |
| `--muted` | `#948b7c` | secondary text, meta |
| `--line` / `--line-2` | translucent bone | hairline borders |
| `--accent` | `#ccff33` | **one** accent — lime |
| `--accent-dim` | `#a9d62a` | accent on light-sensitive spots |

Accent discipline: lime is a *spark*, not a *wash*. Use it for the live dot,
hover states, index numbers, the name's full-stop, and links — never large
fills. If everything is accented, nothing is.

## 4. Typography

- **Display:** Fraunces (variable serif). Used for the name, section titles,
  case titles, the contact line. Lean on its optical-size and `SOFT`/`WONK`
  axes for character at large sizes; the italic is the signature accent.
- **UI / body:** Hanken Grotesk. Everything functional — nav, meta, body copy.
- Pairing rule: **serif for statements, grotesque for information.** Don't mix
  the roles.
- Sizes are fluid (`clamp()`); keep using `clamp()` rather than fixed px so the
  hero stays balanced across viewports.

## 5. Layout & space

- Page gutter is the `--pad` variable — reuse it; don't invent new edge values.
- Favor asymmetry and generous space over centered, even grids.
- Hairlines (`--line`) separate sections; avoid boxes/cards except the case
  cards, which are the deliberate exception.
- Border radius stays soft and consistent (~14px on cards). Pick one and hold.

## 6. Motion

- **One orchestrated entrance.** Staggered reveals on load (`data-reveal`
  ordering in the markup) — high impact, then calm.
- Micro-interactions are subtle: hover lifts (~6px), underline wipes, the arrow
  nudge on cards. Easing is the shared `--ease`
  (`cubic-bezier(0.22, 1, 0.36, 1)`) — reuse it, don't add new curves.
- Looping motion (pulse dot, mesh drift) must be slow and ambient, never
  attention-grabbing.
- **Always** gate motion behind `prefers-reduced-motion` (already wired).

## 7. Accessibility bar

- Maintain AA contrast: bone-on-near-black passes; check any new muted text.
- Every interactive element is reachable and labeled (the nav already uses
  `aria-label`; keep new sections honest).
- Don't convey meaning by color alone — the lime accent always pairs with text
  or position.

## 8. Adding to the system

- New color/spacing/type value? Add a **token** in `:root` first, then use it.
- New section? Reuse `.section-head` and the gutter; match the existing rhythm.
- New case fields (thumbnail, role, link)? Extend the `CASES` objects in
  `main.js` and render from there — keep content data-driven, not hardcoded.
