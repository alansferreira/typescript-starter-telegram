import { Bot } from 'grammy'
import { BotContext } from '@/types/bot-context'
import { logger } from '@/utils/logger'

export function registerErrorHandler(bot: Bot<BotContext>): void {
  bot.catch((error) => {
    const message = error.error instanceof Error ? error.error.message : String(error.error)

    logger.error('Unhandled bot error', {
      updateId: error.ctx.update.update_id,
      message,
    })
  })
}
