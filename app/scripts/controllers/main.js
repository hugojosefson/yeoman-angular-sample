'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSampleApp');

    app.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Testacular'
        ];
    }]);

})(window.angular);
