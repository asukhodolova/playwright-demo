import { test, expect } from '@playwright/test';
import { CurrentTest, zebrunner } from '@zebrunner/javascript-agent-playwright';

test('has title', async ({ page }) => {
  zebrunner.testCaseKey("ANNAS-2", "ANNAS-3");

  zebrunner.testCaseStatus("ANNAS-3", "RETEST");

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link @smoke @web', async ({ page }) => {
  CurrentTest.setMaintainer('asukhodolova');
  zebrunner.testCaseKey("ANNAS-1");

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*asdasd/);
});
