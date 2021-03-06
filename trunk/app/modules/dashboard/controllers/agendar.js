﻿

dashboard.controller("agendarCtrl", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash','$http','distanciaService','GoogleDistanceAPI',
  function ($rootScope, $scope, $state, $location, dashboardService, Flash,$http,distanciaService,GoogleDistanceAPI) {
    var vm = this;
    var buscar = this;

    $scope.agendamento = 1;
    $scope.cadastro = [];
     $scope.resO = [];
    $scope.resD1 = [];
    $scope.resD2 = [];
    $scope.resD3 = [];
    $scope.resD4 = [];
    $scope.resD5 = [];  

    var usuario = JSON.parse(localStorage.getItem('user'));
    $scope.tipoUsuario = usuario.tipoUsuario;
    $scope.codUsuario = usuario.codUsuario;
    $scope.lat = undefined;
    $scope.lng = undefined;
    $scope.cadastrar = [];

    $('#horaRetirada').val();

//Retorno endereço com número
 $scope.retornoEndereco = function(endereco,numero){
    var end = endereco.split(',');
    return    end[0]+', '+numero + '-'+end[1] + ', '+end[2];  
  }

// Campo Auto Complete endereço
  $scope.autoOrigem = function(tx){
             
      var searchText_len = tx.trim().length;
      
      // Check search text length
      if(searchText_len >= 3){

         $http({
                method: 'post',
                url: "https://www.iptufacil.com.br/ws/goey/rest/public/listarEndereco",
                data: {endereco:tx,auth:'3f018bfb43591ccb2ef46f10de832160'}
              }).then(function successCallback(response) {
              if(response.data[0].retorno == 1){
                $scope.resO = response.data;
              }

              });

          }else{

                $scope.resO = [];
          }
                
   }
// Campo Auto Complete endereço Destino 1
  $scope.autoDestino1 = function(tx){
             
      var searchText_len = tx.trim().length;
      
      // Check search text length
      if(searchText_len >= 3){

         $http({
                method: 'post',
                url: "https://www.iptufacil.com.br/ws/goey/rest/public/listarEndereco",
                data: {endereco:tx,auth:'3f018bfb43591ccb2ef46f10de832160'}
              }).then(function successCallback(response) {
                if(response.data[0].retorno == 1){
                $scope.resD1 = response.data;
                }

              });

          }else{

                $scope.resD1 = [];
          }
                
   }

// Campo Auto Complete endereço Destino 2
  $scope.autoDestino2 = function(tx){
             
      var searchText_len = tx.trim().length;
      
      // Check search text length
      if(searchText_len >= 3){

         $http({
                method: 'post',
                url: "https://www.iptufacil.com.br/ws/goey/rest/public/listarEndereco",
                data: {endereco:tx,auth:'3f018bfb43591ccb2ef46f10de832160'}
              }).then(function successCallback(response) {
                if(response.data[0].retorno == 1){
                $scope.resD2 = response.data;
                }

              });

          }else{

                $scope.resD2 = [];
          }
                
   }

// Campo Auto Complete endereço Destino 3
  $scope.autoDestino3 = function(tx){
             
      var searchText_len = tx.trim().length;
      
      // Check search text length
      if(searchText_len >= 3){

         $http({
                method: 'post',
                url: "https://www.iptufacil.com.br/ws/goey/rest/public/listarEndereco",
                data: {endereco:tx,auth:'3f018bfb43591ccb2ef46f10de832160'}
              }).then(function successCallback(response) {
                if(response.data[0].retorno == 1){
                $scope.resD3 = response.data;
                }

              });

          }else{

                $scope.resD3 = [];
          }
                
   }

   // Campo Auto Complete endereço Destino 4
  $scope.autoDestino4 = function(tx){
             
      var searchText_len = tx.trim().length;
      
      // Check search text length
      if(searchText_len >= 3){

         $http({
                method: 'post',
                url: "https://www.iptufacil.com.br/ws/goey/rest/public/listarEndereco",
                data: {endereco:tx,auth:'3f018bfb43591ccb2ef46f10de832160'}
              }).then(function successCallback(response) {
                if(response.data[0].retorno == 1){
                $scope.resD4 = response.data;
                }
              });

          }else{

                $scope.resD4 = [];
          }
                
   }

      // Campo Auto Complete endereço Destino 5
  $scope.autoDestino5 = function(tx){
             
      var searchText_len = tx.trim().length;
      
      // Check search text length
      if(searchText_len >= 3){

         $http({
                method: 'post',
                url: "https://www.iptufacil.com.br/ws/goey/rest/public/listarEndereco",
                data: {endereco:tx,auth:'3f018bfb43591ccb2ef46f10de832160'}
              }).then(function successCallback(response) {
                if(response.data[0].retorno == 1){
                $scope.resD5 = response.data;
                }

              });

          }else{

                $scope.resD5 = [];
          }
                
   }
// Set value to search box
$scope.setValue = function(n,x){
if(n == 1){

  $scope.cadastrar.origem = x.endereco;
  $scope.inputClique();          
      
}else if(n == 2){

  $scope.cadastrar.destino1 = x.endereco;
  $scope.inputClique();  

}else if(n == 3){

  $scope.cadastrar.destino2 = x.endereco;
  $scope.inputClique();  

}else if(n == 4){

  $scope.cadastrar.destino3 = x.endereco;
  $scope.inputClique();  

}else if(n == 5){

  $scope.cadastrar.destino4 = x.endereco;
  $scope.inputClique();   

}else if(n == 6){

  $scope.cadastrar.destino5 = x.endereco;
  $scope.inputClique();   
}
  
 
 
}

$scope.inputClique = function(){
  $scope.resO = [];
  $scope.resD1= [];
  $scope.resD2= [];
  $scope.resD3= [];
  $scope.resD4= [];
  $scope.resD5= [];
   }

// Busca endereço por cep
$scope.buscaCep = function(n,cep){

  if(cep){

      $http({
          method: 'POST',
          url: "https://www.iptufacil.com.br/ws/goey/rest/public/buscarEndereco",
          data: $.param({                         
                         cep:cep,                                                        
                         auth:'3f018bfb43591ccb2ef46f10de832160'
                        }),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}

      }).success(function (response) {
           
                 if(response.retorno == 1){                
                            if(n == 1){
                              $scope.cadastrar.origem = response.endereco;
                              $scope.inputClique();

                            }else if(n == 2){
                               $scope.cadastrar.destino1 = response.endereco;
                               $scope.inputClique();

                            }else if(n == 3){
                               $scope.cadastrar.destino2 = response.endereco;
                               $scope.inputClique();

                            }else if(n == 4){
                               $scope.cadastrar.destino3 = response.endereco;
                               $scope.inputClique();

                            }else if(n == 5){
                               $scope.cadastrar.destino4 = response.endereco;
                               $scope.inputClique();

                            }else if(n == 6){
                               $scope.cadastrar.destino5 = response.endereco;
                               $scope.inputClique();

                            }
                          

                 }           

      })

  }

}
$scope.endereco = [];

$scope.comboCidades = function(){
uf = 'SP';
   $http({
          method: 'POST',
          url: "https://www.iptufacil.com.br/ws/goey/rest/public/comboCidades",
          data: $.param({                         
                         uf:uf,                                                        
                         auth:'3f018bfb43591ccb2ef46f10de832160'
                        }),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}

      }).success(function (response) {
           
                 $scope.comboCidades = response;       

      })

}
$scope.comboCidades();

$scope.addEndereco = function(buscar){
 
  if(buscar.cidade == undefined){
    alert("Selecione uma cidade.");
    return false;
  }
  if(buscar.bairro == undefined){
    alert("Digite um bairro.");
    return false;
  }
  if(buscar.logradouro == undefined){
    alert("Digite um logradouro.");
    return false;
  }
  if(buscar.numero == undefined){
    alert("Digite um número.");
    return false;
  }

var endereco = buscar.logradouro +', '+buscar.bairro +', '+ buscar.cidade +' - ' + $("#buscarEstado").val(); ;

    if(buscar.campo == 1){

      $scope.cadastrar.origem = endereco;
      $scope.cadastrar.numero = buscar.numero;

    }else if(buscar.campo == 2){

      $scope.cadastrar.destino1 = endereco;
      $scope.cadastrar.numero1 = buscar.numero;

    }else if(buscar.campo == 3){

      $scope.cadastrar.destino2 = endereco;
      $scope.cadastrar.numero2 = buscar.numero;

    }else if(buscar.campo == 4){

      $scope.cadastrar.destino3 = endereco;
      $scope.cadastrar.numero3 = buscar.numero;

    }else if(buscar.campo == 5){

      $scope.cadastrar.destino4 = endereco;
      $scope.cadastrar.numero4 = buscar.numero;

    }else if(buscar.campo == 6){

      $scope.cadastrar.destino5 = endereco;
      $scope.cadastrar.numero5 = buscar.numero;

    }

     $scope.buscar = [];
     $('#myModal').modal('hide');

}

$scope.limpaCampo = function(){
  $("#buscarEstado").val("SP");
buscar.bairro = '';
buscar.logradouro = '';
buscar.numero = '';
}

var cmp = [];
cmp[0] = 'origem';
cmp[1] = 'destino 1';
cmp[2] = 'destino 2';
cmp[3] = 'destino 3';
cmp[4] = 'destino 4';
cmp[5] = 'destino 5';
// Função contar ocorrência de caracteres numa string
 $scope.contador = function(string, char) {
    var re = new RegExp(char, "gi");
    return string.match(re).length;
  }

$scope.validaCampo = function(string,numero,char){
var re = new RegExp(char, "gi");

   if(string == '' || string == undefined ||  ( numero == undefined || numero == '')){

     return false;

   }else if(!string.match(re) || string.match(re).length != 2){

    return false;

   }else{

    return true;
   }
}

// Consultar distancia no google
$scope.consultarValores = function(){
   
  if($scope.cadastrar.tipoVeiculo == undefined)$scope.cadastrar.tipoVeiculo = 2;  
  var tipoVeiculo = $("input[name=tipoVeiculo]:checked").val();

  localStorage.setItem('VV',$scope.cadastrar.tipoVeiculo); 
  var origem   = $("#origem").val() || ""; 
  var destino1 = $("#destino1").val() || "";
  var destino2 = $("#destino2").val() || "";
  var destino3 = $("#destino3").val() || "";
  var destino4 = $("#destino4").val() || "";
  var destino5 = $("#destino5").val() || "";
  var numero   = $("#numero").val() || "";
  var numero1  = $("#numero1").val() || "";
  var numero2  = $("#numero2").val() || "";
  var numero3  = $("#numero3").val() || "";
  var numero4  = $("#numero4").val() || "";
  var numero5  = $("#numero5").val() || "";
  var rotas = [];

  if(!$scope.validaCampo(origem,numero,',')){

    Flash.create('danger', 'Verifique o enderço de origem <br>Ex: logradouro, bairro, cidade - UF', 'large-text');
    return false;

  }else{

     origem   = $scope.retornoEndereco(origem,numero);

  }
     
 
   if( $scope.total >= 1 && !$scope.validaCampo(destino1,numero1,',')){

    Flash.create('danger', 'Verifique o endereço de destino  <br>Ex: logradouro, bairro, cidade - UF', 'large-text');
    return false;

   }else{

     destino1 = $scope.retornoEndereco(destino1,numero1);

   }

  if($scope.total >= 2 && !$scope.validaCampo(destino2,numero2,',')){

  Flash.create('danger', 'Verifique o endereço de destino 2 <br>Ex: logradouro, bairro, cidade - UF', 'large-text');
  return false;

  }else{

    destino2 = $scope.retornoEndereco(destino2,numero2);
    
  }

 if($scope.total >= 3 && !$scope.validaCampo(destino3,numero3,',')){

  Flash.create('danger', 'Verifique o endereço de destino 3 <br>Ex: logradouro, bairro, cidade - UF', 'large-text');
  return false;

  }else{

    destino3 = $scope.retornoEndereco(destino3,numero3);
    
  }

 if($scope.total >= 4 && !$scope.validaCampo(destino4,numero4,',')){

  Flash.create('danger', 'Verifique o endereço de destino 4 <br>Ex: logradouro, bairro, cidade - UF', 'large-text');
  return false;

  }else{

    destino4 = $scope.retornoEndereco(destino4,numero4);
    
  }

  if($scope.total >= 5 && !$scope.validaCampo(destino5,numero5,',')){

  Flash.create('danger', 'Verifique o endereço de destino 5 <br>Ex: logradouro, bairro, cidade - UF', 'large-text');
  return false;

  }else{

    destino5 = $scope.retornoEndereco(destino5,numero5);
    
  }



if($scope.total == 1){
  
  $scope.enderecos = [{origem:origem,destino:destino1}];
  rotas.push({origem:origem,destino1:destino1});

}else if($scope.total == 2){
  
  $scope.enderecos = [{origem:origem,destino:destino1},
                      {origem:destino1,destino:destino2}];
  rotas.push({origem:origem,destino1:destino1,destino2:destino2}); 

}else if($scope.total == 3){
 
  $scope.enderecos = [{origem:origem,destino:destino1},
                      {origem:destino1,destino:destino2},
                      {origem:destino2,destino:destino3}];
  rotas.push({origem:origem,destino1:destino1,destino2:destino2,destino3:destino3});  

}else if($scope.total == 4){ 

$scope.enderecos = [{origem:origem,destino:destino1},
                    {origem:destino1,destino:destino2},
                    {origem:destino2,destino:destino3},
                    {origem:destino3,destino:destino4}];
rotas.push({origem:origem,destino1:destino1,destino2:destino2,destino3:destino3,destino4:destino4});   

}else if($scope.total == 5){
  
 $scope.enderecos = [{origem:origem,destino:destino1},
                    {origem:destino1,destino:destino2},
                    {origem:destino2,destino:destino3},
                    {origem:destino3,destino:destino4},
                    {origem:destino4,destino:destino5}];
rotas.push({origem:origem,destino1:destino1,destino2:destino2,destino3:destino3,destino4:destino4,destino5:destino5});  

}

$("#btnDistancia").hide();
$("#aguarde").show();

//var url = 'http://192.168.0.69:8025/ws/goey/rest/public/matrixGoogle'; 
var url = 'https://www.iptufacil.com.br/ws/goey/rest/public/matrixGoogle';
 $http.post(url, ({
                      auth: "3f018bfb43591ccb2ef46f10de832160",
                      tipo: tipoVeiculo,
                      enderecos: $scope.enderecos,
                      tipoUsuario: $scope.tipoUsuario,
                      codUsuario: $scope.codUsuario
                          
                      })
                      ).then(function(response){
                        if(response.data.total  == 0 || response.data.km == 0){

                        alert("Clique em calcular novamente");
                        $("#aguarde").hide();
                        $("#btnDistancia").show();
                        return false;

                       }else{

                        localStorage.setItem('rotas',JSON.stringify(rotas));                    
                        $scope.cadastrar.distancia =  response.data.km;                      
                        $scope.cadastrar.valor = response.data.total;
                      }

                        $("#aguarde").hide();
                        $("#btnDistancia").show();
                         
                      }); 
}

// FUNÇÃO AGENDAR ENTREGAS
$scope.agendarEntrega = function(){
 var VV = localStorage.getItem('VV');

 if(VV != $scope.cadastrar.tipoVeiculo){
     alert("Clique em calcular novamente");
     return false;
 }

 $scope.dados = [];
 var origem = $("#origem").val() || "";
 var destino1 = $("#destino1").val() || "";
 var destino2 = $("#destino2").val() || "";
 var destino3 = $("#destino3").val()|| "";
 var destino4 = $("#destino4").val() || "";
 var destino5 = $("#destino5").val() ||"";
 var numero   = $("#numero").val() || "";
 var numero1  = $("#numero1").val() || "";
 var numero2  = $("#numero2").val() || "";
 var numero3  = $("#numero3").val() || "";
 var numero4  = $("#numero4").val() || "";
 var numero5  = $("#numero5").val() || "";

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();

    if(dd<10){

        dd='0'+dd;

    }

    if(mm<10){

        mm='0'+mm;

    } 

var today = dd+'/'+mm+'/'+yyyy;
 
if($scope.agendamento == 1){

  $scope.dados.dataAgenda = today;

}else{

  $scope.dados.dataAgenda = $('#dataAgenda').val();
}
//$scope.dados = $scope.cadastrar;
 $scope.dados.auth =  '3f018bfb43591ccb2ef46f10de832160'; 
 $scope.dados.tipoUsuario = usuario.tipoUsuario;
 $scope.dados.codUsuario = usuario.codUsuario;
 $scope.dados.distancia= $("#distancia").val();
 $scope.dados.valor    = $scope.cadastrar.valor;
 $scope.dados.tipoVeiculo = $("input[name=tipoVeiculo]:checked").val();


 if($("#origem").val() == ""){

    Flash.create('danger', 'O campo origem é obrigatório.', 'large-text');
    return false;

 }

  
 if($("#destino1").val() == ""){

    Flash.create('danger', 'O campo destino é obrigatório.', 'large-text');
    return false;
    
 }


  if($scope.total >= 2 &&  (destino2 == undefined || destino2 ==  "")){

      Flash.create('danger', 'O campo segundo destino é obrigatório.', 'large-text');
      return false;

  }


   if($scope.total >= 3 &&  (destino3 == undefined || destino3 ==  "" )){

      Flash.create('danger', 'O campo terceiro destino é obrigatório.', 'large-text');
      return false;

  }

   if($scope.total >= 4 &&  (destino4 == undefined || destino4 ==  "")){

      Flash.create('danger', 'O campo quarto destino é obrigatório.', 'large-text');
      return false;

  }

  if($scope.total >= 5 &&  (destino5 == undefined || destino5 ==  "")){

      Flash.create('danger', 'O campo quinto destino é obrigatório.', 'large-text');
      return false;

  }

// verifica se o endereço digitado segue o padrão
$(".autocomplete").each(function( index ) { 

    if($( this ).val() != '' && (!$( this ).val().match(/- SP/) || $scope.contador($(this).val(),',') != 2) ){

      alert("Digite um endereço de "+cmp[index]+" válido <br>Ex: logradouro, bairro, cidade-uf");
      return false;

    }
  
});

if($("#distancia").val() == ''){

  Flash.create('danger', 'Clique em calcular para gerar a distância.', 'large-text');
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

if( $scope.agendamento == 2 && $("#dataAgenda").val() == ''){

    Flash.create('danger', 'O campo outra data é obrigatório.', 'large-text');
    return false;
    
 }

 if( $("#horaRetirada").val() == ''){

    Flash.create('danger', 'O campo hora de retirada é obrigatório.', 'large-text');
    return false;
    
 }else{

    $scope.dados.horaRetirada = $("#horaRetirada").val() ;

 }
 
var rotas = JSON.parse(localStorage.getItem('rotas'));
 
if(rotas[0].origem != $scope.retornoEndereco(origem,numero)){

  Flash.create('info', 'Por favor clique em calcular novamente.', 'large-text');
  return false;

}else{

  $scope.dados.origem  = $scope.retornoEndereco(origem,numero);
 }

if(rotas[0].destino1 != $scope.retornoEndereco(destino1,numero1)){

  Flash.create('info', 'Por favor clique em calcular novamente.', 'large-text');
  return false;

}else{

    $scope.dados.destino1 = $scope.retornoEndereco(destino1,numero1);
    
 }

if($scope.total >= 2){

    if(rotas[0].destino2 != $scope.retornoEndereco(destino2,numero2)){
      Flash.create('info', 'Por favor clique em calcular novamente.', 'large-text');
      return false;

    }else{

    $scope.dados.destino2 = $scope.retornoEndereco(destino2,numero2);
    
  }
}

if($scope.total >= 3 ){

      if(rotas[0].destino3 != $scope.retornoEndereco(destino3,numero3)){

      Flash.create('info', 'Por favor clique em calcular novamente.', 'large-text');
      return false;

    }else{

        $scope.dados.destino3 = $scope.retornoEndereco(destino3,numero3);
       
      }
}

if($scope.total >= 4){

      if(rotas[0].destino4 != $scope.retornoEndereco(destino4,numero4)){
      Flash.create('info', 'Por favor clique em calcular novamente.', 'large-text');
      return false;

    }else{

        $scope.dados.destino4 = $scope.retornoEndereco(destino4,numero4);

  }
}

if($scope.total >= 5){
     if(rotas[0].destino5 != $scope.retornoEndereco(destino5,numero5)){
      Flash.create('info', 'Por favor clique em calcular novamente.', 'large-text');
      return false;

    }else{

        $scope.dados.destino5 = $scope.retornoEndereco(destino5,numero5);
      }
}

$("#btnAgendar").hide();  
$("#aguarde2").show(); 

 var url = 'https://www.iptufacil.com.br';
 //var url = 'http://192.168.0.69:8025'; 

$http.post(url+'/ws/goey/rest/public/cadastrarEntregas', ({
  auth: "3f018bfb43591ccb2ef46f10de832160",
    tipoVeiculo: $scope.dados.tipoVeiculo,
    valor: $scope.cadastrar.valor,
     dataAgenda:$scope.dados.dataAgenda,
     horaRetirada: $scope.dados.horaRetirada,
    tipoUsuario: $scope.dados.tipoUsuario,
    codUsuario: $scope.dados.codUsuario ,
    distancia: $scope.dados.distancia,
    descricao: $scope.dados.descricao ,
    observacao:  $scope.dados.observacao,
    objeto:$scope.dados.objeto, 
    responsavel:  $scope.dados.responsavel,
    origem:    $scope.dados.origem ,
    destino1: $scope.dados.destino1 ,
    destino2: $scope.dados.destino2 ,
    destino3: $scope.dados.destino3 ,
    destino4: $scope.dados.destino4 ,
    destino5: $scope.dados.destino5                         
                  })).then(function(response){

                      $("#aguarde2").hide(); 
    $("#btnAgendar").show(); 

    if(response.data.retorno == 1){

     Flash.create('success', response.data.mensagem, 'large-text');
     $scope.cadastrar = "";
     $scope.total = 1; 
     $(".geral").hide();
     $("#remover-destino").hide();
     localStorage.removeItem('rotas');

   }else{                        

     Flash.create('info', response.data.mensagem, 'large-text'); 

   }

                      });


}

 

$scope.total = 1;
$scope.addDestino = function(){
   
  var total = $scope.total;

$("#remover-destino").show();
  if(total == 1){   
   $("#grupo2").css("display","block");
   $scope.total = 2; 
 }
 if(total == 2){
   $("#grupo3").css("display","block");
   $scope.total = 3;  
 }
 if(total == 3){
   $("#grupo4").css("display","block");
   $scope.total = 4;  
 }
 if(total == 4){
   $("#grupo5").css("display","block"); 
   $scope.total = 5; 
 }

 if(total == 5){
  Flash.create('info', 'Somente 5 destinos. ', 'large-text');
}

}

$scope.removerDestino = function(){
  
var rem = $scope.total;

  if(rem >1){
   
    $("#destino"+ rem).val("");
    $("#numero"+ rem).val("");
    $("#cep"+ rem).val("");
    $("#grupo"+ rem).hide();

    $scope.total = rem-1;

  }

   if($scope.total  == 1){

    $("#remover-destino").hide();
  
   }

}

$( ".datepicker" ).datepicker({
  locale: 'pt-br'
});


  $('#horaRetirada').datetimepicker({
                    format: 'HH:mm'                 
            
                });

}]);
