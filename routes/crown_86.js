var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_86', { title: 'Express', name:'許琦涓', id:'209410686' });
});

module.exports = router;
