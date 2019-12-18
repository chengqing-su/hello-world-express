FROM node:lts-alpine

WORKDIR /app

RUN addgroup -S appuser \
  && adduser -S -G appuser appuser \
  && chown -R appuser:appuser /app

USER appuser

# Defaults
ENV NODE_ENV=production
ENV PORT=3000

# Expose app-server port
EXPOSE $PORT

COPY package.json package.json
COPY yarn.lock yarn.lock

# Pre-install
RUN yarn install --prod

# Copy the file
COPY dist dist

CMD ["node", "dist/index"]
