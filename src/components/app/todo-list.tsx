'use client'
import { Todo } from '@/core/@types'
import { cn } from '@/lib/utils'
import { Pencil, Trash2 } from 'lucide-react'

interface TodoListProps {
  todos: Todo[]
  onComplete: (id: string) => void
  onEdit: (todo: Todo) => void
  onDelete: (id: string) => void
}

export function TodoList({ todos, onEdit, onDelete, onComplete }: TodoListProps) {
  if (todos.length === 0) {
    return <div className="text-center text-gray-500 mt-10">Nenhuma tarefa encontrada. Adicione uma nova acima ☝️</div>
  }

  return (
    <ul className="mt-8 w-full max-w-4xl mx-auto flex flex-col gap-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={cn(
            'flex justify-between items-center p-4 bg-gray-800 rounded shadow',
            todo.completed ? 'opacity-50' : '',
          )}
        >
          <div className={cn('flex items-center gap-2', todo.completed ? 'line-through text-gray-500' : '')}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onComplete(todo.id)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="flex-1">{todo.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(todo)}
              className="text-blue-400 hover:text-blue-600 transition"
              title="Editar"
            >
              <Pencil size={20} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-400 hover:text-red-600 transition"
              title="Excluir"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
