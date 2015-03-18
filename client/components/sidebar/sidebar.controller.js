'use strict';

angular.module('bTestApp')
.controller('SidebarCtrl', function ($scope) {
  $scope.catalog = [
    {
      name: 'כלבים',
      link: 'dogs'
    },
    {
      name: 'חתולים',
      link: 'cats'
    },
    {
      name: 'מכרסמים',
      link: 'rodants'
    },
    {
      name: 'אחר',
      link: 'other'
    }
  ];

  $scope.info = [
    {
      name: 'מבצעים ומוצרים מיוחדים',
      link: 'special_sale'
    },
    {
      name: 'איך נבחר מזון?',
      link: 'food_help'
    },
    {
      name: 'שאלות ותשובות',
      link: 'faq'
    },
    {
      name: 'מאמרים',
      link: 'articles'
    },
    {
      name: 'וטרינרים תורנים',
      link: 'vets'
    },
    {
      name: 'קישורים',
      link: 'links'
    },
    {
      name: 'לוח מודעות',
      link: 'messages'
    },
    {
      name: 'פינת האימוץ שלנו',
      link: 'adopt'
    },
  ];
});
