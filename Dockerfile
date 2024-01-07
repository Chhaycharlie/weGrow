# First stage build 
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


# second stage build 
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app 

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080

COPY package.json .
COPY vite.config.js .

RUN npm i vite@latest -D
EXPOSE 8080
CMD ["npm","run","preview"]



