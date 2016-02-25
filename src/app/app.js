'use strict';

var constants = require('../constants');

module.exports = {

  config: function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise(constants.controllers.home.route);
  },

  controller: function ($scope, $location) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState && toState.data && toState.data.pageTitle) {
        $scope.pageTitle = toState.data.pageTitle + ' | ' + constants.app.name ;
      }
    });
  },

  run: function () {}
};
