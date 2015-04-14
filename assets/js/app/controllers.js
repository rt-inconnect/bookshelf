'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('AppController', [
  '$scope', '$state',
  function ($scope, $state) {
    $scope.$state = $state;
  }
]);

appControllers.controller('LibraryListController', [
  '$scope', 'Library',
  function ($scope, Library) {
    $scope.libraries = Library.query();

    $scope.deleteLibrary = function (library, index) {
      if (!confirm('Are you sure want to delete '+library.name+'?')) return false;
      library.$delete({id:library.id}, function() {
        $scope.libraries.splice(index, 1);
      });
    };
  }
]);
appControllers.controller('LibraryCreateController', [
  '$scope', '$state', 'Library',
  function ($scope, $state, Library) {
    $scope.library = new Library();

    $scope.createLibrary = function () {
      $scope.library.$save(function() {
        $state.go('library.list');
      });
    };
  }
]);
appControllers.controller('LibraryEditController', [
  '$scope', '$stateParams', '$state', 'Library',
  function ($scope, $stateParams, $state, Library) {
    $scope.library = Library.get({ id: $stateParams.id });

    $scope.editLibrary = function () {
      $scope.library.$update({id: $scope.library.id}, function() {
        $state.go('library.list');
      });
    };    
  }
]);
appControllers.controller('LibraryViewController', [
  '$scope', '$stateParams', 'Library',
  function ($scope, $stateParams, Library) {
    $scope.library = Library.get({ id: $stateParams.id });
  }
]);

appControllers.controller('BookListController', [
  '$scope', 'Book',
  function ($scope, Book) {
    $scope.books = Book.query();

    $scope.deleteBook = function (book, index) {
      if (!confirm('Are you sure want to delete '+book.name+'?')) return false;
      book.$delete({id:book.id}, function() {
        $scope.books.splice(index, 1);
      });
    };
  }
]);
appControllers.controller('BookCreateController', [
  '$scope', '$state', 'Book', 'Library',
  function ($scope, $state, Book, Library) {
    $scope.book = new Book();
    $scope.libraries = Library.query();

    $scope.createBook = function () {
      $scope.book.$save(function() {
        $state.go('book.list');
      }, function(err) {
        $scope.invalidAttributes = err.data.invalidAttributes;
      });
    };
  }
]);
appControllers.controller('BookEditController', [
  '$scope', '$stateParams', '$state', 'Book', 'Library',
  function ($scope, $stateParams, $state, Book, Library) {
    $scope.book = Book.get({ id: $stateParams.id });
    $scope.libraries = Library.query();

    $scope.editBook = function () {
      $scope.book.$update({id: $scope.book.id}, function() {
        $state.go('book.list');
      });
    };    
  }
]);
appControllers.controller('BookViewController', [
  '$scope', '$stateParams', 'Book',
  function ($scope, $stateParams, Book) {
    $scope.book = Book.get({ id: $stateParams.id });
  }
]);
