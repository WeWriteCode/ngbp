'use strict';

var constants = require('../../constants');

module.exports = {

  config: function ($stateProvider) {
    $stateProvider.state(constants.controllers.about.baseName, {
      url: constants.controllers.about.route,
      views: {
        "main": {
          controller: constants.controllers.about.name,
          templateUrl: constants.controllers.about.template
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
