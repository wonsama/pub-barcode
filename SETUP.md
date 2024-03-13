# SETUP

> 구성환경 : express + pug + pm2 + mariadb + adminer

## INSTALL GENERATOR (설치 안 된 경우에만)

`$ npm install express-generator -g`

## EXPRESS + PUG INIT

```sh
$ express --view=pug p-steem-runners --force
$ cd p-steem-runners
$ npm install
```

사전에 폴더를 만들어 놓은 관계로 `--force` 속성을 추가

## INSTALL PM2 (설치 안 된 경우에만)

`$ npm install pm2@latest -g`

## INSTALL NODEMON (설치 안 된 경우에만)

`$ npm install -g nodemon`

## ADDED package

> `npm i dotenv body-parser express-session i18next i18next-express-middleware i18next-fs-backend i18next-http-middleware memorystore steem`

- dotenv : Loads environment variables from .env file
- body-parser : Node.js body parsing middleware
- express-session : Simple session middleware for Express
- i18next : I18next internationalization framework
- i18next-express-middleware : I18next-http-middleware is a middleware to be used with Node.js web frameworks like express or Fastify and also for Deno.
- i18next-fs-backend : I18next-fs-backend is a backend layer for i18next using in Node.js and for Deno to load translations from the filesystem.
- i18next-http-middleware : I18next-http-middleware is a middleware to be used with Node.js web frameworks like express or Fastify and also for Deno.
- memorystore : Express-session full featured MemoryStore layer without leaks!
- steem : Steem.js the JavaScript API for Steem blockchain

## 참조링크

- [expressjs : generator](https://expressjs.com/ko/starter/generator.html)
- [pm2 : home](https://pm2.keymetrics.io/)
- [Nodemon 사용하기](https://backend-intro.vlpt.us/1/03.html)
- [letsencript와 docker로 ssl 설치](http://52.78.22.201/tutorials/weplanet/docker-compose-ssl/)
