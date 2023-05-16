FROM ruby:2.6.6

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN mkdir /app
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev sudo && \
    gem install bundler:2.0.1

RUN bundle install

COPY . /app