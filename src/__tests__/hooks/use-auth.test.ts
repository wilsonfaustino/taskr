import { renderHook, act } from '@testing-library/react'
import { useAuth } from '@/hooks/use-auth'

describe('useAuth hook', () => {
  // Mock localStorage
  const localStorageMock = (() => {
    let store: Record<string, string> = {}
    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key]
      }),
      clear: vi.fn(() => {
        store = {}
      }),
    }
  })()

  beforeEach(() => {
    // Setup localStorage mock
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    })
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should initialize with null email', () => {
    const { result } = renderHook(() => useAuth())
    expect(result.current.email).toBe(null)
  })

  it('should load email from localStorage on initialization', () => {
    localStorageMock.getItem.mockReturnValueOnce('test@example.com')

    const { result } = renderHook(() => useAuth())

    expect(localStorageMock.getItem).toHaveBeenCalledWith('taskr:email')
    expect(result.current.email).toBe('test@example.com')
  })

  it('should set email and save to localStorage when login is called', () => {
    const { result } = renderHook(() => useAuth())

    act(() => {
      result.current.login('test@example.com')
    })

    expect(result.current.email).toBe('test@example.com')
    expect(localStorageMock.setItem).toHaveBeenCalledWith('taskr:email', 'test@example.com')
  })

  it('should clear email and remove from localStorage when logout is called', () => {
    // Setup initial state with logged in user
    localStorageMock.getItem.mockReturnValueOnce('test@example.com')
    const { result } = renderHook(() => useAuth())

    act(() => {
      result.current.logout()
    })

    expect(result.current.email).toBe(null)
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('taskr:email')
  })
})
