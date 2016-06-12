var express = require('express');
var router = express.Router();

var user = require('../actions/user.js');

/* GET home page. */
router.get('/', function(req,res){
	res.render('index', { title: 'Interesting'});
});

module.exports = router;
