# Personal site — spec

A single-page personal site for Zach Partyka. Static, fast, no framework.

## Sections (in order, one `<section>` each)

| id | Purpose |
|----|---------|
| `.hero` | Name + one-line tagline. |
| `#about` | Short first-person paragraph. |
| `#projects` | Cards, one per project, rendered from `src/projects.js`. |
| `#contact` | Ways to reach out. |
| footer | Copyright + year; later, social links + last-updated date. |

## Conventions

- **No framework.** Vanilla ES modules, `src/main.js` is the entry.
- **Repeated content is data.** Arrays under `src/`, rendered in `src/main.js`.
  `index.html` holds structure, not lists.
- **Theming via CSS custom properties** on `:root` in `src/style.css`. A future dark
  theme is `:root[data-theme="dark"]` overrides only.
- **Every visible change gets a Playwright spec** in `tests/`, selectors by
  role/label/text.
- `public/health` returns `ok` and is the deploy health check — leave it.

## Deploy

`.github/workflows/deploy.yml` builds with Vite and publishes `dist/` to GitHub Pages
on push to `main`. Base path is `/personal-site/` (`vite.config.js`).
