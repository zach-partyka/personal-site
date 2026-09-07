# Ralph config

Ralph scripts and agents read the block below for deploy URL, validation commands, and git.
See RALPH_CONFIG.md in the Ralph kit.

> Static site built with Vite, deployed to **GitHub Pages** by
> `.github/workflows/deploy.yml` on every push to `main`. Ralph merges a task to
> `main`, waits ~2.5 min for the Pages build, then health-checks and runs Playwright
> against the live URL.

```ralph-config
RALPH_GIT_REMOTE="https://github.com/zach-partyka/personal-site.git"
RALPH_GIT_MAIN_BRANCH="main"
RALPH_DEPLOY_URL="https://zach-partyka.github.io/personal-site"
RALPH_DEPLOY_WAIT_SECONDS=150
RALPH_VALIDATE_LOCAL="npm run check"
RALPH_VALIDATE_DEPLOY="npm test"
RALPH_HEALTH_CHECK_PATH="/health"
RALPH_TEST_ENV_VARS="STAGING_URL=$RALPH_DEPLOY_URL"
RALPH_TASK_TIMEOUT_MINUTES=30
RALPH_WT_PROFILE="Ralph"
```

## Stack Standards

Ralph follows these patterns on every task.

**Stack:** Vite + vanilla — no framework, no TypeScript. Semantic HTML, ES modules,
CSS custom properties for theming. `npm run check` (`vite build`) is the local gate;
`npm test` (Playwright) is the deploy gate and runs against `$STAGING_URL`.
**Content data:** anything rendered more than once (project cards, links) lives in a
plain array export under `src/` (e.g. `src/projects.js`) and is rendered in
`src/main.js`. Don't hand-duplicate markup in `index.html`.
**Styling:** extend the `:root` custom properties in `src/style.css`; keep the layout
within the existing `--max-width` column. No CSS frameworks.
**Tests:** every user-facing change adds or updates a spec in `tests/*.spec.js`
(Playwright). Prefer role/label/text selectors over CSS/`data-testid` on this small
site. `npm test` must pass locally (against `vite preview`) and in the deploy check.
**Keep `public/health`** — it's the deploy health check target.
**Deploy:** never edit `.github/workflows/deploy.yml` as part of a feature task.
