FROM node:22-alpine3.22 AS base

WORKDIR /app

COPY apps/alearning-backend/package*.json apps/alearning-backend/

COPY package*.json ./

COPY packages/types/package*.json packages/types/

FROM base AS dev

RUN npm install

COPY . .

CMD ["npm", "run", "dev:backend"]

EXPOSE 3333

FROM base AS prod

COPY packages/ /app/packages

RUN npm ci 

COPY . .

RUN npm run build:backend

RUN npm ci --omit="dev" -w=alearning-backend

CMD [ "node", "apps/alearning-backend/build/bin/server.js" ]







