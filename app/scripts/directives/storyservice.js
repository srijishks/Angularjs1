'use strict';

/**
 * @ngdoc factory
 * @name enatelApp.factory:storyService
 * @description
 * # storyService
 */


angular.module('enatelApp')
 .factory('storyService', function($http, $q){
      return {
        getAllData:  function () {
        	var d = $q.defer();
      			queryApi('https://hacker-news.firebaseio.com/v0/topstories.json')
      			    .then(function (data) { 
      			        return $q.all(data.data.map(function (id) {
      			            return queryApi('https://hacker-news.firebaseio.com/v0/item/'+id+'.json');
      			        }))
      			        .then(function (results) { 
      				    	 var finalData = [];
      		                angular.forEach(results, function (result) {
      		                     finalData = finalData.concat(result);
      		                });
      		                d.resolve(finalData);
      			   		 });
      			    })
      			 return d.promise; 
    	}
}

function queryApi(subUrl) {
  var d = $q.defer();
  $http.get(subUrl).then(function(result){
      d.resolve(result);
 });
 return d.promise;
}

})
