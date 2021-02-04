

dashboard.controller("listaClientesCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
    $scope.filtro = [];
    $scope.lista = [];
   	var usuario = JSON.parse(localStorage.getItem('user'));
   	//$("#tipoUsuario").val(usuario.tipoUsuario);
   //	$("#codUsuario").val(usuario.codUsuario);

var url = 'https://www.iptufacil.com.br';
//var url = 'http://192.168.0.69:8025';

// Lista de Clientes
$scope.listaClientes = function(){

$("#msn").html(''); 
   	$http({
	        method: 'POST',
	        url: url +'/ws/goey/rest/public/listaClientesRestaurante',
	        data: $.param({
	        				auth:"3f018bfb43591ccb2ef46f10de832160",
	        				codUsuario: usuario.codUsuario,
	        				tipoUsuario: usuario.tipoUsuario,
	        				origem: $scope.filtro.origem,
	        				dataIni :$scope.filtro.dataInicio,
	        				dataFim: $scope.filtro.dataFim 
	        			}),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    }).success(function (response) {
			    
                    if(response[0].retorno == 1){
                        
                        $("#msn").html(''); 
                       $scope.lista = response; 
                       $("#listaClientes").show();                     
                        
                    }else{
                     
                     $("#msn").html(response[0].mensagem);   
                    // Flash.create('info', 'Nenhuma entrega nesse período.', 'large-text');
                       
                    }
                  
			    })
}

//$scope.listaClientes(); 

$scope.detalhePedidos = function(x){
	 // origem 1 restaurante,
	 // origem 2 web
	 var telefone = '';
	 var solicitante = '';

	 if(x.origem == 1){ // 
	 	
	 	 solicitante = x.solicitante
	 }else{
	 	  telefone = x.telefone
	 }


$http({
	        method: 'POST',
	        url: url +'/ws/goey/rest/public/detalheComprasCliente',
	        data: $.param({
	        				auth:"3f018bfb43591ccb2ef46f10de832160",
	        				codEstabelecimento: x.codEstabelecimento ,
	        				tipoUsuario: x.tipoUsuario,
	        				solicitante:solicitante,
	        				telefone:telefone
	        			}),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    }).success(function (response) {
			    $scope.detalheCompra = response;

			     $("#detalheModal").modal('show');
                    /*if(response[0].retorno == 1){
                        
                        $("#msn").html(''); 
                       $scope.lista = response; 
                       $("#listaClientes").show();                     
                        
                    }else{
                     
                     $("#msn").html(response[0].mensagem);   
                    // Flash.create('info', 'Nenhuma entrega nesse período.', 'large-text');
                       
                    }
                    */
                  
			    })

}

$( ".datepicker" ).datepicker({
                locale: 'pt-br'
            });
}]);