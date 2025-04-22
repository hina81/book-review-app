import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.getByRole('textbox', { name: 'メールアドレス' }).click();
  await page.getByRole('textbox', { name: 'メールアドレス' }).fill('example@email.com');
  await page.getByRole('textbox', { name: 'パスワード' }).click();
  await page.getByRole('textbox', { name: 'パスワード' }).fill('password');
  await page.getByRole('button', { name: 'ログイン' }).click();
});