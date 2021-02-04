

dashboard.controller("borderoCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
    $scope.usuario = [];
   	$scope.usuario = JSON.parse(localStorage.getItem('user'));
   	$scope.x_valorVenda = 0;
   	$scope.x_troco = 0;
   	$scope.x_total = 0;
   	$scope.x_txAdm = 0;
   	$scope.x_valorRepasse = 0
var url = 'https://www.iptufacil.com.br';
// var url = 'http://192.168.0.69:8025';
//$scope.filtro.auth = "3f018bfb43591ccb2ef46f10de832160"; 
$scope.comboData = function(){

$http({
        method: 'POST',
        url: url + '/ws/goey/rest/public/comboMesAno',
        data: $.param({auth:'3f018bfb43591ccb2ef46f10de832160'}),

	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).success(function (response) {
		    		    	
		    	  $scope.listaData = response;
                
		    })

}

$scope.comboData();

$scope.consultarBordero = function(){
	$scope.lista = null;

if($scope.filtro == undefined){
	alert('Preencha os campos de data');
	return false;
}
// if($scope.filtro.repasseDe == undefined || $scope.filtro.repasseAte == undefined){
// 	alert('Selecione um periodo de repasse');
// 	return false;
// }

// if($scope.filtro.vendaDe == undefined || $scope.filtro.vendaAte == undefined){
// 	alert('Selecione um periodo de venda');
// 	return false;
// }

$scope.filtro.auth = "3f018bfb43591ccb2ef46f10de832160";
$scope.filtro.codUsuario  = $scope.usuario.codUsuario;
$scope.filtro.tipoUsuario = $scope.usuario.tipoUsuario;
$('#msn').html(''); 
$scope.showTable = false;
// if($scope.filtro.de < 10){
// 	$scope.filtro.de = '0'+ $scope.filtro.de ;
// }

// if($scope.filtro.ate < 10){
// 	$scope.filtro.ate = '0'+ $scope.filtro.ate;
// }

// $scope.filtro.dataInicio = $scope.filtro.de + '/' +$scope.filtro.mesAno;
// $scope.filtro.dataFim = $scope.filtro.ate + '/' +$scope.filtro.mesAno;

	$http({
		        method: 'POST',
		        url: url + '/ws/goey/rest/public/consultarBorderoGoey',
		        data: $.param(
					            $scope.filtro
       						  ),

	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).success(function (response) {
		    	
		    	 if(response[0].retorno == 1){
					$scope.total = 0;
					$scope.troco = 0;
					$scope.txAdm = 0;
					$scope.valorRepasse = 0;
					$scope.valorVenda	 = 0;
		    	 	$scope.filtro = undefined;
		    	 	$scope.lista = response;
		    	 	$scope.analitico = false;
		    	 	var f = response.filter(function(soma){
		    	 		
						$scope.total = parseFloat($scope.total) + parseFloat(soma.total);
						$scope.troco = parseFloat($scope.troco) + parseFloat(soma.troco);
						if($scope.valorRepasse < 0){
							$scope.txAdm = parseFloat($scope.txAdm) + parseFloat(soma.valorRepasse);		
						}else{
							$scope.txAdm = parseFloat($scope.txAdm) + parseFloat(soma.txAdm);	
						}
						$scope.showTable = true;
						$scope.valorRepasse = parseFloat($scope.valorRepasse) + parseFloat(soma.valorRepasse);
						$scope.valorVenda = parseFloat($scope.valorVenda) + parseFloat(soma.valorVenda);

		    	 	});
		    	 	$scope.totalItens = response.length;

		    	 		
		    	 }else{

		    	 	$('#msn').html(response[0].mensagem);

		    	 }		    	  
                
		    }).error(function (response) {

		    	//$("#img-loader").hide();
		    	//$("#btnAtualizarDados").show();
		        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
               
		    }); 
       // $scope.filtro.de = null;
       // $scope.filtro.ate = null;     
}  

// Detalhe do pedido entre data
$scope.detalharBordero = function(tipoUsuario,codUsuario,dataRepasse,dataVenda){
$scope.x_valorVenda = 0;
$scope.x_txAdm = 0;
$scope.x_total = 0;
$scope.x_valorRepasse = 0;
$scope.x_troco = 0;

$http({
		method: 'POST',
		url: url + '/ws/goey/rest/public/detalheBordero',
		data: $.param({
						auth: "3f018bfb43591ccb2ef46f10de832160",
	                    tipoUsuario: tipoUsuario,
	                    codUsuario: codUsuario,
	                    dataVenda: dataVenda,
	                    dataRepasse:dataRepasse
	       			 }),

		        		headers: {'Content-Type': 'application/x-www-form-urlencoded'}

			    	}).success(function (response) {
                  
                  $scope.listaDetalhe = response;
				  $scope.totalRegistro = response.length;	
				  var f = response.filter(function(sum){
				  	
				  	if(sum.confirmadoInt == 1){
		  			  	$scope.x_valorVenda 	= parseFloat($scope.x_valorVenda) + parseFloat(sum.valorVenda);
						$scope.x_txAdm 			= parseFloat($scope.x_txAdm) +  parseFloat(sum.txAdm);
						$scope.x_total 			= parseFloat($scope.x_total) +  parseFloat(sum.total);
						$scope.x_valorRepasse 	= parseFloat($scope.x_valorRepasse) +  parseFloat(sum.valorRepasse);
						$scope.x_troco 			= parseFloat($scope.x_troco) +  parseFloat(sum.troco);				
					}	
				  });
				  

                  $("#detalheBordero").click();

})

}

// Consulta pedido analítico
$scope.consultarAnalitico = function(){
$scope.lista = null;
if($scope.filtro == undefined){
	alert('Preencha os campos de data');
	return false;
}

$scope.filtro.auth = "3f018bfb43591ccb2ef46f10de832160";
$scope.filtro.codUsuario  = $scope.usuario.codUsuario;
$scope.filtro.tipoUsuario = $scope.usuario.tipoUsuario;
$('#msn').html(''); 
$scope.showTable = false;

	$http({
	        method: 'POST',
	        url: url + '/ws/goey/rest/public/listaBorderoAnalitico',
	        data: $.param(
				            $scope.filtro
   						  ),

	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).success(function (response) {
		    	
		    	 if(response[0].retorno == 1){
					$scope.total = 0;
					$scope.troco = 0;
					$scope.txAdm = 0;
					$scope.valorRepasse = 0;
					$scope.valorVenda	 = 0;
		    	 	$scope.filtro = undefined;
		    	 	$scope.lista = response;

		    	 	$scope.analitico = true;
		    	 	var f = response.filter(function(soma){
		    	 		
						$scope.total = parseFloat($scope.total) + parseFloat(soma.total);
						$scope.troco = parseFloat($scope.troco) + parseFloat(soma.troco);
						if($scope.valorRepasse < 0){
							$scope.txAdm = parseFloat($scope.txAdm) + parseFloat(soma.valorRepasse);		
						}else{
							$scope.txAdm = parseFloat($scope.txAdm) + parseFloat(soma.txAdm);	
						}
						$scope.showTable = true;
						$scope.valorRepasse = parseFloat($scope.valorRepasse) + parseFloat(soma.valorRepasse);
						$scope.valorVenda = parseFloat($scope.valorVenda) + parseFloat(soma.valorVenda);

		    	 	});
		    	 	$scope.totalItens = response.length;
		    	 		
		    	 }else{

		    	 	$('#msn').html(response[0].mensagem);

		    	 }		    	  
                
		    }).error(function (response) {
		    	
		        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
               
		    }); 
          
}  

$( ".datepicker" ).datepicker({
                locale: 'pt-br'
            });

}]);