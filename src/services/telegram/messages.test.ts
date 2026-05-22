import { expect, test } from 'vitest'
import { buildHelpMessage, buildStartMessage } from '@/services/telegram/messages'

test('builds help message with expected commands', () => {
  const helpMessage = buildHelpMessage()

  expect(helpMessage).toContain('/start')
  expect(helpMessage).toContain('/help')
})

test('builds start message with fallback name', () => {
  expect(buildStartMessage()).toContain('amigo')
})
