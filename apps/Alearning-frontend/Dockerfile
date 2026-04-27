FROM node:22-alpine3.22 AS base

WORKDIR /app

COPY apps/alearning-frontend/package*.json apps/alearning-frontend/

COPY package*.json ./

COPY packages/types/package*.json packages/types/

FROM base AS dev

RUN npm install

COPY . .

CMD ["npm", "run", "dev:frontend"]

EXPOSE 5173

