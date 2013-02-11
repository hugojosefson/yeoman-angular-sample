'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    /**
     * Defines routing.
     */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'about/about-partial.html'}).
            when('/:id/', {templateUrl: 'details/details-partial.html'}).
            otherwise({templateUrl: 'error/error-partial.html'});
    }]);

})(window.angular);
