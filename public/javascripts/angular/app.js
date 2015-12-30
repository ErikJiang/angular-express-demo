'use strict';

var app = angular.module('seedApp', [
    'ngRoute',
    'demoControllers',
    'demoServices'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/homePart'
        }).
        when('/about', {
            templateUrl: 'partials/aboutPart'
        }).
        when('/editor', {
            templateUrl: 'partials/editorFunc',
            controller: 'editorCtrl'
        }).
        when('/order', {
            templateUrl: 'partials/orderFunc',
            controller: 'orderCtrl'
        }).
        when('/search', {
            templateUrl: 'partials/searchFunc',
            controller: 'searchCtrl'
        }).
        when('/network', {
            templateUrl: 'partials/networkFunc',
            controller: 'networkCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);