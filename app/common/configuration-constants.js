'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    /**
     * Defines application-wide key value pairs.
     */
    app.constant('configuration', {
        ITEMS_URL: 'menu/items.json'
    });

})(window.angular);
