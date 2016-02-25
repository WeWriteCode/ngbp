'use strict';

var appConstants = require('../../constants');

module.exports = {

  config: function config($stateProvider) {
    $stateProvider.state(appConstants.controllers.home.baseName, {
      url: appConstants.controllers.home.route,
      views: {
        "main": {
          controller: appConstants.controllers.home.name,
          templateUrl: appConstants.controllers.home.template
        }
      },
      data:{ pageTitle: 'Home' }
    });
  },

  controller: function HomeController() {}
};
