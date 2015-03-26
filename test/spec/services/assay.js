'use strict';

describe('Service: assay', function () {

  // load the service's module
  beforeEach(module('chembiohubAssayApp'));

  // instantiate service
  var assay;
  beforeEach(inject(function (_assay_) {
    assay = _assay_;
  }));

  it('should do something', function () {
    expect(!!assay).toBe(true);
  });

});
