/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    exclude: ['e2e/*', '**/node_modules/**', '**/dist/**', '.next/**'],
    globals: true,
    setupFiles: ['./config/vitest.setup.ts'],
  },
})
