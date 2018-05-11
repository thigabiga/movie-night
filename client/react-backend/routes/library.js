var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/library', function(req, res, next) {
  res.render('library', { title: 'My Lists' });
});

module.exports = router;
