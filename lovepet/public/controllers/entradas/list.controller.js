angular.module('app')
    .controller('EntradaListController', EntradaListController);

EntradaListController.$inject = ['EntradaService'];

function EntradaListController(EntradaService){
    var vm = this;
    vm.entradas = [];

    function _load() {
        EntradaService.findAll()
            .then(function (dados) {
                vm.entradas = dados;
                var total = 0;
                vm.entradas.forEach(entrada => {
                    entrada.itens.forEach(item => {
                        total = total + item.total;
                    });
                    entrada.total = total;
                    total = 0;
                });
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            EntradaService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}