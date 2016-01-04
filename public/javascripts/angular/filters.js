'use strict';

/* Filters */
var demoFilters = angular.module('demoFilters', []);

demoFilters.filter('queryByTerms', function() {
    return function(arr, searchString) {
        if(!searchString) {
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item) {
            if(item.title.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });
        return result;
    };
});