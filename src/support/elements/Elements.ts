import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class Elements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getUsernameField(): Locator {
    return this.page.locator('input[name="username"]');
  }

  getPasswordField(): Locator {
    return this.page.locator('input[name="password"]');
  }

  getLoginButton(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getDashboardTitle(): Locator {
    return this.page.locator('div[class="oxd-topbar-header-userarea"]');
  }

  getLoginError(): Locator {
    return this.page.locator('div[class="orangehrm-login-error"]');
  }

  getProfileButton(): Locator {
    return this.page.locator('[href="/web/index.php/pim/viewMyDetails"]');
  }

  getProfileNameInput(): Locator {
    return this.page.locator('input[name="firstName"]');
  }

  getProfileLastNameInput(): Locator {
    return this.page.locator('input[name="lastName"]');
  }

  getProfileSaveButton(): Locator {
    return this.page.locator('button[type="submit"]').first();
  }
}
