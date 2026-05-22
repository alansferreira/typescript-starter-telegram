import { Bot } from 'grammy'
import { registerBotHandlers } from '@/handlers'
import { registerErrorHandler } from '@/middlewares/error-handler'
import { BotContext } from '@/types/bot-context'

export function createTelegramBot(token: string): Bot<BotContext> {
  const bot = new Bot<BotContext>(token)

  registerErrorHandler(bot)
  registerBotHandlers(bot)

  return bot
}
