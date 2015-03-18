'use strict';

angular.module('bTestApp')
.controller('ProductsCtrl', function ($scope, $http, currentPage, result) {
  $scope.currentPage = currentPage;
  $scope.pages = result.data.pages;
  $scope.products = result.data.products;

  $scope.getPagesArr = function(count) {
    return new Array(count);
  };
});
