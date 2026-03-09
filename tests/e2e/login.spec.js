import { test, expect } from "@playwright/test";

test("login page has correct title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/login/");

  await expect(page).toHaveTitle(/login/i);
});
