angular.module('app')
    .controller('AnimalListController', AnimalListController);

AnimalListController.$inject = ['AnimalService'];

function AnimalListController(AnimalService){
    var vm = this;
    vm.animais = [];

    function _load() {
        AnimalService.findAll()
            .then(function (dados) {
                vm.animais = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir esse registro?')) {
            AnimalService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}