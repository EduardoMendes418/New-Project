


var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'flash','ui.utils.masks',
   'dashboard','googleAutocomplete','ngMap','angular.google.distance','ngJsonExportExcel','home',  ]);

  app.run(function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
    });

   });


app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $modalInstance) {

  $urlRouterProvider.otherwise('/#');

    //IdleScreenList
    $stateProvider
    .state('app', {
     url: '/app',
     templateUrl: 'app/common/app.html',
     controller: 'appCtrl',
     controllerAs: 'vm',
     data: {
       pageTitle: 'Home'
     }
     });

    $urlRouterProvider.otherwise('home');

    }]);


app.constant('appSettings', appConfig);

