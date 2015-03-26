'use strict';

/**
 * @ngdoc function
 * @name chembiohubAssayApp.controller:ProjectassaysCtrl
 * @description
 * # ProjectassaysCtrl
 * Controller of the chembiohubAssayApp
 */
angular.module('chembiohubAssayApp')
  .controller('ProjectassaysCtrl',['$scope', 'projectKey', function ($scope, projectKey) {
    $scope.projectKey = projectKey;
  }]);
