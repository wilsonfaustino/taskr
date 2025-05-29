
# 🧠 Taskr

**Taskr** é uma aplicação web para gerenciamento de tarefas, desenvolvida como parte do projeto integrador do curso de Análise e Desenvolvimento de Sistemas.

---

## 🚀 Iteração 2 — Funcionalidade + Contexto + Persistência

Esta iteração amplia a PoC inicial, adicionando autenticação simulada e salvamento de tarefas por usuário no `localStorage`, tudo com um código limpo, componentizado e responsivo.

### Principais recursos implementados:

- 📧 Login simulando múltiplos usuários com email único
- 📦 Persistência automática das tarefas via `localStorage`
- 🧠 Contexto global de autenticação com `Context API`
- 📋 Gerenciamento de tarefas com `adicionar`, `editar`, `excluir`
- 💅 Interface estilizada com Tailwind CSS 4
- ⚙️ Separação clara entre componentes de interface e lógica de domínio

---

## 🧩 Componentes principais

- `AuthProvider`: fornece contexto global de autenticação
- `LoginScreen`: tela de login simples via email
- `TasksClient`: gerencia lógica da aplicação e renderiza tarefas
- `Header`: input e botão de ação (criar/editar)
- `TodoList`: renderiza tarefas e ações (editar/deletar)

---

## 📦 Como rodar localmente

### 1. Instale as dependências

```bash
npm install
# ou
pnpm install
```

### 2. Rode o ambiente de desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 📁 Estrutura esperada no localStorage

```json
{
  "taskr:email": "usuario@email.com",
  "taskr:todos-usuario@email.com": [
    { "id": "1", "title": "Estudar React", "done": false },
    ...
  ]
}
```

---

## ✅ Testes E2E com Playwright

O projeto conta com uma suíte completa de testes end-to-end utilizando o [Playwright](https://playwright.dev/), garantindo qualidade e confiabilidade na experiência do usuário.

### 📋 O que é testado:

- Login por email
- Criação de tarefas
- Edição de tarefas
- Exclusão de tarefas
- Logout

### 🧪 Como executar os testes

1. Instale os navegadores necessários:

```bash
pnpm dlx playwright install --with-deps
```

2. Rode os testes localmente:

```bash
pnpm tes:e2e
```

3. Abra o relatório HTML:

```bash
pnpm dlx playwright show-report
```

### 🎥 Evidências

- Cada teste gera vídeos (`video.webm`) e screenshots automáticas (em falhas).
- O relatório completo em HTML é salvo na pasta `playwright-report/`.
- No CI (GitHub Actions), os relatórios e vídeos são anexados como artefatos de build.

> Playwright está configurado para rodar automaticamente em cada push ou pull request via GitHub Actions.

---

## 🏗️ Status do projeto

**Iteração 2 - Concluída**  
O projeto segue pronto para evolução.

---

> Projeto acadêmico desenvolvido para o componente curricular de Projeto Integrador no curso de ADS.
