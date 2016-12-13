'use strict';

/**
 * @ngdoc function
 * @name flickrTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrTestApp
 */
angular.module('flickrTestApp')
  .controller('MainCtrl', function () {
    this.search = function () {
      console.log("searching");
    };
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
