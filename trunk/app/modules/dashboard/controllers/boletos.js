

dashboard.controller("boletosCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash', '$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;

    var usuario = JSON.parse(localStorage.getItem('user'));
    $scope.tipoUsuario = usuario.tipoUsuario;
    $scope.codUsuario = usuario.codUsuario;
    $scope.auth = '3f018bfb43591ccb2ef46f10de832160';
 var ws = 'https://www.iptufacil.com.br';
 //var ws = 'http://192.168.0.69:8025';


$scope.listarBoletosAfaturar = function(){

$("#msnAfaturar").html('');

$http({
		method: 'POST',
		url: ws+'/ws/goey/rest/public/listarBoletosAfaturar',
        data: $.param({			            
			            codUsuario: $scope.codUsuario,			                                 
			            auth:  $scope.auth
					  }),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    }).success(function (response) {
			     
                    if(response[0].retorno == 1){
                      
                       $scope.aFaturar = response;                      
                        
                    }else{

                    	$("#msnAfaturar").html(response[0].mensagem);
                    	
                    }
                    
			    }).error(function (response) {

			        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
                    
			    });

 }
$scope.listarBoletosAfaturar();

  //Lista boletos Faturados
$scope.mostrarFiltro = function(){
	
	$("#formFiltro").show();
}


 $scope.listarBoletosFaturado = function(){ 

$("#msnFaturar").html('');

$http({
			        method: 'POST',
			        url: ws +'/ws/goey/rest/public/listarBoletosGoey',
			        data: $.param({
						            
						            codUsuario: $scope.codUsuario,						          
                                    dataIni: $scope.filtro.dataIni,
                                    dataFim :  $scope.filtro.dataFim,
						            auth:  $scope.auth
	       						  }),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

			    }).success(function (response) {
			     
                    if(response[0].retorno == 1){
                      
                        $scope.faturado = response;                      
                       
                    }else{

                    	$("#msnFaturar").html(response[0].mensagem);
                    	
                    }
                    
			    }).error(function (response) {
			    	
			        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
                    
			    });

   }


 $scope.detalhar = function(numBoleto){
//detalheBoletoGoey

$http({
	        method: 'POST',
	        url: ws +'/ws/goey/rest/public/detalheBoletoGoey',
	        data: $.param({
				            
				            boleto: numBoleto,                                   
				            auth:  $scope.auth
   						  }),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    }).success(function (response) {
			     
                    if(response[0].retorno == 1){
                       
                       $scope.modal = response;                      
                       $scope.modalBoleto = numBoleto;
                       $scope.modal.totalValor = response.pop().totalValor;					                         

                    }
                    
			    }).error(function (response) {
			    	
			        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
                    
			    });

	
 } 


$( ".datepicker" ).datepicker({
                locale: 'pt-br'
 });

}]);

