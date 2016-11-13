'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
  getAllrouters: function getAllrouters(app, router) {
    app.use(router(function (_) {
      _.get('/', _indexController2.default.index());
      _.get('/index', _indexController2.default.index());
      _.get('/index.html', _indexController2.default.index());
      _.get('/getdata', _indexController2.default.getData());
    }));
  }
};
exports.default = controllerInit;