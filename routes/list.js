var express = require('express');
var router = express.Router();
const pool = require('../db/db');

/* GET List page. */
router.get('/', async (req, res, next) => {

    const posts = await pool.query("SELECT * FROM blog;");
    console.log(posts[0]);
    res.render('list', { title: 'List Page', post : posts[0] });
});

router.get('/list', async (req, res, next) => {

    // const posts = await pool.query("SELECT * FROM blog;");
    const {ptitle, pvalue} = req.body;
    console.log(req.body);
    res.render('list', { title: 'List Page', post : posts[0] });
});


module.exports = router;