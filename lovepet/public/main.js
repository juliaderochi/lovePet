angular.module('app', [
    'ui.router'
]);

angular.module('app').config(ConfigMain);

ConfigMain.$inject = ['$stateProvider'];

function ConfigMain ($stateProvider) {
    $stateProvider
        .state({
            name: 'empresaList',
            url: '/empresas',
            templateUrl: '/partials/empresas/list.html',
            controller: 'EmpresaListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'empresaNovo',
            url: '/empresas/novo',
            templateUrl: '/partials/empresas/form.html',
            controller: 'EmpresaFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'empresaEditar',
            url: '/empresas/:id',
            templateUrl: '/partials/empresas/form.html',
            controller: 'EmpresaFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteList',
            url: '/clientes',
            templateUrl: '/partials/clientes/list.html',
            controller: 'ClienteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteNovo',
            url: '/clientes/novo',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteEditar',
            url: '/clientes/:id',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'animalList',
            url: '/animais',
            templateUrl: '/partials/animais/list.html',
            controller: 'AnimalListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'animalNovo',
            url: '/animais/novo',
            templateUrl: '/partials/animais/form.html',
            controller: 'AnimalFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'animalEditar',
            url: '/animais/:id',
            templateUrl: '/partials/animais/form.html',
            controller: 'AnimalFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoList',
            url: '/servicos',
            templateUrl: '/partials/servicos/list.html',
            controller: 'ServicoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoNovo',
            url: '/servicos/novo',
            templateUrl: '/partials/servicos/form.html',
            controller: 'ServicoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'servicoEditar',
            url: '/servicos/:id',
            templateUrl: '/partials/servicos/form.html',
            controller: 'ServicoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'entradaList',
            url: '/entradas',
            templateUrl: '/partials/entradas/list.html',
            controller: 'EntradaListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'entradaNovo',
            url: '/entradas/novo',
            templateUrl: '/partials/entradas/form.html',
            controller: 'EntradaFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'entradaEditar',
            url: '/entradas/:id',
            templateUrl: '/partials/entradas/form.html',
            controller: 'EntradaFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'pagamentoList',
            url: '/pagamentos',
            templateUrl: '/partials/pagamentos/list.html',
            controller: 'PagamentoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'pagamentoNovo',
            url: '/pagamentos/novo',
            templateUrl: '/partials/pagamentos/form.html',
            controller: 'PagamentoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'pagamentoEditar',
            url: '/pagamentos/:id',
            templateUrl: '/partials/pagamentos/form.html',
            controller: 'PagamentoFormController',
            controllerAs: 'vm'
        });
}
