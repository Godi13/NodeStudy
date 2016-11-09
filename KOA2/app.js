'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var render = require('koa-swig');
var serve = require('koa-static');
var path = require('path');
var Koa = require('koa');
var router = require('koa-router')();
var mysql = require('mysql');
var koaBody = require('koa-body')(); //post request need
var co = require('co');

var app = new Koa();
app.use(serve('public'));
app.use(router.routes());
app.use(router.allowedMethods());
require("babel-core/register");
require("babel-polyfill");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'PHPtest'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

router.post('/receive', koaBody, function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    var post, query;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log('前台发来的数据', ctx.query.num);
            console.log('前台发来的数据', ctx.request.body);

            post = {
              num: ctx.request.body.num
            };
            query = new Promise(function (resolve, reject) {
              connection.query('INSERT INTO num SET ?', post, function (err, result) {
                if (err) {
                  reject({
                    success: 'no',
                    msg: '插入失败'
                  });
                } else {
                  resolve({
                    success: 'yes',
                    msg: '插入成功'
                  });
                }
              });
            });
            _context.next = 5;
            return query;

          case 5:
            ctx.body = _context.sent;

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

app.use(function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ctx.render('index', {
              title: 'CSS3手势变换动画特效DEMO演示'
            });

          case 2:
            return _context2.abrupt('return', ctx.body = _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());

app.listen(3000);
