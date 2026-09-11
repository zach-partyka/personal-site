import { test, expect } from "@playwright/test";

test("projects section shows 3 project cards", async ({ page }) => {
  await page.goto("/");

  const cards = page.locator("#projects .project-card");
  await expect(cards).toHaveCount(3);

  await expect(page.getByText("Coming soon.")).toHaveCount(0);

  await expect(cards.nth(0).getByRole("heading", { name: "Ralph" })).toBeVisible();
  await expect(
    cards.nth(0).getByRole("link", { name: /Learn more/ })
  ).toBeVisible();
});
