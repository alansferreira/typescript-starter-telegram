import { Bot } from 'grammy'
import { buildStartMessage } from '@/services/telegram/messages'
import { BotContext } from '@/types/bot-context'

export function registerStartCommand(bot: Bot<BotContext>): void {
  bot.command('start', async (ctx) => {
    await ctx.reply(buildStartMessage(ctx.from?.first_name))
  })
}
