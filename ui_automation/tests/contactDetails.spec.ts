import { test, expect, Page } from "@playwright/test";
import * as formData from "@data/messageForm.json";
import bookingManagement from "@pages/introPage.page";
import Env from "@utils/environment";

test.describe("User can enter contact details and admin user can see and read it > Login Form", async () => {
  let page: Page;
  let homePage: bookingManagement;

  test("before a user submits a request message does not exist", async ({
    browser,
  }) => {
    page = await browser.newPage();
    await page.goto(Env.home as string);
    await page.waitForLoadState();
    homePage = new bookingManagement(page);
    await homePage.adminPortal.click();
    await homePage.loginUser.fill("admin");
    await homePage.loginPass.fill("password");
    await homePage.loginButton.click();
    await expect(page.getByText("B&B Booking Management")).toBeVisible();
    await homePage.messages.click();
    await expect(page.getByText(formData.name)).toHaveCount(0);
  });
  test("create a message and confirm admin user can see it and read it", async ({
    browser,
  }) => {
    page = await browser.newPage();
    await page.goto(Env.home as string);
    await page.waitForLoadState();
    homePage = new bookingManagement(page);
    await homePage.submitForm(
      formData.name + homePage.currentTimeInMilliseconds,
      formData.email,
      formData.phoneNumber,
      formData.subject,
      formData.message
    );
    await expect(page.getByText(formData.subject)).toBeVisible();
    await homePage.adminPortal.click();
    await homePage.loginUser.fill("admin");
    await homePage.loginPass.fill("password");
    await homePage.loginButton.click();
    await expect(page.getByText("B&B Booking Management")).toBeVisible();
    await homePage.messages.click();
    await expect(
      page.getByText(formData.name + homePage.currentTimeInMilliseconds)
    ).toHaveCount(1);
    await homePage.selectMessages.click();
    await expect(page.getByText(formData.message)).toBeVisible;
  });
});
