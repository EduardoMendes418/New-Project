﻿

dashboard.controller("meusDados2Ctrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
     $scope.editar = [];
     var usuario = JSON.parse(localStorage.getItem('user')) || "";

     if(usuario.tipoUsuario < 3){

          $state.go('app.meus-dados');

     }

// var url = 'http://192.168.0.69:8025';
var url = 'https://www.iptufacil.com.br';

// Dados Usuario
$scope.meusDados = function(){

  $http({
          method: 'POST',
          url: url +'/ws/goey/rest/public/meusDados',
          data: $.param({            
                          auth:"3f018bfb43591ccb2ef46f10de832160",
                          codUsuario: usuario.codUsuario,
                          tipoUsuario: usuario.tipoUsuario
                        }),

                          headers: {'Content-Type': 'application/x-www-form-urlencoded'}

          }).success(function (response) {
          
                  $scope.editar = response;                   
                    
          })
}

/// Dados Usuário
$scope.meusDados();
// Consulta cep:
$scope.consultaCep = function(cep){

    $http({
		        method: 'POST',
		        url: url + '/ws/goey/rest/public/viaCep',
		        data: $.param({
					                  cep: cep ,                                
                            auth: '3f018bfb43591ccb2ef46f10de832160'
       						       }),

	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).success(function (response) {
		      
                if(response.retorno == 1){
                    
                  $scope.editar.bairro = response.bairro;
                  $scope.editar.logradouro = response.logradouro;
                  $scope.editar.cidade = response.cidade;
                  $scope.editar.uf = response.uf;
                    
                }else{                        
                    
                 Flash.create('info', 'Desculpe, cep não encontrado.', 'large-text');
                   
                }
                
		    }).error(function (response) {

		        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
               
		    }); 
}

// Alterar Senha usuarios
 $scope.alterarSenha = function () {

    if($scope.novaSenha == '' || $scope.novaSenha  == undefined){

        Flash.create('danger', 'Digite uma nova senha válida!', 'large-text')
        return false;

    }else{ 

    $("#btn-alterar-senha").hide();
	  $("#img-loader-2").show();       

        $http({
                method: 'POST',
                url: url+'/ws/goey/rest/public/alterarSenhaUsuario',

                data: $.param({
                                email: $scope.editar.email ,
                                novaSenha: $scope.novaSenha,                                   
                                auth:  '3f018bfb43591ccb2ef46f10de832160'
                             }),

                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (response) {
                	
                		$("#img-loader-2").hide();
                   		$("#btn-alterar-senha").show();   
                   		$scope.novaSenha = '';                      
                   		Flash.create('info', response.mensagem, 'large-text');          
                    
                }).error(function (response) {

                	$("#img-loader-2").hide();
                	$("#btn-alterar-senha").show();
                    Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
                    
                });
          }
        }

}]);