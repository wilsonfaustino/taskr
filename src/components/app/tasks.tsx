'use client'

import { useState } from 'react'
import { Header } from './header'
import { TodoList } from './todo-list'
import { Todo } from '@/core/@types'

const userID = 'user123'

export function Tasks() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [edit, setEdit] = useState<Todo | undefined>(undefined)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (edit) {
      setTodos((prev) => prev.map((t) => (t.id === edit.id ? { ...t, title: input } : t)))
      setEdit(undefined)
    } else {
      const newTodo: Todo = {
        userId: userID,
        id: Date.now().toString(),
        title: input,
        completed: false,
      }
      setTodos((prev) => [...prev, newTodo])
      console.log('New Todo:', newTodo)
    }

    setInput('')
  }

  function handleEdit(todo: Todo) {
    setInput(todo.title)
    setEdit(todo)
  }

  function handleComplete(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  function handleDelete(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    if (edit?.id === id) setEdit(undefined)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header
        value={input}
        change={(e) => setInput(e.target.value)}
        onSubmit={handleSubmit}
        onInvalid={(e) => e.preventDefault()}
        edit={edit}
        tasks={todos}
        loading={false}
      />
      <TodoList todos={todos} onEdit={handleEdit} onComplete={handleComplete} onDelete={handleDelete} />
    </main>
  )
}
