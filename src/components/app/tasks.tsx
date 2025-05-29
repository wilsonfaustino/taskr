'use client'

import { Header } from './header'
import { TodoList } from './todo-list'
import { useTasks } from '@/hooks/use-tasks'

export function Tasks() {
  const { input, todos, handleSubmit, setInput, edit, handleEdit, handleComplete, handleDelete } = useTasks()

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header value={input} change={(e) => setInput(e.target.value)} onSubmit={handleSubmit} edit={edit} />
      <TodoList todos={todos} onEdit={handleEdit} onComplete={handleComplete} onDelete={handleDelete} />
    </main>
  )
}
