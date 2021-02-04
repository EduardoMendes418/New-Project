

dashboard.controller("atualizarProdutosCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http',
function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http) {
    var vm = this;
    $scope.editar = [];
   	var usuario = JSON.parse(localStorage.getItem('user'));
    $scope.editar = JSON.parse(localStorage.getItem('produto'));
   	$("#tipoUsuario").val(usuario.tipoUsuario);
   	$("#codUsuario").val(usuario.codUsuario);
   	$("#codProduto").val($scope.editar.cod);
   	var url = 'https://www.iptufacil.com.br';
    //var url = 'http://192.168.0.69:8025';

$scope.carregaCategoria = function(){

	var produto = JSON.parse(localStorage.getItem('produto'));

	let dados = {
			codProduto:produto.cod,
			auth:"3f018bfb43591ccb2ef46f10de832160"
		};

	$http.post(url+'/ws/goey/rest/public/carregaCategoriaProduto',dados).then(function(data) {
        $scope.comboCategoria = data.data;         
        // console.log($scope.comboCategoria);
    });

}
$scope.carregaCategoria();
}]);