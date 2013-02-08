'use strict';
(function (angular) {

  var app = angular.module('yeomanAngularSampleApp');

  app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

})(window.angular);
