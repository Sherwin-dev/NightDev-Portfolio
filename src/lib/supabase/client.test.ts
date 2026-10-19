import { describe, expect, it, vi } from 'vitest'
import { isSupabaseConfigured, createClient } from './client'

describe('Supabase client', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('isSupabaseConfigured', () => {
    it('should return true when both URL and key are set and not placeholder', () => {
      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key-123'

      expect(isSupabaseConfigured()).toBe(true)
    })

    it('should return false when URL is missing', () => {
      process.env.NEXT_PUBLIC_SUPABASE_URL = ''
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key-123'

      expect(isSupabaseConfigured()).toBe(false)
    })

    it('should return false when key is missing', () => {
      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = ''

      expect(isSupabaseConfigured()).toBe(false)
    })

    it('should return false when URL contains placeholder', () => {
      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://your-project.supabase.co'
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key-123'

      expect(isSupabaseConfigured()).toBe(false)
    })
  })

  describe('createClient', () => {
    it('should return a no-op client when not configured', () => {
      process.env.NEXT_PUBLIC_SUPABASE_URL = ''
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = ''

      const client = createClient()

      // Check that it has the expected structure of a no-op client
      expect(client).toHaveProperty('auth')
      expect(client.auth).toHaveProperty('getUser')
      expect(typeof client.auth.getUser).toBe('function')

      expect(client).toHaveProperty('from')
      expect(typeof client.from).toBe('function')

      expect(client).toHaveProperty('storage')
      expect(client.storage).toHaveProperty('from')
      expect(typeof client.storage.from).toBe('function')
    })
  })
})