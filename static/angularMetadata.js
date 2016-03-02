'use strict';

module.exports = function (name, namespace) {
  return {
    controllerName: name + 'Ctlr',
    moduleName: namespace ? namespace + '.' + name : name,
    name: name,
    route: '/' + name,
    template: name + '/' + name + '.tpl.html'
  };
};
