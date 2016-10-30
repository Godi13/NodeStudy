const render = require('koa-swig');
const serve = require('koa-static');
const path = require('path')
const Koa = require('koa');
const router = require('koa-router')();
const mysql = require('mysql');
const co = require('co');

const app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());
require("babel-core/register");
require("babel-polyfill");

app.use(serve('public'));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'PHPtest'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

router.get('/receive', async (ctx, next) => {
  console.log('前台发来的数据', ctx.query.num);
  var post = {
    num: ctx.query.num
  };

  var query = new Promise((resolve, reject) => {
    connection.query('INSERT INTO num SET ?', post, (err, result) => {
      if (err) {
        reject({
          success: 'no',
          msg: '插入失败'
        })
      } else {
        resolve({
          success: 'yes',
          msg: '插入成功'
        })
      }
    });
  });

  ctx.body = await query;
});

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

app.use(async ctx => ctx.body = await ctx.render('index',  {
  title: 'CSS3手势变换动画特效DEMO演示'
}));

app.listen(3000);
