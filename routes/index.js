const express = require("express");
const router = express.Router();
const { getAccounts } = require("../utils/wsteem");
const { wrapAsync } = require("../utils/wrap");

const ACCOUNT_REWARD = process.env.ACCOUNT_REWARD || "wsm.runner";

// wrapAsync : 비동기 오류 처리를 하기 위해 사용

router.post("/login", (req, res, next) => {
  if (req.body.username) {
    req.session.username = req.body.username;
  }
  res.redirect("/");
});

router.post("/logout", (req, res, next) => {
  req.session.username = undefined;
  res.redirect("/");
});

router.get(
  "/",
  wrapAsync(async function (req, res, next) {
    let result = await getAccounts(
      req.session.username
        ? [ACCOUNT_REWARD, req.session.username]
        : [ACCOUNT_REWARD]
    );

    // TODO : DB에서 정보 가져온 것으로 바꾸기
    let join = await getJoin();
    let history = await getHistory();
    let voting = await getVoting();
    let rank = await getRank();
    let round = 3;

    let r = result[0];
    let p = result.length == 2 ? result[1] : undefined;
    res.render("index", {
      reward: r.balance.split(" ")[0],
      username: req.session.username,
      steem: p ? p.balance.split(" ")[0] : 0,
      sbd: p ? p.sbd_balance.split(" ")[0] : 0,
      round,
      join,
      history,
      voting,
      rank,
    });
  })
);

async function getJoin() {
  return {
    round: 37,
    username: "wonsama",
    day: 4,
    roundend: false,
    moved: 6,
    end: 50,
    joined: [
      { day: 4, boost: 0, time: "", dice: 0, valid: true, fee: 1 },
      { day: 3, boost: 0, time: "", dice: 0, valid: true, fee: 2 },
      {
        day: 2,
        boost: 2,
        time: "2022-04-02 13:00:13",
        dice: 5,
        valid: true,
        fee: 1,
      },
      {
        day: 2,
        boost: 1,
        time: "2022-04-02 12:00:12",
        dice: 3,
        valid: false,
        fee: 1,
      },
      {
        day: 1,
        boost: 1,
        time: "2022-04-01 11:00:11",
        dice: 1,
        valid: true,
        fee: 1,
      },
    ],
  };
}

async function getHistory() {
  return [
    {
      username: "glory7",
      day: 2,
      boost: 1,
      time: "2022-04-02 12:00:12",
      dice: 3,
    },
    {
      username: "wonsama",
      day: 2,
      boost: 1,
      time: "2022-04-02 12:00:12",
      dice: 3,
    },
    {
      username: "donekim",
      day: 2,
      boost: 1,
      time: "2022-04-02 12:00:12",
      dice: 3,
    },
    {
      username: "donekim",
      day: 2,
      boost: 1,
      time: "2022-04-02 12:00:12",
      dice: 3,
    },
    {
      username: "wonsama",
      day: 2,
      boost: 1,
      time: "2022-04-02 12:00:12",
      dice: 3,
    },
  ];
}

async function getVoting() {
  return [
    {
      username: "wonsama",
      title: "[개발] STEEM-RUNNERS 개발 진행사항",
      time: "2022-04-02 12:00:12",
      permlink: "steem-runners",
    },
    {
      username: "wonsama",
      title: "[개발] STEEM-RUNNERS 개발 1111111111111",
      time: "2022-04-02 12:00:12",
      permlink: "steem-runners",
    },
    {
      username: "glory7",
      title: "[개발] STEEM-RUNNERS 개발 22222222222222222",
      time: "2022-04-02 12:00:12",
      permlink: "steem-runners",
    },
    {
      username: "donekim",
      title: "[개발] STEEM-RUNNERS 개발 33333333",
      time: "2022-04-02 12:00:12",
      permlink: "steem-runners",
    },
  ];
}

async function getRank() {
  return [
    {
      username: "glory7",
      time: "2022-04-02 12:00:12",
      moved: 50,
    },
    {
      username: "wonsama",
      time: "2022-04-02 12:00:12",
      moved: 30,
    },
    {
      username: "donekim",
      time: "2022-04-02 12:00:12",
      moved: 10,
    },
  ];
}

module.exports = router;
