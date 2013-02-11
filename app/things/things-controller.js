'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    app.controller('things', ['$scope', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Testacular'
        ];
    }]);

})(window.angular);
