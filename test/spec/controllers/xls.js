'use strict';

describe('Controller: XlsCtrl', function () {

  // load the controller's module
  beforeEach(module('chembiohubAssayApp'));

  var XlsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    XlsCtrl = $controller('XlsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
