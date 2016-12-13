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
      console.log('searching');
    };
    // https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=05138fb5dbd2cce1ba2b4e069a11efa8&text=tree&safe_search=1&per_page=25&format=rest
  })
  .directive('ngEnter', function() {
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
