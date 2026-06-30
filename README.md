# Portfolio Experimentation

A workspace for exploring, prototyping, and tracking experiments — each one self-contained, versioned, and documented.

## Why this repo

A single home for small bets and prototypes. Every experiment lives in its own folder under `experiments/`, with enough notes that you (or anyone else) can understand the hypothesis, what was tried, and what was learned — even months later.

## Structure

```
portfolio-experimentation/
├── experiments/        # One folder per experiment
│   └── _template/      # Copy this to start a new experiment
├── docs/               # Cross-cutting notes, decisions, references
└── README.md
```

## Starting a new experiment

```bash
cp -r experiments/_template experiments/$(date +%Y-%m-%d)-short-name
```

Then fill in the experiment's `README.md` and commit early:

```bash
git add experiments/2026-06-30-short-name
git commit -m "experiment: start short-name"
```

## Conventions

- **One experiment per folder.** Keep them isolated so they can be reasoned about independently.
- **Date-prefix folder names** (`YYYY-MM-DD-name`) so they sort chronologically.
- **Commit the journey, not just the result** — small, frequent commits make the thinking visible.
- **Capture the outcome.** Even a failed experiment is worth keeping if the learning is written down.

## License

See [LICENSE](LICENSE).
