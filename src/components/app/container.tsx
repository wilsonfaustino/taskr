'use client'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen w-full flex-col items-center bg-gray-100 dark:bg-gray-900">{children}</div>
}
