'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSampleApp', []);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

})(window.angular);