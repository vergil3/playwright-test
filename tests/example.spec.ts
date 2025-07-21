import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    //test comment
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});