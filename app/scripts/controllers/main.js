'use strict';

/**
 * @ngdoc function
 * @name mexicoderapishfeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mexicoderapishfeApp
 */
angular.module('mexicoderapishfeApp')
  .controller('MainCtrl', function ($scope, $http, BackEndBasePath) {

    $http.get(BackEndBasePath+'search/twitter'+'?'+'q='+'javascript').
      then(function (data) {
        $scope.tweets = data.data;
      }, function (error) {
      });

      $http.get(BackEndBasePath+'search/wikipedia'+'?'+'q='+'javascript').
        then(function (data) {
          $scope.wikis = data.data;
        }, function (error) {
        });

  });
