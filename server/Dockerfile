FROM node:20
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5050
CMD ["node", "--env-file=config.env", "server"]