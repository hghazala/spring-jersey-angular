'use strict';

/**
 * @ngdoc function
 * @name houssamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the houssamApp
 */
angular.module('houssamApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
