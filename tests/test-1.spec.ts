import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/signIn');
  await page.getByRole('textbox', { name: 'example@email.com' }).click();
  await page.getByRole('textbox', { name: 'example@email.com' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('password');
  await page.getByRole('textbox', { name: 'password' }).press('Enter');
  await page.getByRole('button', { name: 'サインイン' }).click();
});