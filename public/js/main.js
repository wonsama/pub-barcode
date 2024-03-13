// main.js
// var el = document.querySelector("#odometer");
// od = new Odometer({
//   el: el,
//   value: 0,
//   format: "",
//   theme: "digital",
// });
// od.update(9);
// setTimeout(() => {
//   od.update(0);
//   setTimeout(() => {
//     od.update(Math.floor(Math.random() * 10));
//   }, 1000);
// }, 1000);
// $("#v-pills-profile-tab a").on("click", function (e) {
//   e.preventDefault();
//   $(this).tab("show");
// });

// pug 의 경우 랜더링 시점 때문에 이벤트를 개별 등록 처리 해주도록 한다
// $("#v-pills-tab button").on("click", function (e) {
//   // console.log("clicked");
//   e.preventDefault();
//   $(this).tab("show");
// });

window.onload = function () {
  let installed = false;

  // keychain install check
  if (window.steem_keychain) {
    steem_keychain.requestHandshake(function () {
      installed = true;
    });
  } else {
    //! TODO : 키체인 미설치 경고
  }

  // 로그인
  $("#inp-login").on("keypress", (e) => {
    if (e.originalEvent.key == "Enter") {
      _login();
    }
  });
  $("#btn-login").on("click", _login);

  // 로그아웃
  $("#btn-logout").on("click", () => {
    $("#btn-logout").attr("disabled", true);
    $("#btn-logout").addClass("disabled");
    $("#frm-logout").trigger("submit");
  });

  // 내 캐릭 이동
  let moveIt = () => {
    let pos = parseInt($(`#me_${username}`).css("left").replace("px", ""));
    $(`#me_${username}`).css("left", pos + 1);
    if (pos < 3000) {
      setTimeout(moveIt, 100);
    }
  };
  if (username) {
    moveIt();
  }
};

function _login() {
  let username = $("#inp-login").val().trim();
  if (username) {
    steem_keychain.requestSignBuffer(
      username,
      "login",
      "Posting", // Memo, Active, Posting
      function (response) {
        if (response.success) {
          $("#inp-login,#btn-login").attr("disabled", true);
          $("#inp-login,#btn-login").addClass("disabled");
          $("#frm-username").val(username);
          $("#frm-login").trigger("submit");
        }
      }
    );
  }
}
