'use strict';

var appConstants = require('../../constants');

module.exports = {

  config: function ($stateProvider) {
    $stateProvider.state(appConstants.controllers.about.baseName, {
      url: appConstants.controllers.about.route,
      views: {
        "main": {
          controller: appConstants.controllers.about.name,
          templateUrl: appConstants.controllers.about.template
        }
      },
      data:{ pageTitle: 'What is It?' }
    });
  },

  controller: function AboutCtrl($scope) {
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
      "The first choice!",
      "And another choice for you.",
      "but wait! A third!"
    ];
  }
};
