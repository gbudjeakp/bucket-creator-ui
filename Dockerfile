FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY curriculum-front/nodeServer.js dist/nodeServer.js
EXPOSE 4200
WORKDIR /usr/src/app/dist
CMD ["npm", "start"]



