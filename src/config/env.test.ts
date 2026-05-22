import { expect, test } from 'vitest'
import { getRequiredEnv } from '@/config/env'

test('returns required env var value', () => {
  expect(getRequiredEnv('TELEGRAM_BOT_TOKEN', { TELEGRAM_BOT_TOKEN: 'abc123' })).toBe('abc123')
})

test('throws when required env var is missing', () => {
  expect(() => getRequiredEnv('TELEGRAM_BOT_TOKEN', {})).toThrow(
    'Missing required environment variable: TELEGRAM_BOT_TOKEN',
  )
})
