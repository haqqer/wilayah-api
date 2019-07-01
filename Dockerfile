FROM node:carbon-alpine

WORKDIR /app

#COPY package.json /app

#RUN npm install 

RUN npm install pm2 -g

CMD ["pm2-runtime", "app.js"]

EXPOSE 9000
