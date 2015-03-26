'use strict';

/**
 * @ngdoc filter
 * @name ngChemApp.filter:notEmpty
 * @function
 * @description
 Ensures that an object is not empty
 * # notEmpty
 * Filter in the ngChemApp.
 */
angular.module('chembiohubAssayApp')
  .filter('notEmpty', function () {
    return function (input) {
      return Object.keys(input).length > 0;
    };
  });
