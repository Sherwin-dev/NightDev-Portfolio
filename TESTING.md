# Testing Infrastructure

This document describes the testing infrastructure set up for the NightDev Portfolio project.

## Overview

The project uses Vitest as the testing framework with React Testing Library for component testing.

## Dependencies

Added to `devDependencies` in package.json:
- `vitest` - Testing framework
- `@vitest/coverage-v8` - Coverage reporting
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers for DOM elements
- `@testing-library/user-event` - User event simulation utilities
- `jsdom` - JavaScript implementation of DOM and web standards
- `@types/jest` - TypeScript definitions for Jest/Vitest

## Configuration

### vitest.config.ts
```typescript
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
```

### src/test/setup.ts
```typescript
// Test setup file
import '@testing-library/jest-dom'
// Import matchers from @testing-library/jest-dom
```

### package.json scripts
```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest watch",
    "test:coverage": "vitest run --coverage",
    // ... other scripts
  }
}
```

### tsconfig.json
Added `"types": ["jest"]` to compilerOptions for TypeScript support of test globals.

## Test Files

Tests are colocated with the source files they test, using the `.test.ts` or `.test.tsx` suffix:

- `src/lib/utils.test.ts` - Tests for utility functions
- `src/components/ui/button.test.tsx` - Tests for Button component
- `src/lib/supabase/client.test.ts` - Tests for Supabase client wrapper

## Running Tests

- `bun run test` - Run all tests once
- `bun run test:watch` - Run tests in watch mode
- `bun run test:coverage` - Run tests with coverage report

## Testing Conventions

1. **File placement**: Test files are placed next to the source file they test
2. **Naming**: Use `.test.ts` or `.test.tsx` suffix
3. **Utilities**: Use React Testing Library's `render`, `screen`, and user event utilities
4. **Mocking**: Mock external dependencies (like Supabase) when necessary
5. **Environment**: Tests run in jsdom environment for browser-like DOM APIs

## Notes

- The `isSupabaseConfigured` function was exported from `src/lib/supabase/client.ts` to enable direct testing
- Path alias `@/` is configured to point to `./src` for consistent imports
- Test setup includes `@testing-library/jest-dom` for custom matchers like `.toBeInTheDocument()`