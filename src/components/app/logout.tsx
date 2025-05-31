'use client'

import { useAuthContext } from '@/core/context/auth-context'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'

export function Logout() {
  const { logout, email } = useAuthContext()

  function handleLogout() {
    logout()
  }

  return (
    <div className="flex items-center justify-between gap-4 mb-4 self-end" data-testid="logout-component">
      <span>{email}</span>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={'destructive'} title="sair" className="text-gray-300 hover:text-red-500 transition-colors">
            Sair
            <LogOut size={24} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja sair?</AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita. Você terá que fazer login novamente para continuar usando o Taskr.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
