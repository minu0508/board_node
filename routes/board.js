var express = require('express');
var router = express.Router();

/* GET Board page. */
router.get('/', function(req, res, next) {
  res.render('board', { title: 'Board Home Page' });
});

module.exports = router;