FROM node:22

RUN npm i -g pnpm

WORKDIR /app

COPY package*.json ./

RUN pnpm i

COPY . .

ENV DOCKERIZE_VERSION=v0.8.0
RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 8080

CMD ["npm", "run", "start"]