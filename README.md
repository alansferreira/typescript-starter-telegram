# TypeScript Starter Telegram

Template base para criar bots no Telegram com TypeScript + [grammY](https://grammy.dev/).

## O que vem pronto

- Bootstrap do bot com long polling
- Tratamento de erro global (`bot.catch`)
- Encerramento gracioso (`SIGINT` / `SIGTERM`)
- Comandos iniciais:
  - `/start`
  - `/help`
- Handler de mensagens de texto (echo)
- Testes com Vitest

## Requisitos

- Node.js 20+
- Token de bot do Telegram criado via `@BotFather`

## Instalar dependencias

```bash
npm install
```

## Configurar variaveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
TELEGRAM_BOT_TOKEN=coloque_seu_token_aqui
```

## Rodar em desenvolvimento

```bash
npm run dev
```

## Rodar testes

```bash
npm test
```

## Build de producao

```bash
npm run build
npm start
```

## Docker com Buildx (imagem enxuta)

O projeto inclui `Dockerfile` multi-stage com runtime `distroless` para reduzir o tamanho final.

### Build local da imagem (single arch)

```bash
docker buildx build --load -t typescript-starter-telegram:local .
```

### Rodar container

```bash
docker run --rm -e TELEGRAM_BOT_TOKEN=seu_token typescript-starter-telegram:local
```

### Build e push multi-arch (amd64 + arm64)

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t seu-usuario/typescript-starter-telegram:latest \
  --push .
```

Observacoes:
- Passe o token por variavel de ambiente no runtime.
- A imagem final contem apenas `dist/` + runtime Node distroless.

## Estrutura principal

```text
src/
  index.ts                    # Entrada da aplicacao
  bot.ts                      # Instancia do Bot e wiring principal
  config/                     # Env e constantes
  handlers/
    commands/                 # /start, /help, etc
    messages/                 # on('message:*')
  middlewares/                # Tratamento de erro e outros middlewares
  services/telegram/          # Builders/formatacao de mensagens
  prompts/
    system/                   # Prompt de sistema
    flows/                    # Prompts por fluxo
  config/env.test.ts          # Testes de env
  services/telegram/messages.test.ts
  utils/logger.ts             # Logger de CLI
```

## Como estender o bot

Exemplo para adicionar novo comando em `src/handlers/commands/ping.ts`:

```ts
bot.command('ping', async (ctx) => {
  await ctx.reply('pong')
})
```

Depois registre em `src/handlers/commands/index.ts`.

Depois, reinicie com `npm run dev` e teste no chat com seu bot.
