import { test, expect } from '@playwright/test';

test('fluxo_acesso_get_started', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('https://playwright.dev/');

  // 2. Clicar no botão 'Get started'
  await page.getByRole('link', { name: 'Get started' }).click();

  // 3. VALIDAÇÃO: Garantir que a URL mudou e estamos na página correta
  await expect(page).toHaveURL(/.*intro/);
  
  // 4. Opcional: Validar que o título da página está correto
  await expect(page).toHaveTitle(/Installation/);
});