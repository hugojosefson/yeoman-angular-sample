'use strict';
(function (angular) {

  var app = angular.module('yeomanAngularSampleApp', []);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})(window.angular);
