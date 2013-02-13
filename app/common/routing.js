'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    /**
     * Defines routing.
     */
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/about', {templateUrl: '/about/about-partial.html'}).
            when('/things', {templateUrl: '/things/things-partial.html'}).
            when('/item/:id', {templateUrl: '/details/details-partial.html'}).
            otherwise({templateUrl: '/error/error-partial.html'});
    }]);

})(window.angular);
