FROM node:20-alpine AS base

ENV COREPACK_INTEGRITY_KEYS=0
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@10.19.0 --activate
RUN NODE_ENV=development pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable && corepack prepare pnpm@10.19.0 --activate
RUN pnpm run build

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 appuser

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@10.19.0 --activate
RUN pnpm install --prod --frozen-lockfile

COPY server.js ./server.js
COPY api ./api
COPY --from=builder /app/dist ./dist

RUN chown -R appuser:nodejs /app

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]
