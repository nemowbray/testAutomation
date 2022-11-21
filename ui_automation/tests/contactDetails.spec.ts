import { test, expect, Page } from "@playwright/test";
import Env from "@utils/environment";
import * as formData from "@data/messageForm.json";
import inquiry from "@pages/introPage.page";
import admin from "@pages/adminPage.page";

test.describe("User can enter contact details and admin user can see and read it > Login Form", async () => {
  //test.use({ storageState: undefined });
  let page: Page;
  let login: admin;
  let contactForm: inquiry;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://automationintesting.online");
    await page.waitForLoadState();
  });

  test("before a user submits a request message does not exist", async () => {
    await page.goto("https://automationintesting.online/#/admin/");
    await login.username.fill("admin");
    await login.password.fill("password");
    await login.loginButton.click();
    await expect(page.getByText("B&B Booking Management")).toBeVisible();
    await login.messages.click();
    await expect(page.getByText(formData.name)).toHaveCount(0);
  });
});
