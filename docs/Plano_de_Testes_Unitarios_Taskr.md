# 🧪 Plano de Testes Unitários — Projeto Taskr

Este plano descreve os testes unitários a serem implementados com [Vitest](https://vitest.dev) para os principais componentes e lógicas do sistema Taskr.

---

## ✅ Objetivo

Garantir o correto funcionamento das unidades de código do projeto Taskr por meio de testes automatizados com Vitest, permitindo segurança na refatoração, documentação de comportamentos esperados e validação de regras de negócio.

---

## 🧠 Áreas a serem testadas

### 📦 Domínio e lógica

| Componente/Lógica     | Testes previstos                                        |
|------------------------|---------------------------------------------------------|
| Função `login()`       | Salva e recupera corretamente o email no localStorage  |
| Função `logout()`      | Remove o email do localStorage e reseta contexto       |
| Persistência de todos  | Salva e carrega todos no localStorage com a chave correta |
| Manipulação de todos   | Criação, edição e exclusão de tarefas em memória        |

---

### 🧩 Componentes

| Componente React   | Testes previstos                                        |
|--------------------|---------------------------------------------------------|
| `Header`           | - Input controlado<br>- Ação de submit chama função     |
| `TodoList`         | - Renderiza lista<br>- Chama `onEdit` e `onDelete`      |
| `LoginScreen`      | - Envia `login()` ao submeter email                     |
| `TasksClient`      | - Integra `Header`, `TodoList` e fluxo de edição        |

---

## ⚙️ Estratégia

- Utilizar `@testing-library/react` para testes de componentes
- Utilizar `vi.fn()` para mock de funções (login, logout, etc.)
- Utilizar `describe` + `it/test` para organizar os casos
- Cobrir casos de sucesso e falha quando aplicável

---

## 🚀 Execução dos testes

1. Instale o Vitest

```bash
pnpm add -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

2. Configure seu `vite.config.ts` (caso use)

```ts
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './vitest.setup.ts',
},
```

3. Crie um arquivo `vitest.setup.ts` com:

```ts
import '@testing-library/jest-dom'
```

4. Execute os testes

```bash
pnpm vitest run
```

---

## 📌 Observações

- Priorize testes unitários nas funções puras e lógica de estado
- Componentes já cobertos por E2E podem ter cobertura mínima aqui
- Evite testar detalhes de implementação interna

---

> Plano alinhado com o uso do Vitest para testes rápidos, modulares e integrados com o ambiente Vite + React + Tailwind.