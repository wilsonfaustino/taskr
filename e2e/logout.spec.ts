import { test, expect } from '@playwright/test'

test('usuário consegue fazer logout e voltar para tela de login', async ({ page }) => {
  // 1. Login
  await page.goto('/')
  await page.fill('input[type="email"]', 'logout@teste.com')
  await page.click('text=Entrar')

  // 2. Confirmar que está logado
  await expect(page.getByPlaceholder('Adicione uma nova tarefa')).toBeVisible()

  // 3. Clicar em "Sair"
  await page.click('text=Sair')

  // 4. Confirmar que apareceu a mensagem de logout
  await page.click('button:has-text("Continuar")')

  // 5. Verificar que voltou para tela de login
  await expect(page.getByPlaceholder('Digite seu e-mail')).toBeVisible()
})
