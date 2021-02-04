var app = angular
.module('urbanApp');
app.config( function ($stateProvider,$urlRouterProvider,$translateProvider){

//************************************************ Tradução USA ***************************************   
$translateProvider.translations('USE',{


            //MENU
            HOME:{
                REDES:{
                    SELECIONE:'Select',
                    MEDICOS:'Doctor',
                    DENTISTA:'Dentist',
                    SAUDE:'Other Health Professionals',
                },
                BOTAOAZUL:{
                    REDE: 'REGISTER OF THE PAYOUT NETWORK' ,
                },   
                BOTAOAMARELO:{
                    REDE: 'OPEN MY ACCOUNT PAYOUT',
                },   
                BANDEIRA:{
                    US: 'ENG',
                },
                COMO:{
                    FUNCIONA: 'HOW IT WORKS',
                },
            //PAGINA1
            PAGINAUM:{
                JEITO:'The easiest way to ',
                ENVIAR: 'send',
                OU:'or',
                RECEBER:'receive',
                PAGAMENTOS:'payments and',
                CONTRATAR:'hire services',
                DECIDE:',you decide.',
            },

                //CONTATO AZUL
                FORBTNAZUL:{
                    CPF:'CPF:',
                    ENDERECO:'Address:',
                    TELEFONE:'Telephone:',
                    EMAIL:'Your email:',
                    SENHAAPP:'Your password:',
                    REPETIRSENHA:'Please confirm your password:',
                }, 

                //CONTATO AMARELO
                FORBTNAMARELO:{
                    NOME:'Name:',
                    CPF:'CPF:',
                    ENDERECO:'Address:',
                    TELEFONE:'Telephone:',
                    EMAIL:'Your email:',
                    SENHAAPP:'Your password:',
                    REPETIRSENHA:'Please confirm your password:',
                },


            },

            //PAGINA2
            SECTION2:{
                TEXTOUM:{
                    TITULO:'Do note waste your time in queues or bank branches.',
                    SUBTITULO:'Deposits, transfers, payments without tickets, order of payment, receipts, sending of electronic charges.',
                }
            },

            //PAGINA3
            SECTION3:{

                TEXTOUM:{
                    TITULO:'"Use your iphone, ipad or Android to accept all Credit Cards"',
                    SUBTITULO:'was developed especially for freelancers to accept payments',
                    TRANS:'via the App Transfer',
                    BANDEIRAS:',or accept all',
                    CARTAO:'credit card',
                    FACILIDADE:'banners with ease.',
                    VIDA:'Payout more than an App, a lifestyle.',
                },
                TEXTODOIS:{
                    DIGITAL:'Your digital wallet.',
                    SUBTITULODIGITAL:'Do not waste more time.',
                },
                TEXTOBUTTON:{
                    BUTTON:'CONTACT US',
                },

                //CONTATO PAYOUT
                FORBTNCONTATO:{
                    NOME:'Name:',
                    EMAIL:'E-mail:',
                    TELEFONE:'Telephone:',
                    MENSAGEM:'Message:',
                    SHOW:{
                        NOME:'Name required',
                        EMAIL:'E-mail required', 
                        TELEFONE:'Telephone required',
                        MENSAGEM:'Message required',   
                    },
                    TELEFONECONTATO:{
                        TEL:'Telephone: (19) 98187-0077',
                        CONT: 'Contact: 0800 941 3950',  
                    },
                    BTN:{
                        ENVIAR:'Submit',
                    }
                }

            },

            //SECTION4
            SECTION4:{
                TITULOLUGAR:{
                    TITULO:'The place does not matter',
                    SUBTITULO:'Accept payments nationwide in the main credit card of the world: Visa, Mastercard, Amex, Diners and Elo.',
                },
                TITULOFAVOR:{
                    TITULO:'Technology in your favor',
                    SUBTITULO:' is a solution for all business models, allowing you to grow without worrying about payment.',
                },
                TITULOUSA:{
                    TITULO:'Usability',
                    SUBTITULO:'Simple experience that prevents errors and adds value. We know that time is important to you, so PAYOUT simply does what should be simple.',
                },
                TITULORECE:{
                    TITULO:'Get without POS - Machine',
                    SUBTITULO:'Receive payments by phone, without rent or monthly fee. To start receiving, you and your client have the application installed. Try it now.',
                }
            },


             //SECTION5
             SECTION5:{
                TITULOCONTATO:{
                    SUBTITULO:'With',
                    COLORFRASE:'Payout Cripto Exchange',
                    FRASE:'you can trade cryptocurrencies in our application in a simple, fast and totally secure way.',
                },
                TITULOCONTATODOIS:{
                    SUBTITULO:'YOUR SAFER OPTION FOR TRADING DIGITAL ASSETS.',
                    FRASE1:'WE ARE A PAYMENT ACCOUNT COMPANY REGULATED BY THE BACEN.',
                    FRASE2:' TRUST AND CREDIBILITY SINCE 2004.',
                    FRASE3:'A COMPLETE PAYMENT ACCOUNT.'
                },
                TITULOTUDO:{
                    SUBTITULO:'Operations starting in June / 2020',
                },
                FOOTER:{
                    TITULOFOOT:'UN PRODUCTO DDTOTAL',
                    SUBTITULOFOOT: '** REGLAMENTO **',
                }

            },

              //SECTION6

              /*
            SECTION6:{
                TITULOCONTATO:{
                    SUBTITULO:'TESTE',
                },
                TITULOCONTATODOIS:{
                    SUBTITULO:' TESTE',
                  
                },
                TITULOTUDO:{
                    SUBTITULO:'TESTE',
                },
               
            },*/


            
        });

//************************************************** Tradução BR ************************************
$translateProvider.translations('BRA',{

            //MENU
            HOME:{
                REDES:{
                    SELECIONE:'Selecione',
                    MEDICOS:'Médico',
                    DENTISTA:'Dentista',
                    SAUDE:'Outros Profissionais da Saúde',
                },
                BOTAOAZUL:{
                    REDE: 'FAZER PARTE DA REDE PAYOUT',
                },
                BOTAOAMARELO:{
                    REDE: 'ABRIR MINHA CONTA PAYOUT',
                }, 
                BANDEIRA:{
                    BR:'POR',
                },
                COMO:{
                    FUNCIONA: 'COMO FUNCIONA',
                },
            //PAGINA1
            PAGINAUM:{
                JEITO:'O jeito mais fácil de ',
                ENVIAR: 'enviar',
                OU:'ou',
                RECEBER:'receber',
                PAGAMENTOS:'pagamentos e',
                CONTRATAR:'contratar serviços',
                DECIDE:',você decide.',
            },
            FORBTNAMARELO:{
                NOME:'Nome:',
                CPF:'CPF:',
                ENDERECO:'Endereço:',
                TELEFONE:'Telefone:',
                EMAIL:'Email:',
                SENHAAPP:'Senha do App:',
                REPETIRSENHA:'Repetir Senha:',
            },
            FORBTNAZUL:{
                NOME:'Nome:',
                CPF:'CPF:',
                ENDERECO:'Endereço:',
                TELEFONE:'Telefone:',
                EMAIL:'Email:',
                SENHAAPP:'Senha do App:',
                REPETIRSENHA:'Repetir Senha:',
            }, 

        },
            //PAGINA2
            SECTION2:{
                TEXTOUM:{
                    TITULO:'Não perca mais seu tempo em filas de lotéricas ou agências.',
                    SUBTITULO:'TED, pagamentos sem boletos, pagamento de contas, ordem de pagamento, recebimentos, envio de cobranças eletrônicas.',
                }
            },
            //Pagina3
            SECTION3:{
                TEXTOUM:{
                    TITULO:'"Use seu iPhone, IPad ou Android para aceitar todos os Cartões de Crédito"',
                    SUBTITULO:'é uma solução desenvolvida especialmente para aceitar e enviar pagamentos via',
                    TRANS:'transferência pelo App',
                    BANDEIRAS:'ou aceitar todas as bandeiras de',
                    CARTAO:'cartão de crédito',
                    FACILIDADE:'com facilidade.',
                    VIDA:'Payout mais que um App, um estilo de vida.',
                },
                TEXTODOIS:{
                    DIGITAL:'Sua Carteira digital.',
                    SUBTITULODIGITAL:'Não perca mais tempo.',
                },
                TEXTOBUTTON:{
                    BUTTON:'ENTRE EM CONTATO',
                },
            //CONTATO PAYOUT
            FORBTNCONTATO:{
                NOME:'Nome:',
                EMAIL:'Email:',
                TELEFONE:'Telefone:',
                MENSAGEM:'Mensagem:',
                SHOW:{
                    NOME:'Nome obrigatório',
                    EMAIL:'E-mail obrigatório', 
                    TELEFONE:'Telefone obrigatório',
                    MENSAGEM:'Mensagem obrigatório',   
                },
                TELEFONECONTATO:{
                    TEL:'Telefone: (19) 98187-0077',
                    CONT: 'Contato: 0800 941 3950',  
                },
                BTN:{
                    ENVIAR:'Enviar Mensagem',
                }

            },               
        },

            //SECTION4
            SECTION4:{
                TITULOLUGAR:{
                    TITULO:'Não importa o lugar',
                    SUBTITULO:'Aceite pagamentos em todo país nas principais bandeiras de cartão de crédito do mundo: Visa, Mastercard, Amex, Diners e Elo.',
                },
                TITULOFAVOR:{
                    TITULO:'Tecnologia a seu favor',
                    SUBTITULO:' é uma solução para todos os modelos de negócio, possibilitando que você cresça sem se preocupar com pagamento.',
                },
                TITULOUSA:{
                    TITULO:'Usabilidade',
                    SUBTITULO:'Experiência simples, que previne erros e agrega valor. Sabemos que o tempo é importante para você, por isso PAYOUT faz de maneira simples o que deve ser simples.',
                },
                TITULORECE:{
                    TITULO:'Receba sem maquininha',
                    SUBTITULO:'Receba pagamentos pelo celular, sem aluguel ou mensalidade. Para começar a receber basta que você e seu cliente tenham o aplicativo instalado. Experimente agora.',
                }
            },

            //SECTION5
            SECTION5:{
                TITULOCONTATO:{
                    SUBTITULO:'Com',
                    COLORFRASE:'Payout Cripto Exchange',
                    FRASE:'você pode comercializar criptomoedas em nosso aplicativo de forma simples, rápida e totalmente segura.',
                },
                TITULOCONTATODOIS:{
                    SUBTITULO:'SUA OPÇÃO MAIS SEGURA PARA NEGOCIAÇÃO DE ATIVOS DIGITAIS.',
                    FRASE1:'SOMOS UMA EMPRESA DE CONTA DE PAGAMENTOS REGULAMENTADA PELO BACEN.',
                    FRASE2:" CONFIANÇA E CREDIBILIDADE DESDE 2004 EM MEIOS DE PAGAMENTO.",
                    FRASE3:'UMA CONTA DE PAGAMENTOS COMPLETA.'
                },
                TITULOTUDO:{
                    SUBTITULO:'Operações com início em Junho/2020',
                },
                FOOTER:{
                    TITULOFOOT:'UM PRODUTO DDTOTAL',
                    SUBTITULOFOOT: '** REGULAMENTO AQUI **',
                }


            },


             //SECTION6 
             /*
            SECTION6:{
                TITULOCONTATO:{
                    SUBTITULO:'Consultas Médicas, Odontológicas, Exames Laboratoriais.',
                },
                TITULOCONTATODOIS:{
                    SUBTITULO:' Mais do que uma simples carteira digital. Payout oferece serviços exclusivos como: Serviços Médicos, Odontológicos, Outros Profissionais de Saúde, Recarga Celular, Pagamento de Contas, Transferências de Valores e muito mais. ',
                },
                TITULOTUDO:{
                    SUBTITULO:'Tudo que você sempre quis em um só lugar. Na palma da sua mão.',
                },
               
            },*/

        });

/*Para Proteger o site*/
$translateProvider.useSanitizeValueStrategy('escape');
/*preferencia para site começas BRA*/
$translateProvider.preferredLanguage('BRA')
        /*(preferncia provider pelo browser)
        $translateProvider.determinePreferredLanguage();
        */
        $urlRouterProvider.otherwise('home');
    });


//************************ CONTROLER *****************//

app.controller('PageCtrl', function($scope, $state, $translate,$http){
    //
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


    $scope.dados = {};

    // Cadastro Proposta       
    $scope.cadastroUsuario = function(){ 
        var formulario =  new FormData($('#form-cadastro')[0]);

        formulario.append('meioCaptura', 2); 
        formulario.append('cpf',$scope.dados.cpf);
        formulario.append('cep',$scope.dados.cep);
    
        $.ajax({
            //url: 'http://192.168.1.215:8035/ws/storage/upload.php',
            url: 'https://www.payout.com.br/ws/storage/upload.php',
            method: 'post',
            data: formulario,
            cache: false,
            contentType: false,
            processData: false,
            success: function(retorno){
                
            },
        });
        alert('Enviado com sucesso...');
        $("#form-cadastro").trigger('reset');
    }

    //BUSCA CEP
    $scope.buscaCep = function(cep){

      if(cep){
        $.ajax({
            type: 'GET',
            url: 'https://www.iptufacil.com.br/ws/geral/public/cep/'+cep,

            dataType: 'json'

        }).then(function (response) {   

            $scope.filtroCidades(response.estado);
            $scope.dados.uf = response.estado;
            $scope.dados.logradouro = response.logradouro;
            $scope.dados.bairro = response.bairro;

        });              
    }
}



 // Verificando se o navegador tem suporte aos recursos para redimensionamento
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        alert('O navegador não suporta os recursos utilizados pelo aplicativo');
        return;
    }
 
    // Alocando imagens selecionadas
    imagens = $('#dados-image')[0].files;
 
    // Se selecionado pelo menos uma dados-image
    if (imagens.length > 0) 
    {
        // Definindo progresso de carregamento
        $('#progresso').attr('aria-valuenow', 0).css('width', '0%');
 
        // Escondendo campo de dados-image
        $('#dados-image').hide();
 
        // Iniciando redimensionamento
        imagem_atual = 0;
        redimensionar();
    }



    //BUSCA FILTRO CIDADE
    $scope.filtroCidades = function(){

        $scope.comboCidades = null;

        $.ajax({
            type: 'POST',
            url: "https://www.iptufacil.com.br/ws/goey/rest/public/comboCidades",
            data: {uf:uf,auth:'3f018bfb43591ccb2ef46f10de832160'},               
            dataType: 'json'
        }).success(function (response) {

         $scope.comboCidades = response;
         $scope

     })

    }




    //COMBO ESTADO 
    $scope.comboUf = [{sigla:"AC",nome:"Acre"},
    {sigla:"AL",nome:"Alagoas"},
    {sigla:"AP",nome:"Amapá"},
    {sigla:"AM",nome:"Amazonas"},
    {sigla:"BA",nome:"Bahia"},
    {sigla:"CE",nome:"Ceará"},
    {sigla:"DF",nome:"Distrito Federal"},
    {sigla:"ES",nome:"Espírito Santo"},
    {sigla:"GO",nome:"Goiás"},
    {sigla:"MA",nome:"Maranhão"},
    {sigla:"MT",nome:"Mato Grosso"},
    {sigla:"MS",nome:"Mato Grosso do Sul"},
    {sigla:"MG",nome:"Pará"},
    {sigla:"PB",nome:"Paraíba"},
    {sigla:"PR",nome:"Paraná"},
    {sigla:"PE",nome:"Pernambuco"},
    {sigla:"PI",nome:"Piauí"},
    {sigla:"RJ",nome:"Rio de Janeiro"},
    {sigla:"RN",nome:"Rio Grande do Norte"},
    {sigla:"RS",nome:"Rio Grande do Sul"},
    {sigla:"RO",nome:"Rondônia"},
    {sigla:"SC",nome:"Santa Catarina"},
    {sigla:"SP",nome:"São Paulo"},
    {sigla:"SE",nome:"Sergipe"},
    {sigla:"TO",nome:"Tocantins"},
    ]

    //COMBO  FILTRAR CIDADES
    $scope.filtroCidades = function(uf){
        $scope.comboCidades = null;

        if(uf){
          $("#opt-cidade").text("aguarde...");
          $.ajax({
            type: 'POST',
            url: "https://www.payout.com.br/ws/public/comboCidadeSemFiltro",
            data: {uf:uf,auth:'3f018bfb43591ccb2ef46f10de832160'},               
            dataType: 'json'
        }).success(function (response) {
          $("#opt-cidade").text("-- Selecione --");


          $scope.comboCidades = response;

      })
    }

}

/*********** ALTERAR IDIOMAS ALTERAR FORMULARIO ******************/

$scope.filtroCidades();             

    //alterar Bandeiras e button     
    $scope.alterarBandeira = function(n){
        if(n == 1){
            $(".port").hide();
            $(".usa").show();

        }else{
            $(".usa").hide();
            $(".port").show();
            
        }
    }
    $scope.alteraridioma = function(chave){
        $translate.use(chave);
        $scope.chave = chave;

        if(chave == "BRA"){
            $scope.codChave = 1;
        }else if(chave == "USE"){
            $scope.codChave = 2;
        }
        console.log($scope.codChave);
    };
    $scope.enviarPesquisa = function(){
        $state.go('pesquisa',{ termo: $scope.Termo});
    };
    $scope.alteraridioma('BRA');


});

   //******** FUNCAO SCROOLL
   $(document).ready(function(){
    $('a[href^="#"],.scroll').on('click',function (e) {        
        e.preventDefault();
        var target = $(this).attr("href");  
        
        if(target.indexOf('#') >= 0){
            $target = $(target);
            
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            },5000, 'swing', function () {    
                window.location.hash = target;
            }); 

            $('#navbar').removeClass('in');    
        }else{
            window.location.href = target;
        }
    });
}); 

   function ancora(id_ancora){
    var top = $("#"+id_ancora).offset().top-50
    $('html, body').stop().animate({
        'scrollTop': top
    }, 1000, 'swing', function () {   
        window.location.hash = target;
    }); 
} 


