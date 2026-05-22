import { Bot } from 'grammy'
import { BotContext } from '@/types/bot-context'
import { registerTextMessageHandler } from '@/handlers/messages/text'

export function registerMessageHandlers(bot: Bot<BotContext>): void {
  registerTextMessageHandler(bot)
}
