'use strict';

describe('Controller: ProjectassaysCtrl', function () {

  // load the controller's module
  beforeEach(module('chembiohubAssayApp'));

  var ProjectassaysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectassaysCtrl = $controller('ProjectassaysCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
