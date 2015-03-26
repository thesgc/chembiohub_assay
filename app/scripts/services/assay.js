'use strict';

/**
 * @ngdoc service
 * @name chembiohubAssayApp.assay
 * @description
 * # assay
 * Factory in the chembiohubAssayApp.
 */
angular.module('chembiohubAssayApp')
  .factory('assay', function () {
    // Service logic
    // ...

    var assay = {
      model: {
      "target_relationship_type": "",
      "assay_type": ""
    }
    };

    // Public API here
    return {
      get: function () {
        return assay;
      }
    };
  });
