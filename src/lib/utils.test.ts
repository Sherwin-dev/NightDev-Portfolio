import { cn } from './utils'
import { formatDate, formatShortDate } from './utils'

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('px-2', 'py-1')).toBe('px-2 py-1')
      expect(cn('px-2', false && 'py-1')).toBe('px-2')
      expect(cn('px-2', true && 'py-1')).toBe('px-2 py-1')
      expect(cn()).toBe('')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const dateString = '2024-01-15T10:30:00Z'
      expect(formatDate(dateString)).toBe('January 15, 2024')
    })

    it('should handle Date object input', () => {
      const date = new Date('2024-01-15T10:30:00Z')
      expect(formatDate(date)).toBe('January 15, 2024')
    })
  })

  describe('formatShortDate', () => {
    it('should format date as short month + year', () => {
      const dateString = '2024-01-15T10:30:00Z'
      expect(formatShortDate(dateString)).toBe('Jan 2024')
    })
  })
})