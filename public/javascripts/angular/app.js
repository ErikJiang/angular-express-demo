'use strict';

var app = angular.module('seedApp', [
    'ngRoute',
    'demoControllers',
    'demoFilters',
    'demoServices'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/homePage',
            controller: 'homeCtrl'
        }).
        when('/about', {
            templateUrl: 'partials/aboutPage',
            controller: 'aboutCtrl'
        }).
        when('/editor', {
            templateUrl: 'partials/editorPage',
            controller: 'editorCtrl'
        }).
        when('/order', {
            templateUrl: 'partials/orderPage',
            controller: 'orderCtrl'
        }).
        when('/search', {
            templateUrl: 'partials/searchPage',
            controller: 'searchCtrl'
        }).
        when('/network', {
            templateUrl: 'partials/networkPage',
            controller: 'networkCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);