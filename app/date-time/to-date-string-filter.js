'use strict';
(function (angular) {

  var app = angular.module('yeomanAngularSample');

  /**
   * @description
   *        converts a unix epoch timestamp to an ISO 8601 date time string.
   *
   *    @param {number} timeStamp The date time in ms since midnight 1970.
   *    @return {Date} The formatted ISO string.
   */
  app.filter('toDateString', function () {
    return function (timeStamp) {
      var date;
      date = new Date(parseInt(timeStamp));
      return date.toISOString();
    }
  });

})(window.angular);


