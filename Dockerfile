FROM node

WORKDIR /server

COPY . .

RUN npm install

ENV PORT 3000


CMD ["node", "server.js"]

