import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        'src/app/api/*',
        'src/app/(admin)/**',
        '.next/',
        'out/',
        'dist/',
        '.vercel/',
        '**/*.config.*',
        '**/*.d.ts'
      ]
    },
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    mockReset: true,
    restoreMocks: true
  },
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  }
})