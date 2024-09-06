#base image
FROM node:20.7.0-alpine AS builder

WORKDIR /usr/app 

COPY package*.json .

RUN npm ci 

COPY . .

RUN npm run build 

FROM node:20.7.0-alpine

WORKDIR /usr/app 

COPY --from=builder /usr/app/.next ./.next

COPY package*.json .

RUN npm ci --only=production

CMD [ "npm" , "start" ]