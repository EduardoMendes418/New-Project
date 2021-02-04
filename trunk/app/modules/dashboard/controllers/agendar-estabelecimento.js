
dashboard.controller("agendarEstabelecimentoCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http','distanciaService',
  function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http,distanciaService) {
    var vm = this;

var url = 'https://www.iptufacil.com.br'; // URL produção
// var url = 'http://192.168.0.69:8025'; // URL local 


    $scope.agendamento = 1;
    $scope.cadastro = [];
    $scope.dados = {};    

    var usuario = JSON.parse(localStorage.getItem('user'));

    $scope.tipoUsuario = usuario.tipoUsuario;
    $scope.codUsuario = usuario.codUsuario;
    $scope.origem = usuario.logradouro +','+ usuario.numero +'-'+usuario.bairro +','+usuario.cidade.toLowerCase()+'-'+usuario.uf;
  
   
  // Status Bike   
     if(usuario.bike == 1){

      $("#optBike").show();

     }

    if($scope.tipoUsuario == 4){

        $(".agendamentoEstabelecimento").css('display','block');

    }

    $scope.lat = undefined;
    $scope.lng = undefined;

$("#origem").val($scope.origem);
//$("#destino1").val('Rua Paula Bueno, 100 - Taquaral, Campinas - SP');

//  Calcular Total
$scope.calcularTotal = function(){
   var produto = $scope.cadastrar.valorProduto;
   var entrega = $scope.cadastrar.valorEntrega;

   if(produto > 0 ){

      $scope.cadastrar.valorTotal = (parseFloat(produto)) + (parseFloat(entrega));

   }
   
}

// Calcular troco
  $scope.calcularTroco = function(){

    var total = $scope.cadastrar.valorTotal;
    var trocoPa = $scope.cadastrar.trocoPara;

      if(total > 0 && trocoPa > total ){ //trocoPara - valorProduto

        $scope.cadastrar.valorTroco =  trocoPa - total;

      }else{      

        $scope.cadastrar.valorTroco = 0;
      }
    
    }

// Consultar distancia no google
$scope.consultarValores = function(){
var tipoVeiculo = $("input[name=tipoVeiculo]:checked").val();
$scope.cadastrar.distancia = '';
$scope.cadastrar.valor = '';
localStorage.removeItem('rotas'); 
 /* if($("input[name=tipoVeiculo]:checked").val() === undefined){

    Flash.create('danger', 'Escolha um tipo de veículo para consulta!', 'large-text');
    return false;

  }else{

    var tipoVeiculo = $("input[name=tipoVeiculo]:checked").val();
  }

*/

  

   //alert(tipoVeiculo);

  
  var destino1 = $("#destino1").val() || "";

  if( $scope.origem == ""){

    Flash.create('danger', 'Verifique o campo origem', 'large-text');
    return false;

  }

  if(destino1 == ""){

    Flash.create('danger', 'Verifique o campo destino', 'large-text');
    return false;

  }


    if(!validarNumber(destino1)){

      return false;
    }

    $scope.enderecos = [{origem:$scope.origem,destino:destino1}];
 
  $("#btnDistancia").hide();
  $("#aguarde").show();
               
  $http.defaults.headers.post["Content-Type"] = "application/json";

  $http.post(url + '/ws/goey/rest/public/matrixGoogle', ({
                    auth: "3f018bfb43591ccb2ef46f10de832160",
                    tipo: tipoVeiculo,
                    enderecos: $scope.enderecos,
                    tipoUsuario : $scope.tipoUsuario

                  })).then(function(response){

                    if(response.data.retorno == 1){
                       // localStorage.setItem('rotas',JSON.stringify({origem:$scope.origem,destino1:destino1,veiculo:tipoVeiculo}));                       
                        if(usuario.bike == 1){

                            if(response.data.km <= 1.50 && tipoVeiculo != 4){

                              //Flash.create('info', '!', 'large-text');
                                if(confirm('Deseja alterar o tipo de veículo para bike elétrica?')){
                                 // $("input[name=tipoVeiculo]:checked").val('4');
                                  $("input[name=tipoVeiculo][value='4']").prop("checked",true);

                                   localStorage.setItem('rotas',JSON.stringify({origem:$scope.origem,destino1:destino1,veiculo:4})); 
                                   $scope.cadastrar.distancia =  response.data.km;
                                   $scope.cadastrar.valorEntrega = response.data.total;
                                   //$scope.converterSegundos(response.data.duracao);
                                   $scope.cadastrar.valor = response.data.total;

                                }else{

                                    localStorage.setItem('rotas',JSON.stringify({origem:$scope.origem,destino1:destino1,veiculo:tipoVeiculo})); 
                                    $scope.cadastrar.distancia =  response.data.km;
                                    //$scope.converterSegundos(response.data.duracao);
                                    $scope.cadastrar.valor = response.data.total;
                                    $scope.cadastrar.valorEntrega = response.data.total;
                                }

                            }else if(response.data.km > 1.5 && tipoVeiculo == 4){

                                 Flash.create('danger', 'Escolha outro tipo de veículo!', 'large-text');
                                 return false;

                            }else{

                              localStorage.setItem('rotas',JSON.stringify({origem:$scope.origem,destino1:destino1,veiculo:tipoVeiculo})); 
                              $scope.cadastrar.distancia =  response.data.km;
                              //$scope.converterSegundos(response.data.duracao);
                              $scope.cadastrar.valor = response.data.total;
                              $scope.cadastrar.valorEntrega = response.data.total;

                            }

                        }else{

                          localStorage.setItem('rotas',JSON.stringify({origem:$scope.origem,destino1:destino1,veiculo:tipoVeiculo})); 
                          $scope.cadastrar.distancia =  response.data.km;
                          //$scope.converterSegundos(response.data.duracao);
                          $scope.cadastrar.valor = response.data.total;
                          $scope.cadastrar.valorEntrega = response.data.total;

                        }

                        
                        $("#aguarde").hide();
                        $("#btnDistancia").show();

                      }else{
                        
                        Flash.create('danger', response.data.mensagem , 'large-text');
                        $("#aguarde").hide();
                        $("#btnDistancia").show();
                        return false;
                      }

                  }); 
}


    validarNumber = function(text){

      if(text){

        var patt = /[1234567890]/i;
        var res = patt.test(text);

              if(!res){

                Flash.create('danger', 'Digite um endereço válido com número.', 'large-text');
                return false;

              }else{

                return true;
              }
      }     

    }

// FUNÇÃO AGENDAR ENTREGAS
$scope.agendarEntrega = function(){ 

//$scope.dados = $scope.cadastrar;
$scope.dados.auth =  '3f018bfb43591ccb2ef46f10de832160'; 
$scope.dados.tipoUsuario = $scope.tipoUsuario;
$scope.dados.codUsuario  = $scope.codUsuario;
$scope.dados.distancia   = $("#distancia").val();
$scope.dados.valor       = $scope.cadastrar.valor;


    if($("#origem").val() == ""){

      Flash.create('danger', 'O campo origem é obrigatório.', 'large-text');
      return false;

    }

    if($("#destino1").val() == ""){

      Flash.create('danger', 'O campo destino é obrigatório.', 'large-text');
      return false;

    }else{

      $scope.dados.destino1 = $("#destino1").val();

    }

    if($("#distancia").val() == ''){

      Flash.create('danger', 'Clique em calcular para gerar a distância.', 'large-text');
      return false;

    }

    if($scope.dados.distancia > 1.5 && $scope.dados.tipoVeiculo == 4){

      Flash.create('danger', 'Distância não permitida para o tipo de veículo escolhido.<br>Escolha outro veículo!', 'large-text');
      return false;

    } 

    if($("#valor").val() == ''){

      Flash.create('danger', 'Clique em calcular para gerar o valor.', 'large-text');
      return false;

    }

    if($("input[name=objeto]:checked").val() == undefined){

      Flash.create('danger', 'O campo tipo de objeto é obrigatório.', 'large-text');
      return false;

    }else{

      $scope.dados.objeto = $("input[name=objeto]:checked").val() ;
    }

    if($("#responsavel").val() == ""){

      Flash.create('danger', 'O campo responsável é obrigatório.', 'large-text');
      return false;

    }else{

      $scope.dados.responsavel = $("#responsavel").val();
    }

    if($("#descricao").val() == ""){

      Flash.create('danger', 'O campo descrição é obrigatório.', 'large-text');
      return false;

    }else{

      $scope.dados.descricao = $("#descricao").val();

    }

    if($("#observacao").val() == ""){

      Flash.create('danger', 'O campo observação é obrigatório.', 'large-text');
      return false;

    }else{

      $scope.dados.observacao = $("#observacao").val();
    }

    var rotas = JSON.parse(localStorage.getItem('rotas'));

    if(rotas.destino1 != $scope.dados.destino1){

      Flash.create('info', 'Por favor clique em calcular novamente.', 'large-text');
      return false;

    }

    var veiculoTipo = $("input[name=tipoVeiculo]:checked").val();

    if(rotas.veiculo != veiculoTipo){

      Flash.create('danger', 'Por favor clique em calcular novamente.' + veiculoTipo, 'large-text');
      return false;

    }

    // Data Agendamento caso tipoUsuario == 4
    if($scope.tipoUsuario == 4){

      $scope.dados.dataAgenda = $("#dataAgenda").val();
      $scope.dados.horaRetirada = $("#horaRetirada").val();

    }

    if($("input[name=formaPagamento]:checked").val() == undefined){

      Flash.create('danger', 'O campo forma de pagamento é obrigatório.', 'large-text');
      return false;

    }else{

      $scope.dados.formaPagamento = $("input[name=formaPagamento]:checked").val();

    } 

    if($scope.dados.formaPagamento != 6 && $("#valorProduto").val() == ''){

        Flash.create('danger', 'O campo valor da venda é obrigatório.', 'large-text');
        return false;

    }

    if($scope.dados.formaPagamento == 6){

      $scope.cadastrar.valorProduto = 0;

    }

    if($scope.dados.formaPagamento == 3 && $("input[name=precisaTroco]:checked").val() == 1){

        if($("#trocoPara").val() == ''){

            Flash.create('danger', 'O campo troco para é obrigatório.', 'large-text');
            return false;

        }else{

          $scope.dados.troco = $scope.cadastrar.valorTroco;

        }

    }else{

        $scope.dados.troco = 0;

    }
$scope.dados.tipoVeiculo = rotas.veiculo;
$scope.dados.valorProduto = $scope.cadastrar.valorProduto;
$scope.dados.origem = $scope.origem;
 $("#btnAgendar").hide(); 
 $("#aguarde2").show(); 
 
$http({
          method: 'POST',
          url: url+'/ws/goey/rest/public/cadastrarEntregasEstabelecimentos',
          data: $.param($scope.dados),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (response) {

          $("#aguarde2").hide(); 
          $("#btnAgendar").show(); 

          if(response.retorno == 1){

            Flash.create('success', response.mensagem, 'large-text');
            $scope.cadastrar = "";           
            localStorage.removeItem('rotas');

          }else{
           
              Flash.create('info', response.mensagem, 'large-text'); 

          }

      }).error(function (response) {

        Flash.create('info', 'Desculpe! Ocorreu um erro.', 'large-text');

      });

    }


  $( ".datepicker" ).datepicker({
    locale: 'pt-br'
  });

    $('#horaRetirada').datetimepicker({
      format: 'HH:mm'

    });

}]);
