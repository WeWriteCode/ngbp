'use strict';

var angular = require('angular'),
  constants = require('../../constants'),
  about = require('./about');

angular.module(constants.controllers.about.module, [
    constants.router.module,
    'placeholders',
    'ui.bootstrap'
  ])

  .config(about.config)
  .controller(constants.controllers.about.name, about.controller);
