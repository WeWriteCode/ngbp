'use strict';

var angular = require('angular'),
  app = require('./app'),
  router = require('angular-ui-router'),
  about = require('./about'),
  home = require('./home');

angular.module(app.moduleName, [
    'templates-app',
    home,
    about,
    router
  ])

  .config(app.config)
  .run(app.run)
  .controller(app.controllerName, app.controller);
