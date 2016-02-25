'use strict';

var angular = require('angular'),
  appConstants = require('../constants'),
  app = require('./app');

angular.module( appConstants.appName, [
    'templates-app',
    'templates-common',
    appConstants.controllers.home.module,
    appConstants.controllers.about.module,
    appConstants.router.module
  ])

  .config(app.config)
  .run(app.run)
  .controller(appConstants.app.controller.name, app);

require('./about');
require('./home');
