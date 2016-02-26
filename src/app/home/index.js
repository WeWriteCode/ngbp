'use strict';

var angular = require('angular'),
  appConstants = require('../../constants'),
  home = require('./home'),
  router = require('angular-ui-router');

angular.module(appConstants.controllers.home.module, [
    router
  ])

  .config(home.config)
  .controller(appConstants.controllers.home.name, home.controller);
