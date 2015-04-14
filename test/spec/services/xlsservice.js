'use strict';

describe('Service: xlsservice', function () {

  // load the service's module
  beforeEach(module('chembiohubAssayApp'));

  // instantiate service
  var xlsservice;
  beforeEach(inject(function (_xlsservice_) {
    xlsservice = _xlsservice_;
  }));

  it('should do something', function () {
    expect(!!xlsservice).toBe(true);
  });

});
