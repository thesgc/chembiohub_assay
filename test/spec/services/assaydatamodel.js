'use strict';

describe('Service: assayDataModel', function () {

  // load the service's module
  beforeEach(module('chembiohubAssayApp'));

  // instantiate service
  var assayDataModel;
  beforeEach(inject(function (_assayDataModel_) {
    assayDataModel = _assayDataModel_;
  }));

  it('should do something', function () {
    expect(!!assayDataModel).toBe(true);
  });

});
