'use client'

import { useState, useEffect } from 'react'

export function useAuth() {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('taskr:email')
    if (stored) setEmail(stored)
  }, [])

  function login(email: string) {
    localStorage.setItem('taskr:email', email)
    setEmail(email)
  }

  function logout() {
    localStorage.removeItem('taskr:email')
    setEmail(null)
  }

  return { email, login, logout }
}
