'use strict';

describe('Home', function() {
  var home = require('./home');

  describe('Configuration', function () {
    it('should exist', function () {
      expect(home.config).toBeTruthy();
    });
  });

  describe('Controller', function () {
    it('should exist', function () {
      expect(home.controller).toBeTruthy();
    });
  });

});

