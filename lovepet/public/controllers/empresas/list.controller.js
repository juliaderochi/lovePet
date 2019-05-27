angular.module('app')
    .controller('EmpresaListController', EmpresaListController);

EmpresaListController.$inject = ['EmpresaService'];

function EmpresaListController(EmpresaService){
    var vm = this;
    vm.empresas = [];

    function _load() {
        EmpresaService.findAll()
            .then(function (dados) {
                vm.empresas = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir esse registro?')) {
            EmpresaService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}