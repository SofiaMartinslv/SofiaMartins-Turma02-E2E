import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import AuthPage from '../support/pages/AuthPage';
import ProfilePage from '../support/pages/ProfilePage';

test.describe('Atualização de conta', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let authPage: AuthPage;
  let profilePage: ProfilePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    profilePage = new ProfilePage(page);
    await page.goto(BASE_URL);
  });

  test('Atualiza cadastro do usuário', async () => {
    await authPage.login();
    await profilePage.goToProfilePage();
    await profilePage.updateFullName();
  });
});
