'use strict';

var appConstants = require('../constants');

module.exports = {

  config: function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise(appConstants.controllers.home.route);
  },

  controller: function ($scope) {
    $scope.$on('$stateChangeSuccess', function(event, toState) {
      if (toState && toState.data && toState.data.pageTitle) {
        $scope.pageTitle = toState.data.pageTitle + ' | ' + appConstants.app.name ;
      }
    });
  },

  run: function () {}
};
