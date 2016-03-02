'use strict';

describe('About', function() {
  var about = require('./about');

  describe('Configuration', function () {
    it('should exist', function () {
      expect(about.config).toBeTruthy();
    });
  });

  describe('Controller', function () {
    it('should exist', function () {
      expect(about.controller).toBeTruthy();
    });
  });

});
