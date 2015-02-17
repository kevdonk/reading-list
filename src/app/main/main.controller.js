'use strict';

angular.module('readingList')
  .controller('MainCtrl', function ($scope) {
    $scope.bookmarks = [
      {
        'name': 'Cmder',
        'url': 'http://bliker.github.io/cmder',
        'desc': 'Windows Console Emulator',
        'category': 'Tools'
      },
      {
        'name': 'Yeoman',
        'url': 'http://yeoman.io',
        'desc': 'WebApp Scaffolding Tool',
        'category': 'Tools'
      }
    ];
  });
