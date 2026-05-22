import { HELP_LINES } from '@/config/constants'

export function buildHelpMessage(): string {
  return HELP_LINES.join('\n')
}

export function buildStartMessage(firstName?: string): string {
  const name = firstName ?? 'amigo'
  return `Oi, ${name}! Eu sou seu template base com grammY.`
}

export function buildEchoMessage(text: string): string {
  return `Recebi sua mensagem: ${text}`
}
