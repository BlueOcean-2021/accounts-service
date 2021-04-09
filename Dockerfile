#FROM arm64v8/node:lts-alpine
FROM node:lts-buster

WORKDIR /app
COPY . .

EXPOSE 4000

RUN yarn install --frozen-lockfile

CMD ["node","-r", "esm", "server.js"]
