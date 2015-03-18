'use strict';

angular.module('bTestApp')
.controller('NavbarCtrl', function ($scope, $location) {
  $scope.menu = [
    {
      name: 'עמוד הבית',
      link: 'home'
    },
    {
      name: 'קצת עלינו',
      link: 'about'
    },
    {
      name: 'מבצעים',
      link: 'sales'
    },
    {
      name: 'החשבון שלי',
      link: 'account'
    },
    {
      name: 'סל קניות',
      link: 'checkout'
    },
    {
      name: 'מדיניות משלוחים',
      link: 'policy'
    },
    {
      name: 'צור קשר',
      link: 'contact'
    },
    {
      name: 'ממליצים',
      link: 'references'
    }
  ];

  $scope.isCollapsed = true;

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
