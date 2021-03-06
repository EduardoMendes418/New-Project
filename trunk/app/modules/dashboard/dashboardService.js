﻿


dashboard.service('dashboardService', ['$http', '$q', 'Flash', 'apiService','$state', function ($http, $q, Flash, apiService,$state) {

    var dashboardService = {};
    var usuario = JSON.parse(localStorage.getItem('user'))|| '';

   
    
        
       if( ($state.current.name != "listaProdutos") && ($state.current.name != "listaEstabelecimentos") && ($state.current.name != "compras") && ($state.current.name != "formRestaurante") 
        && ($state.current.name != "empresa") && ($state.current.name != "cadastro") && ($state.current.name != "restaurante")){
            
            if(usuario.tipoUsuario != '' && usuario.tipoUsuario == 1){
                localStorage.clear();
                window.location.replace('http://192.168.1.215:4200/#home');
            }
       }
        //}
    
    //service to communicate with users model to verify login credentials
    var accessLogin = function (parameters) {
        var deferred = $q.defer();
        apiService.get("users", parameters).then(function (response) {
            if (response)
                deferred.resolve(response);
            else
                deferred.reject("Something went wrong while processing your request. Please Contact Administrator.");
        },
            function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //service to communicate with users to include a new user
    var registerUser = function (parameters) {
        var deferred = $q.defer();
        apiService.create("users", parameters).then(function (response) {
            if (response)
                deferred.resolve(response);
            else
                deferred.reject("Something went wrong while processing your request. Please Contact Administrator.");
        },
            function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };

    dashboardService.accessLogin = accessLogin;
    dashboardService.registerUser = registerUser;

    return dashboardService;

}]);
