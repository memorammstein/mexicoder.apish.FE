'use strict';

/**
 * @ngdoc function
 * @name mexicoderapishfeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mexicoderapishfeApp
 */
angular.module('mexicoderapishfeApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, $location, BackEndBasePath) {

    $scope.search = {};
    $scope.search.query = $routeParams.query ? $routeParams.query : '';
    $scope.search.params = {twitter:true, wikipedia: true};

    $scope.execute_search = function (searchObj) {
      $scope.tweets = [];
      $scope.wikis = [];
      if (searchObj.params.twitter) {
        $scope.twitterPromise = $http.get(BackEndBasePath+'search/twitter'+'?'+'q='+ encodeURIComponent(searchObj.query)).
          then(function (data) {
            $scope.tweets = data.data;
          }, function (error) {
            console.log(error);
          });
      }
      if (searchObj.params.wikipedia) {
        $scope.wikipediaPromise = $http.get(BackEndBasePath+'search/wikipedia'+'?'+'q='+ encodeURIComponent(searchObj.query)).
          then(function (data) {
            $scope.wikis = data.data;
          }, function (error) {
            console.log(error);
          });
      }
      $location.search('query', encodeURIComponent(searchObj.query));
    }

  });
