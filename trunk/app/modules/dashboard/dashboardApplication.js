var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial']);

dashboard.config(["$stateProvider", function ($stateProvider) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/',
        templateUrl: 'app/modules/dashboard/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    //skills page state
    $stateProvider.state('app.agendar', {
        url: '/agendar',
        templateUrl: 'app/modules/dashboard/views/agendar.html',
        controller: 'agendarCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Agendar'
        }
    });

    //education page state
    $stateProvider.state('app.minhasEntregas', {
        url: '/minhas-entregas',
        templateUrl: 'app/modules/dashboard/views/minhas-entregas.html',
        controller: 'minhasEntregasCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Minhas Entregas'
        }
    });

    

    //Recent Projects page state
    $stateProvider.state('app.meus-dados', {
        url: '/meus-dados',
        templateUrl: 'app/modules/dashboard/views/meus-dados.html',
        controller: 'meusDadosCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Meus Dados'
        }
    });

    //Experience page state
    $stateProvider.state('app.boletos', {
        url: '/boletos',
        templateUrl: 'app/modules/dashboard/views/boletos.html',
        controller: 'boletosCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Meus Boletos'
        }
    });

    // Portfolio page state
    $stateProvider.state('app.historico', {
        url: '/historico',
        templateUrl: 'app/modules/dashboard/views/historico.html',
        controller: 'historicoCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Histórico'
        }
    });    

    // //Relatórios
    // $stateProvider.state('app.relatorios', {
    //     url: '/relatorios',
    //     templateUrl: 'app/modules/dashboard/views/relatorios.html',
    //     controller: 'relatoriosCtrl',
    //     controllerAs: 'vm',
    //     data: {
    //         pageTitle: 'Relatorios'
    //     }
    // });

    // Mapas
    $stateProvider.state('app.maps', {
        url: '/maps',
        templateUrl: 'app/modules/dashboard/views/maps.html',
        controller: 'mapsCtrl',
        controllerAs: 'vm',
        data: {
                pageTitle: 'Maps'
        }
    });



  /************************************* Rotas estabelecimento ********************************/

// Página de pagamento Restaurante
  $stateProvider.state('app.pagamento', {
        url: '/pagamento',
        templateUrl: 'app/modules/dashboard/views/pagamento.html',
        controller: 'pagamentoCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Pagamento'
        }
    });

  //Minhas Entregas estabelecimento 
  $stateProvider.state('app.minhasEntregas2', {
        url: '/minhas-entregas2',
        templateUrl: 'app/modules/dashboard/views/minhas-entregas2.html',
        controller: 'minhasEntregas2Ctrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Minhas Entregas'
        }
    });

// Agendar entrega pelo estabelecimento
 $stateProvider.state('app.agendarEstabelecimento', {
        url: '/agendar-estabelecimento',
        templateUrl: 'app/modules/dashboard/views/agendar-estabelecimento.html',
        controller: 'agendarEstabelecimentoCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Agendar'
        }
    });

 //Cadastro produtos
    $stateProvider.state('app.cadastro-produtos', {
         url: '/cadastro-produtos',
        templateUrl: 'app/modules/dashboard/views/cadastroProdutos.html',
         controller: 'cadastroProdutosCtrl',
         controllerAs: 'vm',
         data: {
           pageTitle: 'Cadastro de Produtos'
         }
     });


// Meus dados 
     $stateProvider.state('app.meus-dados2', {
         url: '/meus-dados2',
        templateUrl: 'app/modules/dashboard/views/meus-dados2.html',
         controller: 'meusDados2Ctrl',
         controllerAs: 'vm',
         data: {
           pageTitle: 'Meus Dados'
         }
     });
     

    //Atualizar produtos
    $stateProvider.state('app.atualizar-produtos', {
         url: '/atualizar-produtos',
        templateUrl: 'app/modules/dashboard/views/editarProdutos.html',
         controller: 'atualizarProdutosCtrl',
         controllerAs: 'vm',
         data: {
           pageTitle: 'Atualizar de Produtos'
         }
     });

    //Lista de produtos
    $stateProvider.state('app.produtos', {
         url: '/produtos',
        templateUrl: 'app/modules/dashboard/views/listaProdutos.html',
         controller: 'listaProdutosCtrl',
         controllerAs: 'vm',
         data: {
           pageTitle: 'Lista de Produtos'
         }
     });

    

    // Bordero
     $stateProvider.state('app.bordero', {
         url: '/bordero',
        templateUrl: 'app/modules/dashboard/views/bordero.html',
         controller: 'borderoCtrl',
         controllerAs: 'vm',
         data: {
           pageTitle: 'Bordero'
         }
     });

      //Cadastro produtos
    $stateProvider.state('app.cadastro-categorias', {
         url: '/cadastro-categorias',
         templateUrl: 'app/modules/dashboard/views/cadastroCategorias.html',
         controller: 'cadastroCategoriasCtrl',
         controllerAs: 'vm',
         data: {
                pageTitle: 'Cadastro de Categorias'
                }
     });

      //Lista de clientes
    $stateProvider.state('app.clientes', {
         url: '/lista-clientes',
         templateUrl: 'app/modules/dashboard/views/listaClientes.html',
         controller: 'listaClientesCtrl',
         controllerAs: 'vm',
         data: {
                pageTitle: 'Lista de Clientes'
                }
     });
 

}]);

