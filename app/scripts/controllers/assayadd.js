'use strict';

/**
 * @ngdoc function
 * @name chembiohubAssayApp.controller:AssayaddCtrl
 * @description
 * # AssayaddCtrl
 * Controller of the chembiohubAssayApp
 */
angular.module('chembiohubAssayApp')
  .controller('AssayaddCtrl', ['$scope', '$rootScope', 'projectKey', 'urlConfig', 'assayDataModel', 'assay', 
    function ($scope, $rootScope, projectKey, urlConfig, assayDataModel, assay) {
    $scope.assay = assay.get();
    $scope.codeMirrorOptions = {
      lineNumbers : true,
      lineWrapping : true,
      placeholder : 'Type the steps of your protocol here, step numbers will be added for you as shown.'
    }
     $scope.assayDataModel = assayDataModel.get();
     $rootScope.headline =  "Back to " + projectKey + " project page";
        $rootScope.subheading= "Welcome to the Assay Registration Wizard"        
        $rootScope.glyphicon = "arrow-left";
        $rootScope.tophref = (urlConfig.instance_path.url_frag + "r/#/projects/list/" + projectKey).replace("/devapi/r/","");
    
  }]);
