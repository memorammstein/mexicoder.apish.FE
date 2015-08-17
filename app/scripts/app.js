'use strict';

/**
 * @ngdoc overview
 * @name mexicoderapishfeApp
 * @description
 * # mexicoderapishfeApp
 *
 * Main module of the application.
 */
angular
  .module('mexicoderapishfeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant(
    'BackEndBasePath', 'https://mexicoder-apish-backend.herokuapp.com/api/'
  )
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
