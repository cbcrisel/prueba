
FROM node:14 as node

ENV API_URL=https://pixabay.com/api/?key

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx

COPY --from=node usr/src/app/dist/pixabay /usr/share/nginx/html 