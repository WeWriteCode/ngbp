'use strict';

module.exports = {

  config: function config($stateProvider) {
    $stateProvider.state(constants.controllers.home.baseName, {
      url: constants.controllers.home.route,
      views: {
        "main": {
          controller: constants.controllers.home.name,
          templateUrl: constants.controllers.home.template
        }
      },
      data:{ pageTitle: 'Home' }
    });
  },

  controller: function HomeController($scope) {}
};
