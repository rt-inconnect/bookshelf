'use strict';

var app = angular.module('app', [
  'ui.router',
  'ngResource',
  'appControllers',
  'appServices',
  'appFilters',
  'appDirectives'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
  function ($stateProvider) {
   
    $stateProvider
      .state('library', {
        abstract: true,
        url: '/library',
        templateUrl: '/templates/library.html'
      })
      .state('library.list', {
        url: '/',
        templateUrl: '/templates/library/list.html',
        controller: 'LibraryListController'
      })
      .state('library.view', {
        url: '/:id/view',
        templateUrl: '/templates/library/view.html',
        controller: 'LibraryViewController'
      })
      .state('library.edit', {
        url: '/:id/edit',
        templateUrl: '/templates/library/edit.html',
        controller: 'LibraryEditController'
      })
      .state('library.create', {
        url: '/create',
        templateUrl: '/templates/library/create.html',
        controller: 'LibraryCreateController'
      })

      .state('book', {
        abstract: true,
        url: '/book',
        templateUrl: '/templates/book.html'
      })
      .state('book.list', {
        url: '/',
        templateUrl: '/templates/book/list.html',
        controller: 'BookListController'
      })
      .state('book.view', {
        url: '/:id/view',
        templateUrl: '/templates/book/view.html',
        controller: 'BookViewController'
      })
      .state('book.edit', {
        url: '/:id/edit',
        templateUrl: '/templates/book/edit.html',
        controller: 'BookEditController'
      })
      .state('book.create', {
        url: '/create',
        templateUrl: '/templates/book/create.html',
        controller: 'BookCreateController'
      })
  }
]);

app.run(['$state',
  function ($state) {
    $state.go('library.list');
  }
]);

app.constant('API', {
  library: '/api/library',
  book: '/api/book'
});