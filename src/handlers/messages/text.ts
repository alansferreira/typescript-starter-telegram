import { Bot } from 'grammy'
import { buildEchoMessage } from '@/services/telegram/messages'
import { BotContext } from '@/types/bot-context'

export function registerTextMessageHandler(bot: Bot<BotContext>): void {
  bot.on('message:text', async (ctx) => {
    await ctx.reply(buildEchoMessage(ctx.message.text))
  })
}
