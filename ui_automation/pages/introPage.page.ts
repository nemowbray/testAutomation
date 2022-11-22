import { Locator, Page } from "@playwright/test";
import * as formData from "@data/messageForm.json";

export default class bookingManagement {
  readonly page: Page;
  readonly fullName: Locator;
  readonly emailAddress: Locator;
  readonly phoneNumber: Locator;
  readonly messageSubject: Locator;
  readonly bodyOfMessage: Locator;
  readonly submitButton: Locator;
  readonly adminPortal: Locator;
  readonly loginUser: Locator;
  readonly loginPass: Locator;
  readonly loginButton: Locator;
  readonly messages: Locator;
  readonly selectMessages: Locator;
  readonly currentTimeInMilliseconds: Number;

  constructor(page: Page) {
    this.page = page;
    this.fullName = page.getByTestId("ContactName");
    this.emailAddress = page.getByTestId("ContactEmail");
    this.phoneNumber = page.getByTestId("ContactPhone");
    this.messageSubject = page.getByTestId("ContactSubject");
    this.bodyOfMessage = page.getByTestId("ContactDescription");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.adminPortal = page
      .locator("#footer")
      .getByRole("link", { name: "Admin panel" });
    this.loginUser = page.getByTestId("username");
    this.loginPass = page.getByTestId("password");
    this.loginButton = page.getByTestId("submit");
    this.messages = page.locator('//*[@class="notification"]');
    this.currentTimeInMilliseconds = Date.now();
    this.selectMessages = page.getByText(
      formData.name + this.currentTimeInMilliseconds
    );
  }
  async submitForm(
    name: string,
    email: string,
    phoneNumber: string,
    subject: string,
    message: string
  ) {
    await this.fullName.fill(name);
    await this.emailAddress.fill(email);
    await this.phoneNumber.fill(phoneNumber);
    await this.messageSubject.fill(subject);
    await this.bodyOfMessage.fill(message);
    await this.submitButton.click();
  }
}
