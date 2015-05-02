'use strict';

/**
 * @ngdoc function
 * @name houssamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the houssamApp
 */
angular.module('houssamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
