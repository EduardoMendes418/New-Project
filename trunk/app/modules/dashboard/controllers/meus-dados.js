﻿

dashboard.controller("meusDadosCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
    $scope.editar = [];
   	$scope.editar = JSON.parse(localStorage.getItem('user'));
     

    if($scope.editar.tipoUsuario > 2 ){

       $state.go('app.meus-dados2');

    }

$scope.atualizarDados = function(){
$("#btnAtualizarDados").hide();
$("#img-loader").show();

$scope.editar.auth = "3f018bfb43591ccb2ef46f10de832160"; 

	$http({
		        method: 'POST',
		        url: 'http://localhost:4200/ws/goey/rest/public/alterarEmpresa',
		        data: $.param(
					            $scope.editar
       						  ),

	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).success(function (response) {

		    	 $("#img-loader").hide();
                 $("#btnAtualizarDados").show();
                 Flash.create('info', response.mensagem, 'large-text');     
                
		    }).error(function (response) {

		    	$("#img-loader").hide();
		    	$("#btnAtualizarDados").show();
		        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
               
		    }); 
            
}   

// Consulta cep:
$scope.consultaCep = function(cep){
    $http({
		        method: 'POST',
		        url: 'http://localhost:4200/ws/goey/rest/public/viaCep',
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
                url: 'http://localhost:4200/ws/goey/rest/public/alterarSenhaUsuario',

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