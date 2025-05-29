import { test, expect } from '@playwright/test'

test.describe('Fluxo de tarefas', () => {
  test('usuário consegue criar uma nova tarefa', async ({ page }) => {
    // 1. Login
    await page.goto('/')
    await page.fill('input[type="email"]', 'todo@teste.com')
    await page.click('text=Entrar')

    // 2. Preencher input de tarefa
    const tarefa = 'Estudar testes com Playwright'
    await page.fill('input[placeholder="Adicione uma nova tarefa"]', tarefa)

    // 3. Clicar em Criar
    await page.click('button:has-text("Criar")')

    // 4. Verificar se tarefa está na lista
    await expect(page.locator(`text=${tarefa}`)).toBeVisible()
  })

  test('usuário consegue editar uma tarefa existente', async ({ page }) => {
    // 1. Login
    await page.goto('/')
    await page.fill('input[type="email"]', 'edit@teste.com')
    await page.click('text=Entrar')

    // 2. Criar tarefa
    const tarefaOriginal = 'Ler documentação do Playwright'
    await page.fill('input[placeholder="Adicione uma nova tarefa"]', tarefaOriginal)
    await page.click('button:has-text("Criar")')
    await expect(page.getByText(tarefaOriginal)).toBeVisible()

    // 3. Clicar no botão de edição
    await page.locator('button[title="Editar"]').first().click()

    // 4. Editar texto
    const tarefaEditada = 'Ler documentação do Playwright (atualizada)'
    await page.fill('input[placeholder="Adicione uma nova tarefa"]', tarefaEditada)

    // 5. Clicar em "Editar"
    await page.click('button:has-text("Editar")')

    // 6. Verificar se o novo texto aparece
    await expect(page.getByText(tarefaEditada)).toBeVisible()
  })

  test('usuário consegue deletar uma tarefa existente', async ({ page }) => {
    // 1. Login
    await page.goto('/')
    await page.fill('input[type="email"]', 'delete@teste.com')
    await page.click('text=Entrar')

    // 2. Criar tarefa
    const tarefa = 'Tarefa temporária para deletar'
    await page.fill('input[placeholder="Adicione uma nova tarefa"]', tarefa)
    await page.click('button:has-text("Criar")')
    await expect(page.getByText(tarefa)).toBeVisible()

    // 3. Clicar no botão de deletar
    await page.locator('button[title="Excluir"]').first().click()

    // 4. Verificar que a tarefa sumiu
    await expect(page.getByText(tarefa)).not.toBeVisible()
  })
})
