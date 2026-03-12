import { test, expect } from "@playwright/test";

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/login/");

  await page
    .getByRole("textbox", { name: "Email" })
    .fill(process.env.TEST_USER_EMAIL);

  await page
    .getByRole("textbox", { name: "Password" })
    .fill(process.env.TEST_USER_PASSWORD);

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
});

test("user sees error message when trying to log in with invalid credentials", async ({
  page,
}) => {
  await page.goto("http://127.0.0.1:5500/login/");

  await page.getByRole("textbox", { name: "Email" }).fill("invalid@email.no");

  await page.getByRole("textbox", { name: "Password" }).fill("invalidpassword");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Invalid email or password")).toBeVisible;
});
