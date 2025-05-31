import { render } from '@testing-library/react'
import { AuthProvider } from '@/core/context/auth-context'

export function renderWithContext(ui: React.ReactElement) {
  return render(<AuthProvider>{ui}</AuthProvider>)
}
