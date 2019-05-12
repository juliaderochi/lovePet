angular.module('app')
    .service('PagamentoService', PagamentoService);

PagamentoService.$inject = ['$http']

function PagamentoService ($http) {
    var URL = '/pagamentos';

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

    service.update = function (id, pagamento) {
        return $http.put(URL + '/' + id, pagamento)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (pagamento) {
        return $http.post(URL, pagamento)
            .then(function(resp) {
                return resp.data;
            });
    }

}