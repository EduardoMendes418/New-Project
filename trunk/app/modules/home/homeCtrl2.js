﻿
home.controller("homeCtrl", ['$rootScope', '$scope', '$state', '$location', 'loginService', 'Flash','apiService','$http','distanciaService','GoogleDistanceAPI',
function ($rootScope, $scope, $state, $location, loginService, Flash, apiService,$http,distanciaService,GoogleDistanceAPI) {
        var vm = this;

          $scope.pg1 = "pg1.html";   

//FUNCAO DO FORMULARIO CONTATO
  $scope.enviarEmail = function(){

        var destinatario = 'atendimento.empresa@ddtotal.com.br';
        var copia = '';
        var assunto = 'Contato - Site goey';
        var nome = $scope.demail.nome || '';
        var email = $scope.demail.email || '';
        var tel = $scope.demail.tel || '';
        var desc = $scope.demail.desc || '';

        var descricao = "Nome: "+nome+"<br/>"+
                        "Email: "+email+"<br/>"+                       
                        "Telefone: "+tel+"<br/>"+
                        '<br/>'+desc;

        var url = "https://www.iptufacil.com.br/ws/geral/public/enviarEmail";
                $http.post(url, ({
                      destinatario: destinatario,
                      copia: copia,
                      assunto: assunto,
                      descricao: descricao
                })
                ).then(function(response){

                  Flash.create('info', response.data.mensagem, 'large-text');

                });
    }

// Função converter Segundos em horas e minutos    
$scope.converterSegundos = function(time){

var informacao = '';
var hours = Math.floor( time / 3600 );  
var minutes = Math.floor( (time % 3600) / 60 );
var seconds = time % 60;

minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

 if(hours > 0 ){

      informacao = hours + ' hora(s) e ' + minutes + ' minuto(s)';
 }else{

  informacao = minutes + ' minuto(s)';
 } 

  $scope.totalDuracao = informacao;

}

// matrix Google
$scope.matrixGoogle = function(){

  var tipoVeiculo = $("input[name=tipoVeiculo]:checked").val();
  var origem   = $("#origem").val() || ""; 
  var destino1 = $("#destino1").val() || "";
  var destino2 = $("#destino2").val() || "";
  var destino3 = $("#destino3").val() || "";
  var destino4 = $("#destino4").val() || "";
  var destino5 = $("#destino5").val() || "";

  if( origem == ""){

    Flash.create('danger', 'Verifique o campo origem', 'large-text');
    return false;

  }

   if($scope.total >= 1 && destino1 == ""){

    Flash.create('danger', 'Verifique o campo destino', 'large-text');
    return false;

   }


  if($scope.total >= 2 && destino2 == ""){

  Flash.create('danger', 'Verifique o campo destino 2', 'large-text');
  return false;

  }

 if($scope.total >= 3 && destino3 == ""){

  Flash.create('danger', 'Verifique o campo destino 3', 'large-text');
  return false;

  }
 if($scope.total >= 4 && destino4 == ""){

  Flash.create('danger', 'Verifique o campo destino 4', 'large-text');
  return false;

  }
if($scope.total >= 5 && destino5== ""){

  Flash.create('danger', 'Verifique o campo destino 5', 'large-text');
  return false;

  }

if($scope.total == 1){

  $scope.enderecos = [{origem:origem,destino:destino1}]; 

}else if($scope.total == 2){

  $scope.enderecos = [{origem:origem,destino:destino1},
                      {origem:destino1,destino:destino2}]; 

}else if($scope.total == 3){

   $scope.enderecos = [{origem:origem,destino:destino1},
                      {origem:destino1,destino:destino2},
                      {origem:destino2,destino:destino3}]; 

}else if($scope.total == 4){

$scope.enderecos = [{origem:origem,destino:destino1},
                    {origem:destino1,destino:destino2},
                    {origem:destino2,destino:destino3},
                    {origem:destino3,destino:destino4}]; 

}else if($scope.total == 5){

 $scope.enderecos = [{origem:origem,destino:destino1},
                    {origem:destino1,destino:destino2},
                    {origem:destino2,destino:destino3},
                    {origem:destino3,destino:destino4},
                    {origem:destino4,destino:destino5}];

}
$("#btnDistancia").hide();
$("#aguarde").show();

var url = 'https://www.iptufacil.com.br/ws/goey/rest/public/matrixGoogle';              
                            
  $http.post(url, ({
                            auth: "3f018bfb43591ccb2ef46f10de832160",
                            tipo: tipoVeiculo,
                            enderecos: $scope.enderecos
                          
                      })
                      ).then(function(response){
                        
                        $scope.totalKm =  response.data.km + ' Km';
                        $scope.converterSegundos(response.data.duracao);
                        $scope.totalValores = response.data.total;
                        $("#aguarde").hide();
                        $("#btnDistancia").show(); 
                      });          
}


// Função Adicionar Destinos
$scope.total = 1;
$("#removerdestino").hide();
$scope.addDestino = function(){
  var total = $scope.total;

$("#removerdestino").show();

  if(total == 1){
   $("#destino2").css("display","block");
   $scope.total = 2; 
 }
 if(total == 2){
   $("#destino3").css("display","block");
   $scope.total = 3;  
 }
 if(total == 3){
   $("#destino4").css("display","block");
   $scope.total = 4;  
 }
 if(total == 4){
   $("#destino5").css("display","block"); 
   $scope.total = 5; 
 } 

 if(total == 5){
  Flash.create('info', 'Somente 5 destinos. ', 'large-text');
}

}

// Função Remover Destino
$scope.removerDestino = function(){
  var rem = $scope.total;


  if(rem >1){    

    $("#destino"+ rem).val("");
    $("#destino"+ rem).hide();
    $scope.total = rem-1;

  }
   
  if(rem <= 2 ){

    $("#removerdestino").hide();
  }

}

// Quero contratar
 }]);

//Criando o módulo para o factory
// home.factory('email', function ($http) {
//         return {
//             enviar: function (destinatario,copia,assunto,descricao) {
//                 var url = ws+"/geral/public/enviarEmail";
//                 $http.post(url, $.param({
//                     destinatario: destinatario,
//                     copia: copia,
//                     assunto: assunto,
//                     descricao: descricao
//                 })
//                 ).then(function(response){
//                    alert(response.data.mensagem)
//                 }, function(response){
//                     console.log(response);
//                 });
//             }
//         }
//     });
