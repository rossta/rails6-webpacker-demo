FROM ruby:2.7

RUN curl https://deb.nodesource.com/setup_12.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo 'deb http://dl.yarnpkg.com/debian/ stable main' > /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq && \
  apt-get install -y nodejs yarn postgresql-client apt-transport-https ca-certificates

RUN gem install bundler -v2.1.2

RUN mkdir /app
WORKDIR /app
