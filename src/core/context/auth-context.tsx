'use client'

import { useAuth } from '@/hooks/use-auth'
import { createContext, useContext, ReactNode } from 'react'

interface AuthContextType {
  email: string | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { email, login, logout } = useAuth()

  return <AuthContext.Provider value={{ email, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuthContext must be used within AuthProvider')
  return context
}
