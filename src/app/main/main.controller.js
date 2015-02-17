'use strict';

angular.module('readingList')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get("../../assets/data/bookmarks.json").success(function(data) {
      $scope.bookmarks = data;
    });
  });
