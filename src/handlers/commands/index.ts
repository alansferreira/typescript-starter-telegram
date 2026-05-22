import { Bot } from 'grammy'
import { BotContext } from '@/types/bot-context'
import { registerHelpCommand } from '@/handlers/commands/help'
import { registerStartCommand } from '@/handlers/commands/start'

export function registerCommandHandlers(bot: Bot<BotContext>): void {
  registerStartCommand(bot)
  registerHelpCommand(bot)
}
