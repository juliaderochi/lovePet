angular.module('app')
    .controller('PagamentoFormController', PagamentoFormController);

PagamentoFormController.$inject = [
    'PagamentoService', 
    'EntradaService',
    '$stateParams', 
    '$state'
];

function PagamentoFormController (PagamentoService, EntradaService, $stateParams, $state){
    var vm = this;
    vm.pagamento = {};
    vm.titulo = 'Novo pagamento';

    vm.entradas = [];

    EntradaService.findAll()
        .then(function (data) {
            vm.entradas = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando pagamento';
        PagamentoService.findOne($stateParams.id)
            .then(function (data) {
                vm.pagamento = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            PagamentoService
                .update($stateParams.id, vm.pagamento)
                .then(function() {
                    $state.go('pagamentoList');
                });
        } else {
            PagamentoService
                .insert(vm.pagamento)
                .then(function() {
                    $state.go('pagamentoList');
                });
        }
    }

    vm.addItem = function() {
        vm.pagamento.itens = vm.pagamento.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.saveItem = function() {
        if (vm.indexSelecionado) {
            vm.pagamento.itens[vm.indexSelecionado] = vm.itemSelecionado;
        } else {
            vm.pagamento.itens.push(vm.itemSelecionado);
        }
        
    }
}