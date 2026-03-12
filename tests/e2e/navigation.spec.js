import { test, expect } from "@playwright/test";

test("User can open venue details page", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/login");

  await page.getByRole("link", { name: "Home" }).click();
  await page.locator("#venue-container a").first().click();

  await expect(
    page.getByRole("heading", { name: "Venue details:" }),
  ).toBeVisible();
});
