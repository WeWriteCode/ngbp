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

var constants = {
  app: {
    controller: {
      name: controllerName(appName)
    },
    module: appName,
    name: appName
  },
  controllers: {},
  directives: {},
  router: {
    module: 'ui.router'
  }
};

function addController(name) {
  constants.controllers[name] = {
    baseName: name,
    module: appDot(name),
    name: controllerName(name),
    route: route(name),
    template: name + '/' + name + '.tpl.html'
  };
}

function addDirective(name) {
  constants.directives[name] = {
    baseName: name,
    module: name,
    name: name
  };
}

addController('about');
addController('home');
addDirective('sample');

module.exports = constants;
