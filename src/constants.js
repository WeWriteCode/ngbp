'use strict';

var appName = 'appName';

function appDot(name) {
  return appName + '.' + name;
}

function controllerName(name) {
  return name + 'Controller';
}

function route(name) {
  return '/' + name;
}

function addController(controllers, name) {
  controllers[name] = {
    baseName: name,
    module: appDot(name),
    name: controllerName(name),
    route: route(name),
    template: name + '/' + name + '.tpl.html'
  };
}

var constants = {
  app: {
    controller: {
      name: controllerName(appName)
    },
    module: appName,
    name: appName
  },
  controllers: {},
  router: {
    module: 'ui.router'
  }
};

addController(constants.controllers, 'about');
addController(constants.controllers, 'home');

module.exports = constants;
