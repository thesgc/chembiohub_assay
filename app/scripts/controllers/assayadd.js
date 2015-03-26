'use strict';

/**
 * @ngdoc function
 * @name chembiohubAssayApp.controller:AssayaddCtrl
 * @description
 * # AssayaddCtrl
 * Controller of the chembiohubAssayApp
 */
angular.module('chembiohubAssayApp')
  .controller('AssayaddCtrl', function ($scope, $rootScope, projectKey, urlConfig) {
     $rootScope.headline =  "Back to " + projectKey + " project page";
        $rootScope.subheading= "Welcome to the Assay Registration Wizard"        
        $rootScope.glyphicon = "arrow-left";
        $rootScope.tophref = (urlConfig.instance_path.url_frag + "r/#/projects/list/" + projectKey).replace("/devapi/r/","");
    
  });
