////////////////////////////////////////////////////////////
//
// information (소개)
//

/*
  파일명 : wrap.js

  설명 : 비동기 함수 오류 래퍼

  최초작성일 : 2022.04.10

  REF : 
  https://jeonghwan-kim.github.io/node/2017/08/17/express-error-handling.html
*/

////////////////////////////////////////////////////////////
//
// require (라이브러리 로딩)
//

////////////////////////////////////////////////////////////
//
// const (상수정의)
//

////////////////////////////////////////////////////////////
//
// let (변수정의)
//

////////////////////////////////////////////////////////////
//
// private function (비공개 함수) 함수명을 _(언더스코어) 로 시작
//

////////////////////////////////////////////////////////////
//
// public function (공개 함수)
//

function wrapAsync(fn) {
  return function (req, res, next) {
    // 모든 오류를 .catch() 처리하고 체인의 next() 미들웨어에 전달하세요
    // (이 경우에는 오류 처리기)
    fn(req, res, next).catch(next);
  };
}

////////////////////////////////////////////////////////////
//
// exports (외부 노출 함수 지정)
//

module.exports = {
  wrapAsync,
};