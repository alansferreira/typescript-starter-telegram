import { Bot } from 'grammy'
import { BotContext } from '@/types/bot-context'

export function registerTextMessageHandler(bot: Bot<BotContext>): void {
  bot.on('message:text', async (ctx) => {
    await ctx.reply(`Recebi sua mensagem: ${ctx.message.text}`)
  })
}
