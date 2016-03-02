'use strict';

var angular = require('angular'),
  home = require('./home'),
  router = require('angular-ui-router');

angular.module(home.moduleName, [
    router
  ])

  .config(home.config)
  .controller(home.controllerName, home.controller);

module.exports = home.moduleName;
