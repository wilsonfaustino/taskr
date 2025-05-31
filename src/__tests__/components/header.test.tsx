import { screen, fireEvent } from '@testing-library/react'
import { Todo } from '@/core/@types'
import { Header } from '@/components/app/header'
import { renderWithContext } from '../utils/test-utils'

// Mock the next/image component
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}))

// Mock the Logout component
vi.mock('@/components/app/logout', () => ({
  Logout: () => <div data-testid="logout-component">Logout Component</div>,
}))

describe('Header Component', () => {
  const mockChange = vi.fn()
  const mockSubmit = vi.fn((e) => e.preventDefault())
  const defaultProps = {
    change: mockChange,
    value: '',
    onSubmit: mockSubmit,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly with default props', () => {
    renderWithContext(<Header {...defaultProps} />)

    expect(screen.getByText('Taskr')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Adicione uma nova tarefa')).toBeInTheDocument()
    expect(screen.getByText('Criar')).toBeInTheDocument()
    expect(screen.getByTestId('logout-component')).toBeInTheDocument()
  })

  it('shows edit button when edit prop is provided', () => {
    const editTodo: Todo = { id: '1', title: 'Test Todo', completed: false, userId: 'user1' }
    renderWithContext(<Header {...defaultProps} edit={editTodo} />)

    expect(screen.getByText('Editar')).toBeInTheDocument()
    expect(screen.queryByText('Criar')).not.toBeInTheDocument()
  })

  it('calls onChange handler when input value changes', () => {
    renderWithContext(<Header {...defaultProps} />)

    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    fireEvent.change(input, { target: { value: 'New Task' } })

    expect(mockChange).toHaveBeenCalled()
  })

  it('calls onSubmit handler when form is submitted', () => {
    renderWithContext(<Header {...defaultProps} />)

    const form = screen.getByRole('textbox').closest('form')
    fireEvent.submit(form!)

    expect(mockSubmit).toHaveBeenCalled()
  })

  it('displays the correct value in the input field', () => {
    const value = 'Test Task'
    renderWithContext(<Header {...defaultProps} value={value} />)

    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    expect(input).toHaveValue(value)
  })
})
