# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

COPY tsconfig.json webpack.config.cjs ./
COPY src ./src
RUN npm run build
RUN npm prune --omit=dev

FROM gcr.io/distroless/nodejs22-debian12:nonroot AS runtime
WORKDIR /app

ENV NODE_ENV=production
COPY --from=build /app/dist ./
COPY --from=build /app/node_modules ./node_modules

CMD ["index.js"]
