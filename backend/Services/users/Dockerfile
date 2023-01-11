FROM node:alpine

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm install --only=prod

COPY . .

RUN npm run build

CMD ["npm", "start"]