var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('index', { title: 'Sleepychat', version: 'Development Build 4' });
});

module.exports = router;
