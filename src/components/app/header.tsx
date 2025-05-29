'use client'
import { ChangeEventHandler, FormEventHandler } from 'react'
import { CircleCheck, CirclePlus } from 'lucide-react'
import { Todo } from '@/core/@types'
import Image from 'next/image'
import { useAuth } from '@/hooks/use-auth'
import { Logout } from './logout'

interface HeaderProps {
  change: ChangeEventHandler<HTMLInputElement>
  value: string
  onSubmit: FormEventHandler<HTMLFormElement>
  edit?: Todo
  tasks: Todo[]
}

export function Header({ change, value, onSubmit, edit }: HeaderProps) {
  const { email } = useAuth()

  return (
    <header className="w-full bg-gray-900 py-6 px-4 flex flex-col justify-center border-b border-gray-800">
      <div className="w-full flex flex-col">
        <Logout />
        <div className="flex items-center justify-center gap-2">
          <Image src={'/logo-app.svg'} alt="Taskr" width={60} height={60} className="w-20" priority />
          <h1 className="text-sky-500 text-4xl font-extrabold">Taskr</h1>
        </div>
      </div>

      <form onSubmit={onSubmit} className="w-full flex gap-2 max-w-4xl self-center">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={change}
          value={value}
          required
          className="flex-1 bg-gray-800 text-white placeholder-gray-400 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {edit ? (
            <>
              Editar <CircleCheck size={20} />
            </>
          ) : (
            <>
              Criar <CirclePlus size={20} />
            </>
          )}
        </button>
      </form>
    </header>
  )
}
