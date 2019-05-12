angular.module('app')
    .controller('EmpresaFormController', EmpresaFormController);

EmpresaFormController.$inject = [
    'EmpresaService', 
    '$stateParams', 
    '$state'
];

function EmpresaFormController (EmpresaService, $stateParams, $state){
    var vm = this;
    vm.empresa = {};
    vm.titulo = 'Novo empresa';

    if ($stateParams.id) {
        vm.titulo = 'Editando empresa';
        EmpresaService.findOne($stateParams.id)
            .then(function (data) {
                vm.empresa = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            EmpresaService
                .update($stateParams.id, vm.empresa)
                .then(function() {
                    $state.go('empresaList');
                });
        } else {
            EmpresaService
                .insert(vm.empresa)
                .then(function() {
                    $state.go('empresaList');
                });
        }
    }
}