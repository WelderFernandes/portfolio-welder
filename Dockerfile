# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Instala apenas dependências de produção
COPY package*.json ./
RUN npm ci --omit=dev
# Copia artefatos de build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# Exponha a porta padrão do Next.js
EXPOSE 3000
ENV PORT=3000
# Inicia a aplicação
CMD ["npm", "run", "start"]
