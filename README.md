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

Rodar em modo de desenvolvimento:
```bash
npm run dev 
# ou 
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

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

## 🧪 Testado em:

* Navegadores: Chrome, Firefox
* Ferramentas: DevTools, Armazenamento Local
* Sem dependências externas para backend

---

## 🏗️ Status do projeto

Iteração 2 - Concluída - O projeto segue em evolução

---

> Este projeto foi desenvolvido como parte das atividades acadêmicas da disciplina de Projeto Integrador do curso de ADS.
