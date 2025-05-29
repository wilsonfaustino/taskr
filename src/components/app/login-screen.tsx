'use client'

import { useAuthContext } from '@/core/context/auth-context'
import { loginSchema } from '@/core/schemas'
import { useState } from 'react'

export function LoginScreen() {
  const [input, setInput] = useState('')
  const { login } = useAuthContext()

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const parsedEmail = loginSchema.safeParse(input)
    if (!parsedEmail.success) return

    login(parsedEmail.data)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-4">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm bg-gray-900 p-6 rounded shadow">
        <h1 className="text-xl font-bold text-center text-sky-500">Bem-vindo ao Taskr</h1>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
