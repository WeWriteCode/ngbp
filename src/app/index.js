'use strict';

var angular = require('angular'),
  appConstants = require('../constants'),
  app = require('./app'),
  router = require('angular-ui-router');

angular.module(appConstants.app.name, [
    'templates-app',
    appConstants.controllers.home.module,
    appConstants.controllers.about.module,
    router
  ])

  .config(app.config)
  .run(app.run)
  .controller(appConstants.app.controller.name, app.controller);

require('./about');
require('./home');
