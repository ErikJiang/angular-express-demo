'use strict';

var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('panelCtrl', ['$scope', function($scope) {
    var vm = $scope.mv = {};
    $scope.query = '';
    $scope.orderProp = 'number';

    $scope.listData = [{
        name: "Node.JS",
        number: 1,
        url: "https://nodejs.org/",
        content: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
    }, {
        name: "Express",
        number: 2,
        url: "http://expressjs.com/",
        content: "Fast, unopinionated, minimalist web framework for Node.js"
    }, {
        name: "Angular.JS",
        number: 3,
        url: "https://angularjs.org/",
        content: "HTML enhanced for web apps!"
    }, {
        name: "Bootstrap",
        number: 4,
        url: "http://getbootstrap.com/",
        content: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web."
    }, {
        name: "JQuery",
        number: 5,
        url: "https://jquery.com/",
        content: "jQuery is a fast, small, and feature-rich JavaScript library."
    }, {
        name: "MongoDB",
        number: 6,
        url: "https://www.mongodb.org/",
        content: "MongoDB is an open-source, document database designed for ease of development and scaling. "
    }];
}]);

demoControllers.controller('homeCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.home.title;
            $scope.content = $sce.trustAsHtml(data.home.content);
        });
    }
]);

demoControllers.controller('aboutCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.about.title;
            $scope.content = $sce.trustAsHtml(data.about.content);
        });
    }
]);

demoControllers.controller('editorCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.editor.title;
            $scope.content = $sce.trustAsHtml(data.editor.content);
        });

        $scope.editContent = 'Hello World!';
        $scope.showTooltip = false;
        $scope.hideTooltip = function() {
            $scope.showTooltip = false;
        };
        $scope.toggleTooltip = function(evt) {
            evt.stopPropagation();
            $scope.showTooltip = !$scope.showTooltip;
        };
    }
]);

demoControllers.controller('orderCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.order.title;
            $scope.content = $sce.trustAsHtml(data.order.content);
        });
    }
]);

demoControllers.controller('searchCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.search.title;
            $scope.content = $sce.trustAsHtml(data.search.content);
        });
    }
]);

demoControllers.controller('networkCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.network.title;
            $scope.content = $sce.trustAsHtml(data.network.content);
        });
    }
]);

