import { Locator, Page } from "@playwright/test";
import { Button, Link } from "@utils/locators";
import { getByTestId } from "@utils/utils";

export default class inquiry {
  readonly page: Page;
  readonly fullName: Locator;
  readonly emailAddress: Locator;
  readonly phoneNumber: Locator;
  readonly messageSubject: Locator;
  readonly bodyOfMessage: Locator;
  readonly submitButton: Button;
  readonly adminPortal: Link;

  constructor(page: Page) {
    this.page = page;
    this.fullName = page.locator(getByTestId(["ContactName"]));
    this.emailAddress = page.locator(getByTestId(["ContactEmail"]));
    this.phoneNumber = page.locator(getByTestId(["ContactPhone"]));
    this.messageSubject = page.locator(getByTestId(["ContactSubject"]));
    this.bodyOfMessage = page.locator(getByTestId(["ContactDescription"]));
    this.submitButton = page.locator('input[value="Submit"]');
    this.adminPortal = page.locator('xpath=//*[@id="footer"]/div/p/a[5]');
  }
}
