FROM node:16.13.1-alpine 

RUN mkdir -p /usr/src/app
ENV PORT 4001

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install

COPY . /usr/src/app

RUN yarn build

EXPOSE 4001
CMD [ "yarn", "start" ]