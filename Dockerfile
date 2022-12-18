FROM node:lts-alpine

# Setup project's working directory
WORKDIR /usr/src/simple-teapot

COPY . .

RUN npm install

EXPOSE 4180
CMD [ "npm", "run", "start" ]
