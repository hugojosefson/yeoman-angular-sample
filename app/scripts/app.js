'use strict';
(function (angular) {

  var app = angular.module('yeomanAngularSampleApp', []);

  app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})(window.angular);
