'use strict';

describe('Controller: main', function() {

  // load the controller's module
  beforeEach(module('yeomanAngularSample'));

  var mainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    mainController = $controller('main', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
