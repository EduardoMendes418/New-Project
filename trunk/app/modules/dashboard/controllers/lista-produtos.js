﻿

dashboard.controller("listaProdutosCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
    $scope.lista = [];
   	var usuario = JSON.parse(localStorage.getItem('user'));
   	//$("#tipoUsuario").val(usuario.tipoUsuario);
   //	$("#codUsuario").val(usuario.codUsuario);

var url = 'http://localhost:4200';
//var url = 'http://192.168.0.67:8025';
// Lista dos Produtos
$scope.listaProdutos = function(){

$("#msn").html(''); 
   	$http({
	        method: 'POST',
	        url: url +'/ws/goey/rest/public/listarProdutos',
	        data: $.param({
	        				auth:"3f018bfb43591ccb2ef46f10de832160",
	        				codUsuario: usuario.codUsuario,
	        				tipoUsuario: usuario.tipoUsuario
	        			}),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    }).success(function (response) {
			    
                    if(response[0].retorno == 1){
                        
                        $("#msn").html(''); 
                       $scope.listaProdutos = response; 
                       $("#listaProdutos").show();                     
                        
                    }else{
                     
                     $("#msn").html(response[0].mensagem);   
                    // Flash.create('info', 'Nenhuma entrega nesse período.', 'large-text');
                       
                    }
                    $scope.checkAll = true;
                    let retorno = response.filter(function(validar){

                    	if(validar.ativo == false){
                    		$scope.checkAll = false;
                    	}


                    });
                    
			    }).error(function (response) {

                    $("#msn").html(response[0].mensagem); 
			       // Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
                    
			    });
}

$scope.listaProdutos(); 

// Atualizar Produtos
$scope.atualizarProduto = function(id){

	 //console.log(id);
 localStorage.setItem('produto', JSON.stringify(id));
 
$state.go('app.atualizar-produtos');
	
} 

$scope.deletarProduto = function(id){

var confirma = confirm("Deseja realmente excluir esse produto?");

	if(confirma){

		$http({
			        method: 'POST',
			        url: url +'/ws/goey/rest/public/deletarProdutos',
			        data: $.param({
			        				auth:"3f018bfb43591ccb2ef46f10de832160",
			        				codUsuario: usuario.codUsuario,
			        				tipoUsuario: usuario.tipoUsuario,
			        				codProduto: id
			        			}),

				        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					    }).success(function (response) {
					    
		                    if(response.retorno == 1){
		                        $("#"+id).remove();
		                        Flash.create('success', response.mensagem, 'large-text');                    
		                        
		                    }else{

		                    	Flash.create('info', response.mensagem, 'large-text');
		                    }
		                    
					    }).error(function (response) {
		                    
					       Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
		                    
					    });

	}
		

}

$scope.inativaProduto = function(produto){
	
	console.log(produto);	

	$http({
	        method: 'POST',
	        url: url +'/ws/goey/rest/public/inativaAtivaProduto',
	        data: $.param({
	        				auth:"3f018bfb43591ccb2ef46f10de832160",
	        				codProduto: produto.cod,
	        				ativo:produto.ativo
	        			}),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    }).success(function (response) {
			    	alert(response.mensagem)
			    });



}
$scope.disableAll = function(){
	
	

	$http({
		method: 'POST',
		url: url + '/ws/goey/rest/public/disableAllProducts',
		data: $.param({
			auth:"3f018bfb43591ccb2ef46f10de832160",
			restaurante : usuario.codUsuario,
			ativo:$scope.checkAll
		}),

		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	}).success(function (response) {
		if($scope.checkAll){
			alert('Todos os pratos estão indisponíveis');
		}else{
			alert('Todos os pratos estão disponíveis');
		}
		
		if(response.erro == 0 ){
			$http({
				method: 'POST',
				url: url +'/ws/goey/rest/public/listarProdutos',
				data: $.param({
					auth:"3f018bfb43591ccb2ef46f10de832160",
					codUsuario: usuario.codUsuario,
					tipoUsuario: usuario.tipoUsuario
				}),

				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function (response) {

				if(response[0].retorno == 1){

					$("#msn").html(''); 
					$scope.listaProdutos = response; 
					$("#listaProdutos").show();                     

				}else{

					$("#msn").html(response[0].mensagem);   
                    // Flash.create('info', 'Nenhuma entrega nesse período.', 'large-text');

                }

            }).error(function (response) {

            	$("#msn").html(response[0].mensagem); 
			       // Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');

			   });
        }		    	
    });


}


$scope.adicionais = {};
$scope.catInicial = false;
$scope.addComplemento = function(complemento){

	if ($scope.formAddComplemento.$invalid) {
		angular.forEach($scope.formAddComplemento.$error, function (field) {
			angular.forEach(field, function(errorField){
				errorField.$setTouched();
			})
		});

		alert('Por favor, preencha os campos em vermelho!');
		return false;
	} 
	var verifiy = angular.equals({}, $scope.adicionais);
	// $scope.catInicial = complemento.categoria.descricao;

	if(verifiy){
		$scope.adicionais = [{
			categoria: complemento.categoria,
			codCardapio: complemento.codCardapio,
			nome: complemento.nome,
			obrigatorio: complemento.obrigatorio,
			preco: complemento.preco,
			qtdMax: complemento.qtdMax,
			qtdMin: complemento.qtdMin,
			codProduto: $scope.codProdutoComp
		}];
	}else{
		$scope.adicionais.push({
			categoria: complemento.categoria,
			codCardapio: complemento.codCardapio,
			nome: complemento.nome,
			obrigatorio: complemento.obrigatorio,
			preco: complemento.preco,
			qtdMax: complemento.qtdMax,
			qtdMin: complemento.qtdMin,
			codProduto: $scope.codProdutoComp
		});
	}
	$scope.complemento.codCardapio = "";
	$scope.complemento.nome = "";
	$scope.complemento.preco = "";
	$scope.verificaCategoria();
	$scope.formAddComplemento.$setUntouched();
}

$scope.delete = function(index){
	
	var del = $scope.adicionais.indexOf(index);
	$scope.adicionais.splice(del,1);     
	$scope.verificaCategoria();
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

$scope.openModal = function(codigo){

	if($scope.complementoProduto != codigo.cod){
		
		$scope.complemento.qtdMin = "";
		$scope.complemento.qtdMax = "";
		$scope.complemento.obrigatorio = "";
		$scope.adicionais = {};
		$scope.complemento.categoria = "";

	}
	$scope.complementoProduto = codigo.cod;
	$scope.codProdutoComp  = codigo.cod;
	$('#myModal').modal({backdrop: 'static', keyboard: false})  

}
$scope.closeModal = function(){
	$scope.complemento = {};
	$scope.catInicial = false;
	$('#myModal').modal('hide');
}

$scope.verificaCategoria = function(){
	// complemento.categoria
	$scope.catInicial = false;
	$scope.complemento.qtdMin = "";
	$scope.complemento.qtdMax = "";
	$scope.complemento.obrigatorio = "";
	var verifiy = angular.equals({}, $scope.adicionais);
	
	if(!verifiy){
		
		var tmp = $scope.adicionais.filter(function(v){

			if(v.categoria.descricao == $scope.complemento.categoria.descricao){
		
				$scope.catInicial = true;
				$scope.complemento.qtdMin = v.qtdMin;
				$scope.complemento.qtdMax = v.qtdMax;
				$scope.complemento.obrigatorio = v.obrigatorio;
		
			}

		});
	}
}

$scope.cadastrarComplemento = function(){

	var data = {
			dados:$scope.adicionais,
			auth:"3f018bfb43591ccb2ef46f10de832160"
		};

	$http.post(url+'/ws/goey/rest/public/cadastraAdicionalProduto', data).then(function(response){
		alert(response.data.mensagem);
	});



}

$scope.modalDelete = function(cod){
	// Mostrar os dados antes de detelar
	$scope.deleteProduto = cod;
	$scope.deleteAdicional = {};
	// Carregar os produtos adicionais ligados a este produto
	var data = {
		auth:"3f018bfb43591ccb2ef46f10de832160",
		codigo:cod.cod
	};

	$http.post(url+'/ws/goey/rest/public/carregaAdicional',data).then(function(response){
				
				$scope.deleteAdicional = response.data;
				if(response.data.erro == 1){
					alert(response.data.mensagem);
				}else{
					$('#deleteComplemento').modal({backdrop: 'static', keyboard: false});
				}
				
	});

	


}

$scope.apagarAdicional = function(codigo){

	var data = {
		codigo:codigo.id,
		auth:"3f018bfb43591ccb2ef46f10de832160"
	};


	alertify.confirm("Goeyjá ","Deseja realmente apagar? "+codigo.nome, function(){
		// alertify.success('Deletado com sucesso'); 

		$http.post(url+'/ws/goey/rest/public/apagaAdicionalProduto',data).then(function(response){

			$scope.modalDelete(codigo);

		});


	},function(){});

	




}


$scope.carregaCategoria();

ordenarProduto = function(valor){
	alert(valor);
}

}]);

// 33912938