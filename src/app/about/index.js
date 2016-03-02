'use strict';

var angular = require('angular'),
  about = require('./about'),
  router = require('angular-ui-router');

angular.module(about.moduleName, [
    router
  ])

  .config(about.config)
  .controller(about.controllerName, about.controller);

module.exports = about.moduleName;
