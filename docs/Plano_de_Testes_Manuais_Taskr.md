# ✅ Plano de Testes Manuais — Projeto Taskr

Este plano orienta a execução manual dos testes do sistema Taskr por um usuário avaliador (QA), com foco na experiência e no comportamento funcional da aplicação em diferentes cenários.

---

## 🎯 Objetivo

Verificar manualmente o comportamento da aplicação em suas funcionalidades principais, validando a consistência da interface e a integridade dos dados armazenados.

---

## 🧪 Casos de Teste

### CT01 - Login com e-mail válido

- Acesse: `http://localhost:3000`
- Informe um e-mail válido e clique em **Entrar**
- ✅ Resultado esperado: usuário é direcionado à tela de tarefas

---

### CT02 - Criar nova tarefa

- Com o usuário logado, preencha o campo com uma nova tarefa
- Clique em **Criar**
- ✅ Resultado esperado: tarefa é exibida na lista abaixo

---

### CT03 - Criar tarefa com campo vazio

- Clique em **Criar** sem preencher o campo
- ✅ Resultado esperado: campo é marcado como inválido (validação HTML)

---

### CT04 - Editar tarefa existente

- Clique no ícone de **editar** em uma tarefa
- O conteúdo será carregado no input
- Altere o texto e clique em **Editar**
- ✅ Resultado esperado: tarefa na lista é atualizada

---

### CT05 - Deletar tarefa

- Clique no ícone de **lixeira** ao lado de uma tarefa
- ✅ Resultado esperado: tarefa é removida da lista

---

### CT06 - Logout

- Clique no botão **Sair**
- ✅ Resultado esperado: usuário é redirecionado à tela de login

---

### CT07 - Persistência após recarregar a página

- Crie uma ou mais tarefas
- Recarregue a página
- ✅ Resultado esperado: tarefas continuam visíveis, persistidas no localStorage

---

## 📋 Observações

- Testes devem ser feitos em ambiente local (`localhost:3000`)
- Acompanhar console do navegador para identificar possíveis erros
- Registrar qualquer comportamento inesperado ou falha de layout

---

> Documento de apoio para validação manual do sistema Taskr.