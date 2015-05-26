var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index');
});

router.get('/test', function(req, res, next){
	res.send('any string');
});

module.exports = router;