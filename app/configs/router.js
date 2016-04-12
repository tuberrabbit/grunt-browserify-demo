bf.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: './pages/home.html'
        })
        .state('not found', {
            url: '/404',
            templateUrl: './pages/404.html'
        })
        .state('reader', {
            url: '/reader',
            templateUrl: './pages/reader.html'
        })
        .state('reader.create', {
            url: '/create',
            templateUrl: './pages/reader-create.html',
            controller: 'readerCreateController',
            controllerAs: 'vm'
        });
});