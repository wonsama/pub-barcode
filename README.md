# p-steem-runners

## 테스트

`$ nodemon ./bin/www`

## 실행

`$ pm2 start ./bin/www --name steem-account`

## 방화벽

> 방화벽이 설정된 경우 해제 또는 rule 추가를 해줘야 된다.

- 상태 확인 : `$ sudo ufw status verbose`
- 포트 추가 (3000) : `$ sudo ufw allow 3000`

> steem runners

## 참조링크

- [mozilla : Error](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [expressjs : error-handling](https://expressjs.com/ko/guide/error-handling.html)
- [jeonghwan-kim : express-error-handling](https://jeonghwan-kim.github.io/node/2017/08/17/express-error-handling.html)
- [Express : locals](https://www.tabnine.com/code/javascript/functions/express/Express/locals)
- [express : next](https://junspapa-itdev.tistory.com/13)
- [i18next : options](https://www.i18next.com/overview/configuration-options)
- [i18next : objects-and-arrays](https://www.i18next.com/translation-function/objects-and-arrays)
- [[Node.js] express session 사용하기 - serise](https://millo-l.github.io/Nodejs-express-session-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/)
- [[Node.js] Redirect 를 data 와 함께 보내는법](https://burning-camp.tistory.com/22)