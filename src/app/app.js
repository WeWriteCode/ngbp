'use strict';

var home = require('./home/home'),
  metadata = require('../../static/angularMetadata')('app');

module.exports = {

  config: function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise(home.route);
  },

  controller: function ($scope) {
    'ngInject';
    $scope.$on('$stateChangeSuccess', function (event, toState) {
      if (toState && toState.data && toState.data.pageTitle) {
        $scope.pageTitle = toState.data.pageTitle + ' | ' + metadata.name ;
      }
    });
  },

  controllerName: metadata.controllerName,
  moduleName: metadata.moduleName,

  run: function () {}
};
