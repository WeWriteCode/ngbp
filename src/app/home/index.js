'use strict';

var angular = require('angular'),
  appConstants = require('../../constants'),
  home = require('./home');

angular.module(appConstants.controllers.home.module, [
    appConstants.router.module
  ])

  .config(home.config)
  .controller(appConstants.controllers.home.name, home.controller);
