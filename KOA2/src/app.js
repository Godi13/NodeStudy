/*
 *@Description Test
 *@Author mqzq9388@gmail.com
 *@Date 2016-11-11
 */
'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _config = require('./conf/config');

var _config2 = _interopRequireDefault(_config);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

require('babel-core/register');

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//koa1 转换器
var app = new _koa2.default();
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewDir'),
    autoescape: true,
    cache: 'memory', //disable, set to false
    ext: 'html',
    writeBody: false
}));

_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default); //初始化controllers
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_config2.default.get('staticDir'))));

//监听端口🐂😊
app.listen(_config2.default.get('port'));
console.log('listening on port %s', _config2.default.get('port'));

// export default app;
// 测试 service
module.exports = app;