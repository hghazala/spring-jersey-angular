'use strict';

/**
 * @ngdoc function
 * @name angularWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebappApp
 */
angular.module('angularWebappApp').controller('MainCtrl', ['$scope','$http', function($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
//    $scope.id = 1;
//    var person = houssam.get({ id: $scope.id }, function() {
//        debugger;
//    	console.log(person);
//      });
    
    function hello() {
    	//alert("Hello");
    	$http.get('http://localhost:8080/jersey-rest/api/resource/person/1').
        success(function(data) {
        	debugger;
            $scope.person = data;
        });
    }
    hello();
  }]);
