var express = require('express');
var app = express();

var cb0 = function (req, res, next) {
	console.log('CB0');
	next();
};

var cb1 = function (req, res, next) {
	console.log('CB1');
	next();
};

// var cb2 = function(req, res, next) {
//   res.send("Hello from C!");
// }

app.get('/example/d', [cb0, cb1], function (req, res, next) {
	console.log('response will be sent by the next function ...');
	next();
}, function (req, res) {
	res.send('Hello from D!');
});

app.listen(8081, function () {
	console.log('接口已启动');
});
