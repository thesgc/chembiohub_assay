'use strict';

/**
 * @ngdoc function
 * @name chembiohubAssayApp.controller:XlsCtrl
 * @description
 * # XlsCtrl
 * Controller of the chembiohubAssayApp
 */
angular.module('chembiohubAssayApp')
  .controller('XlsCtrl', [ '$scope', 'xlsservice', function ($scope, xlsservice) {
    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/

    /* Plan
    Get current data into a hands on table
    get data using a alasql statement into handsontable (I think)
    */

  $scope.xlsconfig = xlsservice.get();

  $scope.fetchAssayMaterials = xlsservice.assayMaterials();

  $scope.selected = { tab: 0};

  $scope.fetchColumns = function(tab_index) {
    var cols = []
    angular.forEach($scope.xlsconfig.experimentForm[0].tabs[tab_index].items, function(field){
      var col = {title: $scope.xlsconfig.schema[field].title, data:$scope.xlsconfig.assayData[field]};
      cols.push(col);

    });
    return cols;
  }




  }]);
