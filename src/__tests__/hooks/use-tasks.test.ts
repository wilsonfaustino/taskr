import { useAuth } from '@/hooks/use-auth'
import { useTasks } from '@/hooks/use-tasks'
import { renderHook, act } from '@testing-library/react'

// Mock useAuth hook
vi.mock('@/hooks/use-auth', () => ({
  useAuth: vi.fn(),
}))

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('useTasks', () => {
  const mockEmail = 'test@example.com'

  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.clear()
    // Mock useAuth return value
    vi.mocked(useAuth).mockReturnValue({ email: mockEmail, login: vi.fn(), logout: vi.fn() })
  })

  it('should initialize with empty todos', () => {
    const { result } = renderHook(() => useTasks())
    expect(result.current.todos).toEqual([])
  })

  it('should load todos from localStorage', () => {
    const mockTodos = [{ id: '1', title: 'Test Todo', completed: false, userId: mockEmail }]
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockTodos))

    const { result } = renderHook(() => useTasks())
    expect(result.current.todos).toEqual(mockTodos)
    expect(localStorageMock.getItem).toHaveBeenCalledWith(`taskr:todos-${mockEmail}`)
  })

  it('should add a new todo', () => {
    vi.spyOn(Date, 'now').mockReturnValue(1234567890)

    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.setInput('New Todo')
    })
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent<HTMLFormElement>)
    })

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0]).toEqual({
      id: '1234567890',
      title: 'New Todo',
      completed: false,
      userId: mockEmail,
    })
    expect(result.current.input).toBe('')
  })

  it('should edit a todo', () => {
    const initialTodos = [{ id: '1', title: 'Test Todo', completed: false, userId: mockEmail }]
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(initialTodos))

    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.handleEdit(initialTodos[0])
    })

    expect(result.current.input).toBe('Test Todo')
    expect(result.current.edit).toEqual(initialTodos[0])

    act(() => {
      result.current.setInput('Updated Todo')
    })
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent<HTMLFormElement>)
    })

    expect(result.current.todos[0].title).toBe('Updated Todo')
    expect(result.current.edit).toBeUndefined()
    expect(result.current.input).toBe('')
  })

  it('should complete a todo', () => {
    const initialTodos = [{ id: '1', title: 'Test Todo', completed: false, userId: mockEmail }]
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(initialTodos))

    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.handleComplete('1')
    })

    expect(result.current.todos[0].completed).toBe(true)

    act(() => {
      result.current.handleComplete('1')
    })

    expect(result.current.todos[0].completed).toBe(false)
  })

  it('should delete a todo', () => {
    const initialTodos = [{ id: '1', title: 'Test Todo', completed: false, userId: mockEmail }]
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(initialTodos))

    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.handleDelete('1')
    })

    expect(result.current.todos).toHaveLength(0)
  })

  it('should clear edit state when deleting the todo being edited', () => {
    const initialTodos = [{ id: '1', title: 'Test Todo', completed: false, userId: mockEmail }]
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(initialTodos))

    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.handleEdit(initialTodos[0])
    })

    expect(result.current.edit).toEqual(initialTodos[0])

    act(() => {
      result.current.handleDelete('1')
    })

    expect(result.current.edit).toBeUndefined()
  })

  it('should save todos to localStorage when todos change', () => {
    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.setInput('New Todo')
      result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent<HTMLFormElement>)
    })

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      `taskr:todos-${mockEmail}`,
      JSON.stringify(result.current.todos),
    )
  })
})
