'use client'
import { ChangeEventHandler, FormEventHandler } from 'react'
import { CircleCheck, CirclePlus, LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import { Todo } from '@/core/@types'
import Image from 'next/image'

interface HeaderProps {
  change: ChangeEventHandler<HTMLInputElement>
  value: string
  onSubmit: FormEventHandler<HTMLFormElement>
  onInvalid: FormEventHandler<HTMLInputElement>
  edit?: Todo
  tasks: Todo[]
  loading: boolean
}

export function Header({ change, value, onSubmit, onInvalid, edit, loading }: HeaderProps) {
  async function handleLogout() {
    // await signOut(auth)
    console.log('Logout')
  }

  const load = loading

  return (
    <header className="w-full bg-gray-900 py-6 px-4 flex flex-col justify-center border-b border-gray-800">
      <div className="w-full flex flex-col">
        <Button
          variant={'destructive'}
          title="sair"
          onClick={handleLogout}
          className="text-gray-300 hover:text-red-500 transition-colors self-end"
        >
          Sair
          <LogOut size={24} />
        </Button>
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
          onInvalid={onInvalid}
          required
          className="flex-1 bg-gray-800 text-white placeholder-gray-400 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={load}
          className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
