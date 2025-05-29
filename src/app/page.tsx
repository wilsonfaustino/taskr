'use client'

import { LoginScreen } from '@/components/app/login-screen'
import { Tasks } from '@/components/app/tasks'
import { useAuthContext } from '@/core/context/auth-context'

export default function Home() {
  const { email } = useAuthContext()

  if (!email) return <LoginScreen />

  return (
    <div className="h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <Tasks />
    </div>
  )
}
