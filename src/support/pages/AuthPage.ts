import { Page, expect } from '@playwright/test';
import Elements from '../elements/Elements';
import BasePage from './BasePage';

export default class AuthPage extends BasePage {
  readonly elements: Elements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.elements = new Elements(page);
  }

  async login(): Promise<void> {
    await this.elements.getUsernameField().fill('Admin');
    await this.elements.getPasswordField().fill('admin123');
    await this.elements.getLoginButton().click();

    await expect(this.elements.getDashboardTitle()).toBeVisible();
  }

  async loginError(): Promise<void> {
    await this.elements.getUsernameField().fill('123');
    await this.elements.getPasswordField().fill('123');
    await this.elements.getLoginButton().click();

    await expect(this.elements.getLoginError()).toBeVisible();
  }
}
