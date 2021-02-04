

dashboard.controller("cadastroCategoriasCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
   
    $scope.editar = [];
   	var usuario = JSON.parse(localStorage.getItem('user'));

   	$("#tipoUsuario").val(usuario.tipoUsuario);
   	$("#codUsuario").val(usuario.codUsuario);
	   var url = 'https://www.iptufacil.com.br';
    //var url = 'http://192.168.0.69:8025';

$scope.carregaCategoria = function(){
	let dados = {
				        codRestaurante:usuario.codUsuario,
				        auth:"3f018bfb43591ccb2ef46f10de832160"
				      };

	$http.post(url+'/ws/goey/rest/public/listaCategoriaEstabelecimento',dados).then(function(data) {
        $scope.comboCategoria = data.data;         
        // console.log($scope.comboCategoria);
    });

}

$scope.carregaCategoria();

$scope.cadastroCategoria = function(){

vm.auth = "3f018bfb43591ccb2ef46f10de832160";
vm.codRestaurante = usuario.codUsuario;
 
 if($("#descricao").val() == ""){

 	alert("Descrição é obrigatório.");
 	return false;

 }

 $http({
          method: 'POST',
          url: url + '/ws/goey/rest/public/cadastroCategorias',
          data: $.param(vm),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (response) {

            alert(response.mensagem);

           if(response.retorno == 1){

              vm.descricao = "";
              vm.ordem     = "";
              vm.codigo    = "";

              $scope.carregaCategoria();
              $("#btn").val('Cadastrar'); 

           }                                
                
        });
}

$scope.atualizarProduto = function(dados){

   vm.codigo = dados.codigo;
   vm.descricao = dados.descricao;
   vm.ordem = dados.ordem;
   $("#btn").val('Atualizar');

}


}]);