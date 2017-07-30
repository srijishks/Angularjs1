'use strict';

/**
 * @ngdoc function
 * @name enatelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enatelApp
 */
angular.module('enatelApp')
  .controller('MainCtrl', ['$scope', 'storyService', function($scope, storyService) {

$scope.dataLoaded = false;
$scope.getAllDatas = storyService.getAllData().then(function(result){
	$scope.finalData = result;
	$scope.dataLoaded = true;
	});
  
}]);
