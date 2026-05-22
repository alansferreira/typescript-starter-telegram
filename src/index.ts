import dotenv from 'dotenv'
import { BOT_NAME } from '@/config/constants'
import { loadEnv } from '@/config/env'
import { createTelegramBot } from '@/bot'
import { logger } from '@/utils/logger'

dotenv.config()

function main(): void {
	logger.banner(BOT_NAME)
	logger.info('Loading environment...')

	const env = loadEnv()
	const bot = createTelegramBot(env.telegramBotToken)

	bot.start({
		onStart: (botInfo) => {
			logger.success(`Bot @${botInfo.username} is running`)
			logger.list(['Long polling ativo', 'Comandos /start e /help prontos'])
		},
	})

	process.once('SIGINT', () => bot.stop())
	process.once('SIGTERM', () => bot.stop())
}

main()

