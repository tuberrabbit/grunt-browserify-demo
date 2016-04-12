bf.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/state1');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './index.html'
        })
        .state('state1', {
            url: '/state1',
            templateUrl: './pages/state1.html',
        })
        .state('state1.list', {
            url: '/state1/list',
            templateUrl: './pages/state1.list.html',
            controller: 'state1ListController',
            controllerAs: 'vm'
        })
        .state('state2', {
            url: '/state2',
            templateUrl: './pages/state2.html',
        })
        .state('state2.list', {
            url: '/state2/list',
            templateUrl: './pages/state2.list.html',
            controller: 'state2ListController',
            controllerAs: 'vm'
        });
});