var myApp = angular.module('myApp', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/marketView', {
            templateUrl : 'views/templates/marketView.html',
            controller: 'MarketController',
            controllerAs: 'market'
        })
        .when('/personView', {
            templateUrl : 'views/templates/personView.html',
            controller: 'PersonController',
            controllerAs: 'blog'
        })
        .otherwise({
            redirectTo: 'marketView'
        });
}]);
