import { test, expect } from "@playwright/test";

test("home page loads with hero and nav", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Zach Partyka/);
  await expect(page.getByRole("heading", { level: 1, name: "Zach Partyka" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
});

test("projects section is present", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#projects")).toBeVisible();
});
