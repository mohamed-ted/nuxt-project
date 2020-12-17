FROM node:14.0.0
ENV APP_ROOT /app

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY package.json package.json
RUN yarn install

ADD . .
# RUN npm run start

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
