import { Bot } from 'grammy'
import { BotContext } from '@/types/bot-context'
import { registerCommandHandlers } from '@/handlers/commands'
import { registerMessageHandlers } from '@/handlers/messages'

export function registerBotHandlers(bot: Bot<BotContext>): void {
  registerCommandHandlers(bot)
  registerMessageHandlers(bot)
}
