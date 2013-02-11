'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    app.controller('menu', ['menu', '$scope', function (menu, $scope) {
        $scope.items = menu.get();
    }]);

})(window.angular);