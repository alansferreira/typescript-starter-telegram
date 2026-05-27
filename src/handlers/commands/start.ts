import { Bot } from 'grammy'
import { BotContext } from '@/types/bot-context'

export function registerStartCommand(bot: Bot<BotContext>): void {
  bot.command('start', async (ctx) => {
    const name = ctx.from?.first_name ?? 'amigo'
    await ctx.reply(`Oi, ${name}! Eu sou seu template base com grammY.`)
  })
}
