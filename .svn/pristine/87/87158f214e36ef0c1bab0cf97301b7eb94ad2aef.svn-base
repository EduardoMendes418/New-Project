

app.factory('distanciaService', function($http,$resource) { //Não se esqueça de fazer a injeção das dependências aqui

    var service = {
        verificaDist:    _verificaDist
    };
    return service;

    function _verificaDist(origin,destination) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
   
   var distancia =  $http.get('https://google.com/maps/api/distancematrix/json?key=AIzaSyCt2xiZqA58OcYwli_YwMFoSYcLoiLlHAY&origins='+ origin +'&destinations='+ destination);
   return distancia.$$state;

    };

});