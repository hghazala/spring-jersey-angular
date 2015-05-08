'use strict';

/**
 * @ngdoc function
 * @name angularWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebappApp
 */
angular.module('angularWebappApp').controller('MainCtrl', ['$scope','$http','mainFactory', function($scope, $http, mainFactory) {
    
//    function personBy(id) {
//    	$http.get('http://localhost:8080/jersey-rest/api/resource/person/'+id).
//        success(function(data) {
//            $scope.person = data;
//            console.log($scope.person);
//        });
//    }
//    personBy(1);
    mainFactory.sayHello('Houssam');
    mainFactory.personBy(1).success(successPerson);
    function successPerson(data){
    	debugger;
    	$scope.person = data;
    }
  }
]);
