var express = require('express');
var router = express.Router();

var activity = require('../actions/activity.js');

/* GET users listing. */
router.get('/list', activity.list);

module.exports = router;