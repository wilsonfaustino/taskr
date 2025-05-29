import { Todo } from '@/core/@types'
import { useEffect, useState } from 'react'
import { useAuth } from './use-auth'

const userID = 'user123'

export function useTasks() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [edit, setEdit] = useState<Todo | undefined>(undefined)
  const { email } = useAuth()

  useEffect(() => {
    if (email) {
      const data = localStorage.getItem(`taskr:todos-${email}`)
      if (data) {
        setTodos(JSON.parse(data))
      }
    }
  }, [email])

  useEffect(() => {
    if (email) {
      localStorage.setItem(`taskr:todos-${email}`, JSON.stringify(todos))
    }
  }, [todos, email])

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
      if (process.env.NODE_ENV === 'development') {
        console.log('New Todo:', newTodo)
      }
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

  return {
    handleComplete,
    handleDelete,
    handleEdit,
    handleSubmit,
    edit,
    input,
    setInput,
    todos,
  }
}
