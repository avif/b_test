'use strict';

angular.module('bTestApp')
.controller('ProductCtrl', function ($scope, result) {
  $scope.product = result.data;

  $scope.saleType = function (currentProduct) {
    if (currentProduct.sale)
      return 'מבצע';
    else
      return 'רגיל';
  };

  $scope.getIngrediantsString = function (igrediants) {
    var igrediantsString = '';
    angular.forEach(igrediants, function (igrediant, index) {
      igrediantsString += igrediant;
      if (index !== igrediants.length-1)
        igrediantsString += ', ';
    });

    return igrediantsString;
  };
});
