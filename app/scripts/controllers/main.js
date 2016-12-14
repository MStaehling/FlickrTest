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
      v.photos = [];
      $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f14826d323490270cacd02d9dc7d5a73&text=' + searchText + '&safe_search=1&per_page=25&format=json&nojsoncallback=1')
        .then(function(res) {
          if (res.status === 200) {
            v.photos = res.data.photos.photo;
            console.log(res.data.photos.photo);

// do another request with new info that fetches photo for each set of data
// for loop? using id and/or OWNER # to go with searchText


            deferred.resolve();
          } else {
            deferred.reject();
          }
          return deferred.promise;
        });
      console.log('searching');
    };
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
