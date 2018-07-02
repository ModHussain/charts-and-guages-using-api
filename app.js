var App = angular.module('exampleApp',['ui.router','dx']);    
App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
       
        $stateProvider
        .state('guage', {
            url: '/guage',
            templateUrl: 'views/guage.html',
            controller: 'guageCtrl'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'views/linechart.html',
            controller: 'lineCtrl'
            
        })
        
    }]);