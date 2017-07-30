'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('enatelApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

describe('getAllData', function () {
     it('To call getAllData function', function () {
         var $scope = {};
         var $http = {};  
         var $controller = {};  
         
         var controller = $controller('MainCtrl',{
             $scope: $scope,
             $controller:$controller
      });
      $scope.getAllDatas();
      });
     });
});
