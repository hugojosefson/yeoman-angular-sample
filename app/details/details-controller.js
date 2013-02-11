'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    app.controller('details', ['menu', '$scope', '$routeParams', function (menu, $scope, $routeParams) {
        var id = $routeParams.id;
        $scope.item = menu.get(id);
    }]);

})(window.angular);