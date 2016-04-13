bf.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: './controllers/home.html'
        })
        .state('not found', {
            url: '/404',
            templateUrl: './controllers/404.html'
        })
        .state('reader', {
            url: '/reader',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('reader.create', {
            url: '/create',
            templateUrl: './controllers/reader/create.html',
            controller: 'readerCreateController',
            controllerAs: 'vm'
        });
});