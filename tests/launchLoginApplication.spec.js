import { test, expect } from '@playwright/test';

test('Login to OrangeHRM application', async ({ page }) => {
  // Navigate to application
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Login
  await page.fill('[placeholder=\'Username\']', 'Admin');
  await page.fill('[placeholder=\'Password\']', 'admin123');
  await page.click('[type=\'submit\']');

  // Assertion: verify URL after login
  await expect(page).toHaveURL(/dashboard/);

  // Optional: verify dashboard element is visible
  await expect(page.locator('h6', { hasText: 'Dashboard' })).toBeVisible();

});
