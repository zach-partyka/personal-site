# Personal Site Roadmap

**Last updated:** 2026-09-07

What we're building, when, and current status. Ralph pulls sprint items from the **Now** section.

Static Vite site, deployed to GitHub Pages. Every item is small, visually verifiable,
and covered by a Playwright spec.

---

## Now

Sprint 1 is planned in `sprint_plan.md` (projects section, theme toggle, footer date).
Nothing else is queued for the current sprint.

---

## Next

**1. Contact section that actually works**
- **What:** Replace the placeholder "Contact" copy with real links and a
  `mailto:` form (name + message → opens the user's mail client).
- **Acceptance:** links work; the form composes a prefilled email.
- **Status:** Planned

**2. Simple blog index**
- **What:** A `/writing` page listing Markdown posts from `src/posts/`, newest first.
- **Acceptance:** posts render as HTML; the index links to each.
- **Status:** Planned

---

## Later

### 1. Scroll-reveal animations
- **What:** Sections fade/slide in on scroll via `IntersectionObserver`, respecting
  `prefers-reduced-motion`.
- **Status:** Idea

### 2. Open Graph / social preview tags
- **What:** Per-page `<meta>` OG tags + a generated preview image.
- **Status:** Idea

---

## How This Works with Ralph

- **`/ralph-plan`** reads the **Now** section to suggest sprint items
- Each "Consideration" becomes a sprint task (~10-20 min each)
- After a sprint, **`/ralph-archive`** flows follow-ups back here
- Keep "Now" focused: 3-5 active initiatives max
