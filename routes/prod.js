var express = require('express');
var router = express.Router();

/* GET Prod page. */
router.get('/', function(req, res, next) {
  res.render('prod', { title: 'Producer Page' });
});

module.exports = router;