var express = require('express');
var router = express.Router();

/* GET Write page. */
router.get('/', function(req, res, next) {
  res.render('write', { title: 'Wtrite Page' });
});

module.exports = router;