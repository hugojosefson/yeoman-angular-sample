'use strict';

describe('To date string filter', function () {
  var filter;

  beforeEach(function () {

    // We load all the module dependencies up front.
    module('yeomanAngularSample');

    // Injecting all of our dependencies in the "beforeEach" section allows us to avoid cluttering out tests.
    inject(function ($filter) {
      filter = $filter('toDateString');
    });

  });

  it('should convert a unix epoch number to an ISO 8601 date time string', function () {

    expect(filter('1349539521000')).toBe('2012-10-06T16:05:21.000Z');

  });
});
       