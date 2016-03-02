'use strict';

var app = require('../app'),
  metadata = require('../../../static/angularMetadata')('about', app.moduleName);

module.exports = {

  config: function ($stateProvider) {
    'ngInject';
    $stateProvider.state(metadata.name, {
      url: metadata.route,
      views: {
        "main": {
          controller: metadata.controllerName,
          templateUrl: metadata.template
        }
      },
      data:{ pageTitle: 'What is It?' }
    });
  },

  controller: function ($scope) {
    'ngInject';
    $scope.dropdownDemoItems = [
      "The first choice!",
      "And another choice for you.",
      "but wait! A third!"
    ];
  },

  controllerName: metadata.controllerName,
  moduleName: metadata.moduleName,
  route: metadata.route
};
