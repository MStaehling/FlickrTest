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

  })
  .directive('ngEnter', function($location) {
    return function(scope, element, attrs) {
      element.bind('keydown keypress', function(event) {
        if (event.which === 13) {
          scope.$apply(function() {
            scope.$eval(attrs.ngEnter);
            console.log('hi');
          });

          event.preventDefault();
        }
      });
    };
  });
