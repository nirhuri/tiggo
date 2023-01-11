FROM node:alpine

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]