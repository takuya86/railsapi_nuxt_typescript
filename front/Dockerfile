FROM node:16

RUN npm install -g typescript@4.4.4

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git && \
    yarn global add @vue/cli && \
    yarn global add @vue/cli-init

COPY . /app