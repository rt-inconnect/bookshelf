'use strict';

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Library', ['$resource',
  function($resource) {
    return $resource('/api/library/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

appServices.factory('Book', ['$resource',
  function($resource) {
    return $resource('/api/book/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);