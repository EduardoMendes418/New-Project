﻿

dashboard.controller("cadastroProdutosCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
    $scope.editar = [];
   	var usuario = JSON.parse(localStorage.getItem('user'));

   	$("#tipoUsuario").val(usuario.tipoUsuario);
   	$("#codUsuario").val(usuario.codUsuario);
	var url = 'https://www.iptufacil.com.br';
    //var url = 'http://192.168.0.67:8025';
    
	$scope.atualizarDados = function(){
	$("#btnAtualizarDados").hide();
	$("#img-loader").show();

	$scope.editar.auth = "3f018bfb43591ccb2ef46f10de832160"; 

		$http({
			        method: 'POST',
			        url: url + '/ws/goey/rest/public/alterarEmpresa',
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

$scope.carregaCategoria = function(){
	let dados = {
			codRestaurante:usuario.codUsuario,
			auth:"3f018bfb43591ccb2ef46f10de832160"
		};

	$http.post(url+'/ws/goey/rest/public/carregaCategoriaEC',dados).then(function(data) {
        $scope.comboCategoria = data.data;         
        // console.log($scope.comboCategoria);
    });

}
 
$scope.newCategory = function(category){

	let dados = {
			category:category,
			auth:"3f018bfb43591ccb2ef46f10de832160",
			codRestaurante:usuario.codUsuario
		};

	$http.post(url+'/ws/goey/rest/public/newCategoryEC',dados).then(function(data) {
       	alert(data.data.message);
       	$scope.carregaCategoria();
       	$scope.category = "";
    });

}

$scope.carregaCategoria();
$scope.cadastrarProdutos = function(){

} 

}]);