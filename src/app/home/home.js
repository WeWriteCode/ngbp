'use strict';

var app = require('../app'),
  metadata = require('../../../static/angularMetadata')('home', app.moduleName);

module.exports = {

  config: function config($stateProvider) {
    'ngInject';
    $stateProvider.state(metadata.name, {
      url: metadata.route,
      views: {
        "main": {
          controller: metadata.controllerName,
          templateUrl: metadata.template
        }
      },
      data:{ pageTitle: 'Home' }
    });
  },

  controller: function HomeController() {},
  controllerName: metadata.controllerName,
  moduleName: metadata.moduleName,
  route: metadata.route
};
