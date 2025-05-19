FROM node:23-alpine

RUN npm install -g @angular/cli

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]