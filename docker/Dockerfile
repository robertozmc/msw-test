# syntax = docker/dockerfile:1.0-experimental

##########
#        #
#  test  #
#        #
##########

FROM node:18 AS test

ENV NODE_ENV=test

COPY app/package.json /app/package.json

WORKDIR /app
RUN npm i

COPY app /app

ENTRYPOINT [ "npm", "run", "test" ]
