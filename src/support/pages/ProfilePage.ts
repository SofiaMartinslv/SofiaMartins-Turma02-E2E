import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import Elements from '../elements/Elements';
import BasePage from './BasePage';

export default class ProfilePage extends BasePage {
  readonly elements: Elements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.elements = new Elements(page);
  }

  async goToProfilePage(): Promise<void> {
    await this.elements.getProfileButton().click();
    await expect(this.page.getByText('Employee Full Name')).toBeVisible();
  }

  async updateFullName(): Promise<void> {
    await this.elements.getProfileNameInput().fill(faker.person.firstName());
    await this.elements.getProfileLastNameInput().fill(faker.person.lastName());

    await this.elements.getProfileSaveButton().click();
    await expect(this.page.getByText('Successfully Updated')).toBeVisible();
  }
}
