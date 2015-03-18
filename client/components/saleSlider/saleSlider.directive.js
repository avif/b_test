'use strict';

angular.module('bTestApp')
.directive('saleSlider', function ($http, $interval) {
  return {
    restrict: 'E',
    templateUrl: 'components/saleSlider/saleSlider.html',
    link: function (scope, element, attrs) {
      scope.currentSale = 0;
      scope.prevSale;
      scope.sales = [];

      var startSlider = function (products) {
        angular.forEach(products, function (product) {
          if (product.sale)
            scope.sales.push(product);
        });

        $interval(function () {
          if (scope.currentSale+1 === scope.sales.length) {
            scope.prevSale = scope.currentSale++;
            scope.currentSale = 0;
          } else {
            scope.prevSale = scope.currentSale;
            scope.currentSale++;
          }
        }, 1500);
      };

      $http({
        method: 'GET',
        url: '/api/products/1'
      }).then(function(result){
        startSlider(result.data.products);
      });
    }
  };
});
