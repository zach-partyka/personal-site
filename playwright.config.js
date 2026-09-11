import { defineConfig, devices } from "@playwright/test";

// Ralph runs `STAGING_URL=$RALPH_DEPLOY_URL npm test` against the deployed site.
// With no STAGING_URL, tests run against a local `vite preview` build.
// A trailing slash is required: tests navigate with page.goto("./"), which
// resolves relative to baseURL's directory — without the slash, the last path
// segment (e.g. "/personal-site") is dropped and requests hit the bare origin.
const rawBaseURL =
  process.env.STAGING_URL || "http://localhost:4173/personal-site/";
const baseURL = rawBaseURL.endsWith("/") ? rawBaseURL : `${rawBaseURL}/`;

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "line" : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  // Only spin up a local server when we're not pointed at a deployed URL.
  webServer: process.env.STAGING_URL
    ? undefined
    : {
        command: "npm run build && npm run preview",
        url: "http://localhost:4173/personal-site/",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
