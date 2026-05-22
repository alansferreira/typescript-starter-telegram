import { Bot } from 'grammy'
import { buildHelpMessage } from '@/services/telegram/messages'
import { BotContext } from '@/types/bot-context'

export function registerHelpCommand(bot: Bot<BotContext>): void {
  bot.command('help', async (ctx) => {
    await ctx.reply(buildHelpMessage())
  })
}
