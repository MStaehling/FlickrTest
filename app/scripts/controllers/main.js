'use strict';

/**
 * @ngdoc function
 * @name flickrTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrTestApp
 */
angular.module('flickrTestApp')
  .controller('MainCtrl', function($http, $q) {
    var deferred = $q.defer();
    var v = this;
    this.search = function(searchText) {
      $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f14826d323490270cacd02d9dc7d5a73&text=' + searchText + '&safe_search=1&per_page=25&format=json&nojsoncallback=1')
        .then(function(res) {
          if (res.status === 200) {
            v.photos = res.data;
            console.log(res.data);
            deferred.resolve();
          } else {
            deferred.reject();
          }
          return deferred.promise;
        });
      console.log('searching');
      //return deferred.promise;
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
