import { test, expect } from '@playwright/test';

test('teste simples de instalacao', async ({ page }) => {
  // Acessa a página oficial do Playwright
  await page.goto('https://playwright.dev/');

  // Clica no link 'Get started'
  await page.getByRole('link', { name: 'Get started' }).click();

  // Valida que estamos na página correta verificando se a URL contém 'intro'
  await expect(page).toHaveURL(/.*intro/);
});