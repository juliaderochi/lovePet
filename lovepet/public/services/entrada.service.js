angular.module('app')
    .service('EntradaService', EntradaService);

EntradaService.$inject = ['$http']

function EntradaService ($http) {
    var URL = '/entradas';

    var service = this;

    service.findAll = function () {
        return $http.get(URL)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.findOne = function (id) {
        return $http.get(URL + '/' + id)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.update = function (id, entrada) {
        return $http.put(URL + '/' + id, entrada)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (entrada) {
        return $http.post(URL, entrada)
            .then(function(resp) {
                return resp.data;
            });
    }

}