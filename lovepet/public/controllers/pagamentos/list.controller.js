angular.module('app')
    .controller('PagamentoListController', PagamentoListController);

PagamentoListController.$inject = ['PagamentoService'];

function PagamentoListController(PagamentoService){
    var vm = this;
    vm.pagamentos = [];

    function _load() {
        PagamentoService.findAll()
            .then(function (dados) {
                vm.pagamentos = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir esse registro?')) {
            PagamentoService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}