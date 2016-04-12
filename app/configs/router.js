bf.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/state1');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './index.html'
        })
        .state('state1', {
            url: '/state1',
            views: {
                'viewA': {
                    template: 'state1.viewA'
                },
                'viewB': {
                    template: 'state1.viewB'
                }
            }
        })
        .state('state2', {
            url: '/state2',
            views: {
                'viewA': {
                    template: 'state2.viewA'
                },
                'viewB': {
                    template: 'state2.viewB'
                }
            }
        });
});