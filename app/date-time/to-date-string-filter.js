'use strict';
(function (angular) {

    var app = angular.module('yeomanAngularSample');

    /**
     * @description
     *        converts a unix epoch timestamp to a human readable date time.
     *
     *    @param {number} timeStamp The date time in ms since midnight 1970.
     *    @return {Date} The formatted date.
     */
    app.filter('toDateString', function () {
        return function (timeStamp) {
            var date;
            date = new Date(parseInt(timeStamp));
            return date.toLocaleDateString("en");
        }
    });

})(window.angular);


