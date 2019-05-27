angular.module('app')
    .controller('EntradaFormController', EntradaFormController);

EntradaFormController.$inject = [
    'EntradaService', 
    'AnimalService',
    'ServicoService',
    '$stateParams', 
    '$state'
];

function EntradaFormController (EntradaService, AnimalService, ServicoService, $stateParams, $state){
    var vm = this;
    vm.entrada = {};
    vm.titulo = 'Novo entrada';

    vm.animais = [];
    vm.servicos = [];

    AnimalService.findAll()
        .then(function (data) {
            vm.animais = data;
        });
    ServicoService.findAll()
        .then(function (data) {
            vm.servicos = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando entrada';
        EntradaService.findOne($stateParams.id)
            .then(function (data) {
                vm.entrada = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            EntradaService
                .update($stateParams.id, vm.entrada)
                .then(function() {
                    $state.go('entradaList');
                });
        } else {
            EntradaService
                .insert(vm.entrada)
                .then(function() {
                    $state.go('entradaList');
                });
        }
    }

    vm.addItem = function() {
        vm.entrada.itens = vm.entrada.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.editarItem = function(selecionado) {
        // vm.entrada.itens = vm.entrada.itens || [];
        vm.indexSelecionado = {selecionado}
        angular.copy(selecionado, vm.itemSelecionado);
    }

    vm.excluirItem = function() {
        vm.entrada.itens = vm.entrada.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.saveItem = function() {
        if (vm.indexSelecionado) {
            vm.entrada.itens[vm.indexSelecionado] = vm.itemSelecionado;
        } else {
            vm.entrada.itens.push(vm.itemSelecionado);
        }
        
    }
}