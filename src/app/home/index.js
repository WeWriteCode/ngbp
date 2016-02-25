'use strict';

var angular = require('angular'),
  constants = require('../../constants'),
  home = require('./home');

angular.module(constants.controllers.home.module, [
    constants.router.module,
    'plusOne'
  ])

  .config(home.config)
  .controller(constants.controllers.home.name, home.controller);
