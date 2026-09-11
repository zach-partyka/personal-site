# Sprint 1: Flesh out the personal site

**Last updated:** 2026-09-11

## Goal

Turn the skeleton into a site worth sharing: a real projects section, a working
light/dark toggle, and a footer that shows when the site last shipped.

## Tasks

### Critical Path
<!-- Tasks that must complete in order. Ralph executes top-to-bottom. -->

- [ ] **#2** Light/dark theme toggle
  - Acceptance: a button in the header toggles a `data-theme="dark"` attribute on
    `<html>`; dark values are defined as CSS custom properties in `src/style.css`; the
    choice is saved to `localStorage` and restored on load; with no saved choice the
    site follows `prefers-color-scheme`. Playwright spec: click the toggle, assert the
    background colour changes and survives a reload.
  - Files: `index.html` (toggle button), `src/main.js` (toggle logic), `src/style.css`
    (`:root[data-theme="dark"]` block), `tests/theme.spec.js`

### High Priority
<!-- Independent tasks. -->

- [ ] **#3** Footer: social links + "Last updated" date
  - Acceptance: the footer lists 2-3 social links (GitHub, LinkedIn, email) and a line
    "Last updated <date>" where the date is the build day, injected at build time (Vite
    `define` or a small generated module) - not hard-coded. Playwright spec: the footer
    shows today's date on the deployed site.
  - Files: `vite.config.js` (define), `index.html` / `src/main.js` (footer render),
    `tests/footer.spec.js`

## Blocked
<!-- Tasks move here when blocked. Include reason and what's needed to unblock. -->

(empty)

## Completed
<!-- Tasks move here when done. Include performance data. -->

- [x] **#1** Projects section - render 3 cards from a data file
  - Filled `src/projects.js` with 3 real project entries (title, blurb, url); main.js
    already rendered the array so no template changes were needed.
  - Added `tests/projects.spec.js` asserting 3 `.project-card` elements render with
    no "Coming soon." text.
  - Discovered and fixed a pre-existing Playwright infra bug while verifying against
    the deploy target: `baseURL` had no trailing slash and specs used
    `page.goto("/")` (absolute-path), which always resolved to the bare GitHub Pages
    origin instead of `/personal-site`, 404ing on every test (including the
    pre-existing `home.spec.js`). Fixed in `playwright.config.js` (trailing-slash
    normalization) and switched all specs to `page.goto("./")`.
  - Verified: `npm run check` passed, all 3 Playwright tests passed locally and
    against the deployed site.
  - **Performance:**

## Notes
- Deploy is GitHub Pages via Actions; give the workflow ~2 min after a merge before the
  health check / Playwright run.
- Do not touch `.github/workflows/deploy.yml` or delete `public/health`.

---

## Sprint Performance Summary

**Sprint:** 1
**Started:** 2026-09-07
**Status:** In Progress

**Completed so far:** 0/3 tasks
**Total duration:** 0 min
**Total cost:** unavailable
**Avg per task:** N/A

**Cost comparison:** Engineer baseline ~$350 (loaded rate) for 7 hours equivalent work
