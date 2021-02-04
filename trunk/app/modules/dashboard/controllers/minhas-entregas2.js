dashboard.controller("minhasEntregas2Ctrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
	
    var vm = this;
    $scope.dados = [];
    var usuario = JSON.parse(localStorage.getItem('user'));
    $scope.tipoUsuario = usuario.tipoUsuario;
    $scope.codUsuario = usuario.codUsuario;
    $scope.auth = '3f018bfb43591ccb2ef46f10de832160';     
     var url = 'https://www.iptufacil.com.br';
     //var url = 'http://localhost:4200';

  
    $scope.listarEntregas = function(){
      $scope.tocaMensagem == 0;
	    	$http({
              method: 'POST',
			        url: url+'/ws/goey/rest/public/listarEntregasEstabelecimentos',
			        data: $.param({
    						             tipoUsuario: $scope.tipoUsuario,
    						             codUsuario: $scope.codUsuario,
    						             auth:  $scope.auth
    	       						   }),

		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			    }).success(function (response) {
			     
                    if(response[0].retorno == 1){
                        
                       $scope.lista = response;
                       $("#minhas-entregas").show();
                       $("#no-delivery").hide(); 
                       if(usuario.tipoUsuario == 3){
                         var verNotificacao = response.filter(function(verify){
                          if(verify.status == 1){
                            if(verify.aceito == 0){
                               notifyMe();    
                               playSound();  
                            }
                          }
                        });
                       }


                    }else{                        
                        $("#minhas-entregas").hide();
                       $("#no-delivery").show();
                       
                    }

                    
			    }).error(function (response) {

			        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');
                    ("#minhas-entregas").hide(); 
                    
			    });
    	
    }

$scope.listarEntregas();

$scope.verMapa = function(origem,codSascar,destino1,veiculo){

    var dest = JSON.stringify({origem:origem,codSascar:codSascar,destino1:destino1,tipoVeiculo:veiculo});

       localStorage.setItem('pos',dest);
            
            $state.go('app.maps');    
    
}

$scope.cancelarEntregas = function(id){

  var confirma = confirm('Deseja realmente cancelar entrega nº ' + id);

  if(confirma){

    $http({
              method: 'POST',
              url: url +'/ws/goey/rest/public/cancelarEntrega',
              data: $.param({
                              id: id,                        
                              auth:  $scope.auth
                            }),

            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function (response) {
            
                    if(response.retorno == 1){
                        
                      Flash.create('info', response.mensagem, 'large-text');
                      $scope.listarEntregas();
                      if(response.dataPgto == 0){
                        $http.post('https://www.iptufacil.com.br/ws/wsGetNet/client.php',$.param({codigo:response.autorizacao,funcao:'cancelaPagamento'})).then(function(result){
                          
                        });
                      }else{
                        Flash.create('info', 'Pagamento por Cartão de Crédito, é possível cancelar apenas no mesmo dia, entre em contato conosco.', 'large-text');  
                      }
                    }else{                  
                        
                      Flash.create('info', response.mensagem, 'large-text');
                       
                    }
                    
          }).error(function (response) {

              Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');                   
                    
          });

  }

}

$scope.aceitarEntrega = function(cod){


    $http({
      method: 'POST',
      url: url+'/ws/goey/rest/public/aceitarEntregaRestaurante',
      data: $.param({
       auth:  $scope.auth,
       codigo:cod
     }),

      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (response) {

    });

}

$scope.detalhaPedido = function(id){

  var foo = window.open ('http://www.goeyja.com.br/pedido.php?pedido='+window.btoa(id)+'&rest='+window.btoa($scope.codUsuario),"mywin","menubar=1,resizable=0,width=400,height=550,scrollbars=no,resizable=no,fullscreen=no" );
  foo.moveTo(400,100);

}

// setTimeout($scope.listarEntregas(), 60000);
setInterval(function(){ $scope.listarEntregas(); }, 60000);




}]);
