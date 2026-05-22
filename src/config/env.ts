export function getRequiredEnv(name: string, source = process.env): string {
  const value = source[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export type AppEnv = {
  telegramBotToken: string
}

export function loadEnv(source = process.env): AppEnv {
  return {
    telegramBotToken: getRequiredEnv('TELEGRAM_BOT_TOKEN', source),
  }
}
