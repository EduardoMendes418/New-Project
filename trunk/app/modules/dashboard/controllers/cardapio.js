﻿

dashboard.controller("cardapioCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
	
 var vm = this;
 var usuario = JSON.parse(localStorage.getItem('user')) || "";  

   if(usuario != ""){    

       // window.open('http://192.168.1.215:4200/#/lista-produtos/'+usuario.codUsuario+'/'+usuario.tipoUsuario, '_blank');
         window.open('https://www.goeyja.com.br/#/lista-produtos/'+usuario.codUsuario+'/'+usuario.tipoUsuario, '_blank');        
       
    }else{

        window.location.href="https://www.goeyja.com.br/#login";
        // window.location.href="http://192.168.0.69:8050/#login";
        
    }

}]);