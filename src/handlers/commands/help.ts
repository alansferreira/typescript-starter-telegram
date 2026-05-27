import { Bot } from 'grammy'
import { BotContext } from '@/types/bot-context'

export function registerHelpCommand(bot: Bot<BotContext>): void {
  bot.command('help', async (ctx) => {
    await ctx.reply([
      'Comandos disponiveis:',
      '/start - inicia o bot',
      '/help - mostra esta ajuda',
      '',
      'Tambem posso ecoar mensagens de texto que voce enviar.',
    ].join('\n'))
  })
}
