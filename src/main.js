import "./style.css";
import { projects } from "./projects.js";

// Current year in the footer.
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Render the projects list (no-op while projects is empty).
const listEl = document.querySelector("#project-list");
if (listEl) {
  if (projects.length === 0) {
    listEl.innerHTML = '<p class="muted">Coming soon.</p>';
  } else {
    listEl.innerHTML = projects
      .map(
        (p) => `
        <article class="project-card">
          <h3>${p.title}</h3>
          <p>${p.blurb}</p>
          <a href="${p.url}">Learn more &rarr;</a>
        </article>`
      )
      .join("");
  }
}
