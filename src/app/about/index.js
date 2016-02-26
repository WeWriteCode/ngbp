'use strict';

var angular = require('angular'),
  appConstants = require('../../constants'),
  about = require('./about'),
  router = require('angular-ui-router');

angular.module(appConstants.controllers.about.module, [
    router
  ])

  .config(about.config)
  .controller(appConstants.controllers.about.name, about.controller);
