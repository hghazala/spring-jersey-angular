var app = angular.module('app', ['ngResource', 'ngRoute']);

angular.module('angularWebappApp').factory('mainFactory', ['$resource','$http', function($resource, $http) {

//	return $resource('http://localhost:8080/jersey-rest/api/resource/person/:id', { id: '@_id' }, {
//	    get: {
//	      method: 'GET'
//	    }
//	  });
	var service = {
        sayHello : sayHello,
        personBy : personBy
    }
	
	return service;
	
	//////////
	function sayHello(text){
        console.log("Factory says \"Hello " + text + "\"");
    }
	
	function personBy(id){
		return $http({
            method: "GET",
            //url: urlsBackendService.urlPerson,
            url: "http://localhost:8080/jersey-rest/api/resource/person",
            params: {
            	id: id
            }
        });
	}
	
}]);