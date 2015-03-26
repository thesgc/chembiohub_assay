'use strict';

/**
 * @ngdoc function
 * @name ngChemApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the ngChemApp
 */
angular.module('chembiohubAssayApp')
  .controller('ProjectCtrl', [ '$scope', '$rootScope', '$state', 'ProjectFactory', 'MessageFactory', '$stateParams','urlConfig', function ($scope, $rootScope, $state, ProjectFactory, MessageFactory, $stateParams, urlConfig) {
    //stuff
    //$scope.currentProjectKey = $stateParams.projectKey;
    $scope.urlConfig =  urlConfig;
    $rootScope.headline = "Projects";
    $rootScope.subheading = "Click 'Show Project List' to see your projects";
    $rootScope.help_lookup = "projects_help"
    $rootScope.glyphicon = "folder-open";

    $scope.getMessage = function(lookup_str){
        return MessageFactory.getMessage(lookup_str);

    }


    
  }]);
