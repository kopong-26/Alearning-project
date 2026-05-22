FROM node:22-alpine3.22 AS base

WORKDIR /app

COPY apps/alearning-frontend/package*.json apps/alearning-frontend/

COPY package*.json ./

COPY packages/types/package*.json packages/types/

FROM base AS dev

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev:frontend"]



FROM base AS build

COPY packages/ /app/packages

RUN npm ci

COPY . .

WORKDIR /app/apps/alearning-frontend

RUN npm run build -w=alearning-frontend



FROM nginx:1.26-alpine AS prod

COPY --from=build /app/apps/alearning-frontend/dist/ /usr/share/nginx/html

COPY apps/alearning-frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

