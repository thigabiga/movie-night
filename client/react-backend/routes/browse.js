var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/browse', function(req, res, next) {
  res.render("browse", { title: "Browse Movies" });
});

module.exports = router;
