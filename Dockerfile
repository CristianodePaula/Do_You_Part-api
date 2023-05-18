FROM node:19

RUN npm install -g latest-version

WORKDIR /usr/app

COPY package.json ./

RUN npm install ---legacy-pper-deps

COPY . .

EXPOSE 5000

CMD ["npm", "num", "dev"]

