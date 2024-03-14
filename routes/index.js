const express = require('express');
const router = express.Router();
const { wrapAsync } = require('../utils/wrap');

router.get('/code', function (req, res, next) {
  res.render('code', {});
});

module.exports = router;
