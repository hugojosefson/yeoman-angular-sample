'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample', []);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

})(window.angular);