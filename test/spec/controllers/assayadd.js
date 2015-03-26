'use strict';

describe('Controller: AssayaddCtrl', function () {

  // load the controller's module
  beforeEach(module('chembiohubAssayApp'));

  var AssayaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssayaddCtrl = $controller('AssayaddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
