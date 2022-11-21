import { Page } from "@playwright/test";
import { Locator } from "playwright";

export default class admin {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly messages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByTestId("username");
    this.password = page.getByTestId("password");
    this.loginButton = page.getByTestId("submit");
    this.messages = page.getByRole("link", { name: "1" });
  }
  async authenticate(name: string, pass: string) {
    await this.username.fill(name);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}
