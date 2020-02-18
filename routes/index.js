var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('x')
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/galery', function(req, res, next) {
  res.render('mygaleri', { title: 'Express' });
});

module.exports = router;


