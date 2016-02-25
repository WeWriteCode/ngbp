'use strict';

describe('App', function () {
  var app = require('./app');

  describe('Configuration', function () {
    it('should exist', function () {
      expect(app.config).toBeTruthy();
    });
  });

  describe('Controller', function () {
    it('should exist', function () {
      expect(app.controller).toBeTruthy();
    });
  });

  describe('Runner', function () {
    it('should exist', function () {
      expect(app.run).toBeTruthy();
    });
  });
});
