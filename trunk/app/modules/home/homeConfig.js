var home = angular.module('home', ['ui.router', 'ngResource', 'ngAnimate','angular.filter']);

home.config(["$stateProvider", function ($stateProvider) {

//Formulário de cadastro de empresas
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'app/modules/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

}]);
