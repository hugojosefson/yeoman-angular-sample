'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    /**
     * Defines a menu item.
     */
    app.directive('menuItem', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'menu/menu-item-template.html',
            scope: {
                id: '=id',
                name: '=name'
            },
            //TODO: define directive controller.
            link: function (scope, element, attrs) {
            }
        }
    });

})(window.angular);

