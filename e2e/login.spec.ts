import { test, expect } from '@playwright/test'

test('usuário consegue logar com email', async ({ page }) => {
  await page.goto('/')

  // Verifica se o input de email está visível
  await expect(page.getByPlaceholder('Digite seu e-mail')).toBeVisible()

  // Preenche o email e clica em entrar
  await page.fill('input[type="email"]', 'teste@email.com')
  await page.click('button:has-text("Entrar")')

  // Aguarda algum conteúdo da tela de tarefas
  await expect(page.getByPlaceholder('Adicione uma nova tarefa')).toBeVisible()
})
