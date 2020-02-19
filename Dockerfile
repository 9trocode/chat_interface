FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY .env.example /app/.env
RUN cp .env.example .env
RUN npm install

COPY . .

EXPOSE 3333

CMD npm start
