var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/marketView', {
            templateUrl : 'views/templates/marketView.html',
            controller: 'MarketController',
            controllerAs: 'market'
        })
        .otherwise({
            redirectTo: '/marketView'
        });
}]);
