import { test, expect } from '@playwright/test';

test('Meu primeiro teste no Google', async ({ page }) => {
  // 1. Vai até ao site do Google
  await page.goto('https://www.google.com');

  // 2. Valida se a página abriu verificando o título
  await expect(page).toHaveTitle(/Google/);
});