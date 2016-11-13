/*global describe, it*/
'use strict';
var superagent = require('supertest');
var app = require('../src/app');

function request() {
  return superagent(app.listen());
}

describe('【测试路由】', function() {
  describe('测试根路径', function() {
    it('Htpp请求报头应该为 200', function(done) {
      request()
      .get('/')
      .expect(200, done);
    });
  });
});
