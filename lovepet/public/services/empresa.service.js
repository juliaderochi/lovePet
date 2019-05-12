angular.module('app')
    .service('EmpresaService', EmpresaService);

EmpresaService.$inject = ['$http']

function EmpresaService ($http) {
    var URL = '/empresas';

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

    service.update = function (id, empresa) {
        return $http.put(URL + '/' + id, empresa)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (empresa) {
        return $http.post(URL, empresa)
            .then(function(resp) {
                return resp.data;
            });
    }

}