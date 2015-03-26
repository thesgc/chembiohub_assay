'use strict';

/**
 * @ngdoc filter
 * @name ngChemApp.filter:toTrusted
 * @function
 * @description
 * # toTrusted
 * Filter in the ngChemApp.
 */
angular.module('chembiohubAssayApp')
  .filter('toTrusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
