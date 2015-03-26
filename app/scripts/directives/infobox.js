'use strict';

/**
 * @ngdoc directive
 * @name ngChemApp.directive:infoBox
 * @description
 * # infoBox
 */
angular.module('chembiohubAssayApp')
  .directive('infoBox', function () {
    return {
      templateUrl: 'views/templates/info-template.html',
      restrict: 'E',
      transclude: true,
      /*link: function postLink(scope, element, attrs) {
        element.text('this is the infoBox directive');
      }*/
      controller: ['$scope', 'MessageFactory', function($scope, MessageFactory) {
      	//$scope.tooltext = "test here";
      	$('[data-toggle="popover"]').popover( {trigger: 'click focus'} );
      	if($scope.freetext) {
      		$scope.displaytext = $scope.freetext;
      	}
      	else {
      		$scope.displaytext = MessageFactory.getMessage($scope.lookup);
      	}

      	
      }],
      scope: {
      	//use lookup if you are using the MessageFactory service
        lookup:'@',
        //use direct if you want to enter ad hoc text
        freetext:'@',

      }
    };
  });
