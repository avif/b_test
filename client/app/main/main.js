'use strict';

angular.module('bTestApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('products', {
      url: '/products/:page',
      templateUrl: 'app/main/products/products.html',
      controller: 'ProductsCtrl',
      resolve: {
        currentPage: function ($stateParams) {
          var page = 1;
          var paramPage = parseInt($stateParams.page);
          if ($stateParams.page && paramPage)
          {
            page = paramPage;
          }
          return page;
        },
        result: function ($http, currentPage) {
          return $http({
            method: 'GET',
            url: '/api/products/'+currentPage.toString()
          });
        }
      }
    })
    .state('product', {
      url: '/product/:id',
      templateUrl: 'app/main/product/product.html',
      controller: 'ProductCtrl',
      resolve: {
        result: function ($http, $stateParams) {
          return $http({
            method: 'GET',
            url: '/api/products/single/'+$stateParams.id
          });
        }
      }
    });
});
