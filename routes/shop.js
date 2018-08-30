var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('shop', { title: 'Shop' });
	var obj;
	fs.readFile('./db/shop.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.render('shop', { shop: obj });
		// console.log(obj);
	});
});

module.exports = router;
