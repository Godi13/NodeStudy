var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.use(express.static('public'));
app.get('/index', function(req, res) {
  res.sendFile(__dirname + "/views/" + "index.html");
})
app.post('/index', urlencodedParser, function(req, res) {
  console.log(req.body.username);
  res.redirect(`https://www.baidu.com/s?wd=${req.body.username}&rsv_spt=1&rsv_iqid=0xd8133afb00027f20&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=3&rsv_sug1=3&rsv_sug7=100&rsv_t=1c3db%2Fd6%2Bg%2BxIrkjc1GSeBly9moEht3bfjGG3GkEkKfXCzVKCOir2X8MzES0HqLxEcDZ&rsv_sug2=0&inputT=3835&rsv_sug4=3836`);
})

app.listen(8081, function() {
  console.log("接口已启动");
});
