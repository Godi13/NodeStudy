"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var db = require('mysql-promise')();

db.configure({
  "host": "localhost",
  "user": "root",
  "password": "",
  "database": "PHPtest"
});

var indexModel = {
  data: function data(num) {
    var _this = this;

    var snum = num;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var promise, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve, reject) {
                setTimeout(function () {
                  resolve(++snum);
                  //reject(error);
                }, 1000);
              });

            case 2:
              promise = _context.sent;
              result = new Promise(function (resolve, reject) {
                db.query('UPDATE num SET num = ? where id=1', [promise]).then(function (result) {
                  var err = result[0]['changedRows'];
                  console.log(err);
                  if (err == 0) {
                    reject({
                      msg: "no"
                    });
                  } else {
                    resolve({
                      msg: "ok"
                    });
                  }
                });
              });
              return _context.abrupt("return", result);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};
exports.default = indexModel;