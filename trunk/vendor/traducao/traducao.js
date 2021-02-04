var app = angular.module('urbanApp');
app.config( function ($stateProvider,$urlRouterProvider,$translateProvider){

//************************************************ Tradução USA ************************************  
$translateProvider.translations('USE', {

    menu:{
      payoutmenu:{
       conta:'OPEN ACCOUNT',
       app:'DOWNLOAD APP',
       contato:'CONTACT',
       servico:'SERVICE PROVIDER',
       acessesuaconta:'ACCESS YOUR ACCOUNT',     
   },

   section1:{
    titulo:'Much more than an App, Payout is a lifestyle.',
    subTextoSublime:'Everything you need in the palm of your hand.',
    texto:'A complete application where you can carry out your main transactions without a bank account: TED, bill payments, top-ups and more. You can also buy cryptocurrencies with your payment account balance.',
    complicacao:'Hassle free',      
    parteFinanTitulo:'Financial services',
    subtexto:'ACCOUNTS PAYMENTS, TRANSFERS, REFILLS,',
    subtextobancarios:'BANK SLIPS',
    parteCripto:'Cryptocurrencies',
    parteCriptotexto0:'BUY ',
    parteCriptotexto1:'SELL',
    parteCriptotexto2:'SMART WALLET',
    medico:'Medical services',
    odonto:'Dental ',
    consultaMedica:'MEDICAL AND DENTAL CONSULTATIONS.',
    consultaboleto:'PAY PARCELED IN BOLETO',
    mes:'IN AUGUST',    
},

idiomas:{
    selecione:'Select your Language',        
},

baixe:{
    app:'Download the App now,',
    conta:'open your Payout account free of charge.',
}, 

financieros:{
    tituloFinancias:'Financial services', 
    contaPag:'QUICK OPENING OF PAYMENT ACCOUNT',    
    serasa:'WE DO NOT CONSULT SERASA',    
    app:'EVERYTHING IN THE APP',   
    transferencia:'Pay your bills, make transfers, recharge your cell phone, pay bank slips and consumer bills. Everything you need in one place, in the palm of your hand.', 
},

cript:{
    titulo:'Cryptocurrencies',
    venda:'SAFE PURCHASE AND SALE PLATFORM ',
    bacen:' CREDIBILITY. A PAYMENT ARRANGEMENT IN TERMS OF THE BACEN CIRCULARS',
    inteligente:' SMART CRYPTOMOED WALLET',
    subtexto:'A platform with its own development, simple and direct. Buy with just 3 clicks, no bank account required, purchases made with your Payout balance.',
},

servico:{
    medic:'Medical',
    odonto:'Dental Services',
    profissionais:'THE BEST PROFESSIONALS',
    diferenciados:' DIFFERENTIATED PRICES FOR PAYOUT USERS ',
    procedimento:'CONSULTATIONS, EXAMS AND PROCEDURES',
    proce:'DENTAL PROCEDURES',
    subtexto:'All this and you can still pay in installments in the bank slip, approval on the spot and online. An option for you who do not have health insurance.',
},      

section4:{
    simples:'Simple.',
    digital:'Everything you need in one place when it comes to digital.',
    usabilidade:'Usability',
    subexpe:'Unique, simple and fast experience. PAYOUT, because we know that time is important to you. You can take care of finances without leaving your home.',
    segura: 'A secure company A secure company',
    subsegura:'Smart solutions for dynamic markets. Payout is a product of DDTOTAL, a Payment Institution under the terms of Circular No. 3,682 / 13 and Circular No. 3,885 / 18 of the Central Bank of Brazil.',
    tituloTempo:'You with much more time to ',
    tituloImportante:'take care of what really matters. ',    
    subGente: ' Build an App with us to simplify your life. Easy-to-use products, without abusive fees and with a service focused on you. We want to eliminate bureaucracy and complexity to simplify your day to day. We want to go further: build a product that makes a difference. For that, we count on you.',
},

footer:{
    suporte:'SUPPORT',
    contato:'Contact',
    frequente:'Common questions',
    confiavel:'Trustworthy',
    seguro:'safe',
    uso:'Terms of use',
    atendimento:'Service: Monday to Friday from ',
    horarios:'+55 (19) 3512-9093',
    whats:'+55 (19) 98377-1700',
},

contato:{
    nome:'Name',
    email:'E-mail',
    telefone:'Telephone',
    mensagem:'Message',
    enviar:'Submit',
}, 

},

/******************************************* PAGINA CADASTRO USE *****************************************/ 
cadastro:{

    PayoutQueroConta:{
        titulo:'You are one step away from your Payout Account simple, quick and easy.',
        subtitulo:'Without complexity, we are constantly working to make everything as simple as possible, but if you still have questions, service channels are at your disposal for further clarification, just contact us.',
        Titulofoto:'Fill in the data and send your photo according to the image:',
        textoSubFotoUm:'A photo holding your ID document in hand and a sheet written “I want to open a Payout Account” with the date and signature.',
        textoSubFotodois:'Pay attention to the quality of the image sent, if you need it, ask for help from someone you know.',
        textoSubFototres:'Only your RG or CNH will be considered as valid documents.',
    },

    formulario:{
        titulocadastro:'Register',
        NomeCompleto:'Name',
        cpf:'ID:',
        rg:'RG:',
        email:'E-mail: ',
        dataNascimento:'Date:',
        celular:'Cell phone:',
        cep:'Zip code:',
        logradouro:'Public Place',
        numero:'Number',
        complemento:'Complement',
        estados:'States',
        bairro:'Neighborhood',
        uf:'-- Select --',
        cidade:'City',
       // anexar:'Attach',
        enviar:'Submit',
    },

    payoutmenu:{
       sair:'GO OUT',       
   },   


}, 

/******************************************* MODAL CRIPTO,SERVICOS, FINACEIROS USE ***************************************
modal:{
    financeiros:{
        titulo:'Lorem',
        subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
    },
    critomoe:{
       titulo:'Lorem',
       subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
   },
   servicos:{
    titulo:'Lorem',
    subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
},

}, ****/


});


//************************************************** Tradução BR ************************************
$translateProvider.translations('BRA',{

    menu:{
       /******PAYOUTMENU******/   
       payoutmenu:{
           conta:'ABRIR CONTA',
           app:'DOWNLOAD APP',
           contato:'CONTATO',
           servico:'PRESTADOR DE SERVIÇOS',
           acessesuaconta:'ACESSE SUA CONTA',     
       },       

       /******SECTION1******/
       section1:{
        titulo:'Muito mais do que um App, Payout é um estilo de vida.',
        subTextoSublime:'Tudo que você precisa na palma da sua mão.',
        texto:'Um aplicativo completo onde você pode efetuar suas principais transações sem conta bancária: TED, pagamentos de contas, recargas e muito mais. Você também pode comprar Criptomoedas com saldo da sua Payout conta.',
        complicacao:'Sem complicações',         
        parteFinanTitulo:'Serviços Financeiros',
        subtexto:'PAGAMENTOS DE CONTAS, TRANSFERÊNCIAS, RECARGAS,',
        subtextobancarios:'BOLETOS BANCÁRIOS',
        parteCripto:'Criptomoedas',
        parteCriptotexto0:'COMPRA',
        parteCriptotexto1:'VENDA',
        parteCriptotexto2:'CARTEIRA INTELIGENTE ',
        medico:'Serviços Médicos ',
        odonto:'Odontológicos ',
        consultaMedica:'CONSULTAS MÉDICAS E ODONTOLÓGICAS.',
        consultaboleto:'PAGUE PARCELADO NO BOLETO ',
        mes:'EM AGOSTO',
    },  

    /******IDIOMAS******/        
    idiomas:{
        selecione:'Selecione o seu idioma',        
    },    

    /******BANNER OCULOS******/                 
    baixe:{
        app:'Baixe agora mesmo o App,',
        conta:'abra sua conta Payout sem custo.',
    },   

    /******SECTION3******/           
    financieros:{
        tituloFinancias:'Serviços Financeiros', 
        contaPag:'RÁPIDA ABERTURA DE CONTA DE PAGAMENTOS',    
        serasa:'NÃO CONSULTAMOS SERASA',    
        app:'TUDO NO APP ',    
        transferencia:'Pague suas contas, faça transferências, recarregue seu celular, pague boletos bancários e contas de consumo. Tudo que você precisa em um único lugar, na palma da sua mão.',
    },

    /******cript******/    
    cript:{
        titulo:'Criptomoedas',
        venda:'PLATAFORMA SEGURA DE COMPRA E VENDA',
        bacen:'CREDIBILIDADE. UM ARRANJO DE PAGAMENTO NOS TERMOS DAS CIRCULARES BACEN',
        inteligente:'CARTEIRA INTELIGENTE DE CRIPTOMOEDAS ',
        subtexto:' Uma plataforma com desenvolvimento próprio, simples e direto. Compre com apenas 3 cliques, sem necessidade de conta bancária, compras feitas com seu saldo Payout. ',
    },

    /******servico******/    
    servico:{
        medic:'Serviços Médicos',
        odonto:'Odontológicos',
        profissionais:'OS MELHORES PROFISSIONAIS ',
        diferenciados:'PREÇOS DIFERENCIADOS PARA USUÁRIOS PAYOUT',
        procedimento:'CONSULTAS, EXAMES E PROCEDIMENTOS',
        proce:'PROCEDIMENTOS ODONTOLÓGICO',
        subtexto:'Tudo isso e você ainda pode pagar parcelado no boleto bancário, aprovação no ato e online. Uma opção para você que não tem plano de saúde.',
    },    

    /******section4******/         
    section4:{
        simples:'Simples.',
        digital:'Tudo que você precisa em um só lugar quando o assunto é digital.',
        usabilidade:' Usabilidade ',
        subexpe:'Experiência única, simples e rápida. PAYOUT, porque sabemos que o tempo é importante para você. Dá para cuidar das finanças sem precisar sair de casa. ',
        segura: ' Uma empresa segura',
        subsegura:' Soluções inteligentes para mercados dinâmicos. Payout é um produto da DDTOTAL, uma Instituição de Pagamentos nos termos da circular Nº 3.682/13 e da circular Nº 3.885/18 do Banco Central do Brasil.',
        tituloTempo:' Você com muito mais tempo para ',
        tituloImportante:' cuidar daquilo que realmente importa. ',
        subGente:'Vem construir com a gente um App para simplificar sua vida. Produtos fáceis de usar, sem taxas abusivas e com um atendimento focado em você. Nós queremos eliminar a burocracia e a complexidade para simplificar o seu dia a dia. A gente quer ir além: construir um produto que faça a diferença. Para isso, contamos com você. ',
    },

    /******Footer******/        
    footer:{
        suporte:'SUPORTE',
        contato:'Contato ',
        frequente:'Perguntas Frequentes ',
        confiavel:'Confiável',
        seguro:'Seguro',
        uso:'Termos de Uso',
        atendimento:' Atendimento: Segunda á Sexta das 8h às 18h',
        horarios:' +55 (19) 3512-9093',
        whats:' +55 (19) 98377-1700',
    },

    /*******Contato*****/     
    contato:{
        nome:'Nome:',
        email:'Email:',
        telefone:'Telefone:',
        mensagem:'Mensagem:',
        enviar:'Enviar',
    },

    /*******CADASTRAR CONTATO*****/      
    contatoCadastrar:{
     nomeCompleto:'Nome Completo:',   
     cpf:'CPF:',
     rg:'RG:',
     email:'Email',
     nascimento:'Data de Nascimento:',
     celular:'Celular:',

 },   

},

/******************************************* PAGINA CADASTRO BR *****************************************/ 
cadastro:{

    PayoutQueroConta:{
        titulo:'Você está a um passo da sua Conta Payout simples, rápido e fácil.',
        subtitulo:'Sem complexidade estamos trabalhando constantemente para deixar tudo o mais simples possível, mas caso ainda tenha dúvidas, canais de atendimento estão à sua disposição para maiores esclarecimentos, basta entrar em contato com a gente.',
        Titulofoto:'Preencha os dados e envia sua foto conforme imagem:',
        textoSubFotoUm:'Uma foto segurando seu Documento de Identificação aberto em mãos e uma folha escrito “Eu quero abrir uma Conta Payout” com a data e assinatura.',
        textoSubFotodois:'Atenção a qualidade da imagem enviada, se precisar peça ajuda para algum conhecido.',
        textoSubFototres:'Apenas seu RG ou CNH serão considerados como documentos válidos.',
    },

    /*******Formulario*****/   
    formulario:{
        titulocadastro:'Cadastro',
        NomeCompleto:'Nome Completo:',
        cpf:'CPF:',
        rg:'RG',
        email:'E-mail ',
        dataNascimento:'Data de Nascimento:',
        celular:'Celular:',
        cep:'Cep:',
        logradouro:'Logradouro:',
        numero:'Número:',
        complemento:'Complemento:',
        estados:'Estados:',
        bairro:'Bairros:',
        uf:'-- Selecione -- ',
        cidade:'Cidade: ',
        //anexar:'Anexar',
        enviar:'Enviar',

    },

    payoutmenu:{
        sair:'SAIR',       
    },

}, 



/******************************************* MODAL CRIPTO,SERVICOS, FINACEIROS BR *******************************
modal:{
    financeiros:{
        titulo:'Serviços Financeiros',
        subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
    },
    critomoe:{
       titulo:'Criptomoedas',
       subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
   },
   servicos:{
    titulo:'Serviços Médicos ',
    subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
},

}, **********/ 

});


//************************************************** Tradução ESP ************************************
$translateProvider.translations('ESP',{

    menu:{
     /******PAYOTMENU******/   
     payoutmenu:{
       conta:'CUENTA ABIERTA',
       app:'DESCARGAR APLICACIÓN',
       contato:'CONTACTO',
       servico:'PRESTADOR DE SERVICIOS',
       acessesuaconta:'ACCEDER A TU CUENTA',     
   },       

   /******SECTION1******/
   section1:{
    titulo:'Mucho más que una aplicación, Payout es un estilo de vida.',
    subTextoSublime:'Todo lo que necesitas en la palma de tu mano.',
    texto:'Una aplicación completa donde puede realizar sus transacciones principales sin una cuenta bancaria: TED, pagos de facturas, recargas y más. También puede comprar criptomonedas con el saldo de su cuenta de Payout.',
    complicacao:'Sin complicaciones',   
    parteFinanTitulo:'Servicios financieros',
    subtexto:'CUENTAS PAGOS, TRANSFERENCIAS, REPUESTOS,',
    subtextobancarios:'BOLETOS BANCARIOS',
    parteCripto:'Criptomonedas',
    parteCriptotexto0:'COMPRA',
    parteCriptotexto1:'VENTA',
    parteCriptotexto2:'BILLETERA INTELIGENTE' ,
    medico:' Servicios médicos',
    odonto:'Dental ',
    consultaMedica:'CONSULTAS MEDICAS Y DENTALES.',
    consultaboleto:' PAGO PARCELADO EN BOLETO',
    mes:'EN AGOSTO',
}, 


/******IDIOMAS******/        
idiomas:{
    selecione:'Seleccione tu idioma',        
},    

/******BANNER OCULOS******/                 
baixe:{
    app:'Descargue la aplicación ahora,',
    conta:'abra su cuenta de pago de forma gratuita.',
},   

/******SECTION3******/           
financieros:{
    tituloFinancias:'Servicios financieros', 
    contaPag:'APERTURA RÁPIDA DE LA CUENTA DE PAGO',    
    serasa:'NO CONSULTAMOS A SERASA',    
    app:'TODO EN LA APLICACIÓN', 
    transferencia:'Pague sus facturas, realice transferencias, recargue su teléfono celular, pague recibos bancarios y facturas de consumo. Todo lo que necesitas en un solo lugar, en la palma de tu mano.',   
},  

/******cript******/               
cript:{
    titulo:'Criptomonedas',
    venda:'PLATAFORMA DE COMPRA Y VENTA SEGURA ',
    bacen:' CREDIBILIDAD. UN ARREGLO DE PAGO EN TÉRMINOS DE LOS CIRCULARES DE BACEN',
    inteligente:' BILLETERA INTELIGENTE CRIPTOMOED ',
    subtexto:' Una plataforma con desarrollo propio, simple y directo. Compre con solo 3 clics, no requiere cuenta bancaria, compras realizadas con su saldo de pago.',
},

/******servico******/    
servico:{
    medic:'Servicios médicos ',
    odonto:'Dentales',
    profissionais:'LOS MEJORES PROFESIONALES',
    diferenciados:'PRECIOS DIFERENCIADOS PARA USUARIOS DE PAGO',
    procedimento:'CONSULTAS, EXÁMENES Y PROCEDIMIENTOS',
    proce:'PROCEDIMIENTOS DENTALES',
    subtexto:'Todo esto y aún puede pagar en cuotas en el recibo bancario, aprobación en el acto y en línea. Una opción para usted que no tiene seguro de salud.',
},  

/******section4******/          
section4:{
    simples:'Sencillo.',
    digital:'Todo lo que necesita en un solo lugar cuando se trata de digital.',
    usabilidade:'Usabilidad',
    subexpe:'Experiencia única, simple y rápida. PAGO, porque sabemos que el tiempo es importante para ti. Puede encargarse de las finanzas sin salir de su hogar.',
    segura: 'Una empresa segura',
    subsegura:'Soluciones inteligentes para mercados dinámicos. El pago es un producto de DDTOTAL, una institución de pago bajo los términos de la Circular No. 3,682 / 13 y la Circular No. 3,885 / 18 del Banco Central de Brasil.',
    tituloTempo:'Tú con mucho más tiempo para',
    tituloImportante:' cuida lo que realmente importa.',
    subGente:'Crea una aplicación con nosotros para simplificar tu vida. Productos fáciles de usar, sin tarifas abusivas y con un servicio enfocado en usted. Queremos eliminar la burocracia y la complejidad para simplificar su día a día. Queremos ir más allá: crear un producto que marque la diferencia. Para eso, contamos con usted.',
},

/******Footer******/        
footer:{
    suporte:'SOPORTE',
    contato:'Contacto',
    frequente:'Preguntas frecuentes',
    confiavel:'Confiable',
    seguro:'seguro',
    uso:'Terminos de uso',
    atendimento:'Servicio: lunes a viernes de 8h às 18h',
    horarios:'+55 (19) 3512-9093',
    whats:'+55 (19) 98377-1700',
},

/*******Contato*****/     
contato:{
    nome:'Nombre',
    email:'Email',
    telefone:'Teléfono',
    mensagem:'Mensaje',
    enviar:'Enviar',
},  

},

/******************************************* PAGINA CADASTRO  ESP *****************************************/ 
cadastro:{
    PayoutQueroConta:{
        titulo:'Estás a un paso de tu cuenta de pagos simple, rápida y fácil.',
        subtitulo:'Sin complejidad, trabajamos constantemente para que todo sea lo más simple posible, pero si aún tiene preguntas, los canales de servicio están a su disposición para obtener más aclaraciones, contáctenos.',
        Titulofoto:'Complete los datos y envíe su foto de acuerdo con la imagen:',
        textoSubFotoUm:'Una foto con su documento de identificación en la mano y una hoja escrita "Quiero abrir una cuenta de pago" con la fecha y la firma.',
        textoSubFotodois:'Presta atención a la calidad de la imagen enviada, si la necesitas, pide ayuda a alguien que conozcas.',
        textoSubFototres:'Solo su RG o CNH se considerarán documentos válidos.',
    },

    formulario:{
        titulocadastro:'Registrarse',
        NomeCompleto:'Nombre Completo:',
        cpf:'ID:',
        rg:'RG:',
        email:'E-mail:',
        dataNascimento:'Fecha:',
        celular:'Teléfono móvil:',
        cep:' Código postal:',
        logradouro:'Lugar público:',
        numero:'Número:',
        complemento:' Complemento:',
        estados:'Estados:',
        bairro:'Barrio:',
        uf:'-- Seleccione -- ',
        cidade:'Ciudad:',
        //anexar:'Adjuntar:',
        enviar:'Enviar:',

    },

    payoutmenu:{
       sair:'FUERA',       
   },

}, 

/******************************************* MODAL CRIPTO,SERVICOS, FINACEIROS  ESP *******************************
modal:{
    financeiros:{
        titulo:'Lorem',
        subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
    },
    critomoe:{
       titulo:'Lorem',
       subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
   },
   servicos:{
    titulo:'Lorem',
    subtexto:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
},

}, **********/ 

});


/*Para Proteger o site*/
$translateProvider.useSanitizeValueStrategy('escape');
/*preferencia para site começas BRA*/
$translateProvider.preferredLanguage('BRA');
            /*(preferncia provider pelo browser)
                $translateProvider.determinePreferredLanguage();
                */
                $urlRouterProvider.otherwise('home');
                
            });


//************************ PAGE-CONTROLER*****************//




app.controller('PageCtrl', function($scope, $state, $translate, $http){
    //
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.dados = {};


    /*************************** Pre Cadastro Laboratorio *************/ 
    $scope.preCadastroLaboratorio = function(){ 

        var formulario =  new FormData($('#CadastroLaboratorio')[0]);

        formulario.append('documento',$scope.dados.documento);
        formulario.append('cep',$scope.dados.cep);

        $.ajax({
         url: 'https://www.payout.com.br/public/preCadastroLaboratorio',
         method: 'post',
         data: formulario,
         cache: false,
         contentType: false,
         processData: false,
         success: function(retorno){

         },
     });
        alert(' Enviado com sucesso ...');
        $("#form-cadastro").trigger('reset');

    };


     //*******************  PRÉ CADASTRO SERVICOS 
     $scope.preCadastroMedicos = function(){ 

        var formulario =  new FormData($('#CadastroMedico')[0]);

        formulario.append('documento',$scope.dados.documento);
        formulario.append('cep',$scope.dados.cep);

        $.ajax({//http://192.168.1.215:8025/
         url: 'https://www.payout.com.br/public/cadastroPrestador',
         method: 'post',
         data: formulario,
         cache: false,
         contentType: false,
         processData: false,
         success: function(retorno){

         },
     });
        alert(' Enviado com sucesso ...');
        $("#form-cadastro").trigger('reset');

    };


    //*******************  Cadastro Proposta       
    $scope.cadastroUsuario = function(){ 

        var formulario =  new FormData($('#form-cadastro')[0]);

        formulario.append('meioCaptura', 2); 
        formulario.append('cpf',$scope.dados.cpf);
        formulario.append('cep',$scope.dados.cep);

        $.ajax({
            //url: 'http://192.168.1.215:4200/ws/storage/upload.php',
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
    };


    //***************** Enviar Email
    $scope.enviarEmail = function(){

        $("#btn-enviar").hide();
        $("#txt-msn").html("enviando..");

            //var destinatario = 'eduardomendes418@gmail.com';
            var destinatario = 'atendimento.empresa@ddtotal.com.br';
            var copia = 'marcus.cominatto@ddtotal.com.br';
            //var copia = 'carlos.ghanem@ddtotal.com.br';

            var assunto = 'Contato -  Conta Payout';
            var nome = $scope.demail.nome || '';
            var email = $scope.demail.email || '';
            var tel = $scope.demail.tel || '';
            
            var desc = $scope.demail.desc || '';

            var descricao = 
            "destinatario: "+destinatario+"<br/>"+
            "copia: "+copia+"<br/>"+
            "assunto: "+assunto+"<br/>"+
            "Nome: "+nome+"<br/>"+
            "Email: "+email+"<br/>"+                       
            "Telefone: "+tel+"<br/>"+
            '<br/>'+desc;


            var url = "https://www.iptufacil.com.br/ws/geral/public/enviarEmail";
            

            $http.post(url, $.param({
                destinatario: destinatario,
                copia: copia,
                assunto: assunto,
                descricao: descricao,
                nome:nome,
                email:email,
                tel:tel,
                
            })).then(function(response){

                $("#btn-enviar").show();
                $("#txt-msn").html('');

                if(response.data.retorno == 1){
                    alert(response.data.mensagem);
                    $scope.demail = '';

                }else{
                    alert(response.data.mensagem);

                };

            });
        };



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
            $scope.dados.cidade = response.cidade;
        });              
    };
};




 // Verificando se o navegador tem suporte aos recursos para redimensionamento
 if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    alert('O navegador não suporta os recursos utilizados pelo aplicativo');
    return;
};
    // Alocando imagens selecionadas
    // imagens = $('#dados-image')[0].files;
    imagens = '';
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
    };



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
        });
    };

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
      });
    };
};

$scope.filtroCidades();  



/***************************  LISTA DE PRESTADORES *************/ 
$scope.filtroPrestador = function(dados){   
    $scope.comboPrestador = null;
    $http({
        method:'GET',
        url: 'https://www.payout.com.br/public/combofiltroPrestador',
        data: $.param($scope.dados),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (response) {
      $scope.comboPrestador = response;
  });  

};


$scope.loadSigla = function(value){
    var found = value.find(element => element.codigo == $scope.tipoPrestador);
    $scope.tipoSiglas = found.sigla;
};

$scope.filtroPrestador();


/*********** ALTERAR IDIOMAS ALTERAR FORMULARIO ******************/    
$scope.alterarBandeira = function(n){
 if(n == 1){
    $(".port").show();
    $(".usa").show();
    $(".esp").show();
        };/*else{
            $(".usa").hide();
            $(".port").show();
            
        }*/
    };

    $scope.alteraridioma = function(chave){
        $translate.use(chave);
        $scope.chave = chave;

        if(chave == "BRA"){
            $scope.codChave = 1;
        }else if(chave == "USE"){
            $scope.codChave = 2;
        }else if(chave == "ESP"){
            $scope.codChave = 3;
        };
    };

    $scope.enviarPesquisa = function(){
        $state.go('pesquisa',{ termo: $scope.Termo});
    };
    $scope.alteraridioma('BRA');

});

/* FUNCAO ANCORA */
function ancora(id_ancora){
    var target = $(this).attr("href");  
    var top = $("#"+id_ancora).offset().top-50
    $('html, body').stop().animate({
        'scrollTop': top
    }, 1000, 'swing', function () {   
        window.location.hash = target;
    }); 
};

function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) return true;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return false;
    }
}

function SomenteLetra(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) return false;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return true;
    }
}

/* Function Imagem */
$(function(){
    $('#dados-image').on('change',function(){
        var arquivo  = $(this).get(0).files.length;
        if ( arquivo  > 1 ) {
            $('#texto').val( arquivo +' arquivos selecionados' );
        } else {
            $('#texto').val( $(this).val() );
        }
    });
});
