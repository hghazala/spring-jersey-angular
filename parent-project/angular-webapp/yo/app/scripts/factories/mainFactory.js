var app = angular.module('app', ['ngResource', 'ngRoute']);

app.factory('houssam', ['$resource', function($resource) {

	return $resource('http://localhost:8080/jersey-rest/api/resource/person/:id', { id: '@_id' }, {
	    get: {
	      method: 'GET'
	    }
	  });
	
}]);