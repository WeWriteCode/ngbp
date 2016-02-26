'use strict';

var angular = require('angular'),
  appConstants = require('../../constants'),
  about = require('./about');

angular.module(appConstants.controllers.about.module, [
    appConstants.router.module,
    'ui.bootstrap'
  ])

  .config(about.config)
  .controller(appConstants.controllers.about.name, about.controller);
