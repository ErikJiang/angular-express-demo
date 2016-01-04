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

        $scope.services = [
            {
                name: 'Apple iPhone 6s',
                url: '/images/iphone6s.jpg',
                price: 5000,
                active: true
            }, {
                name: 'Galaxy Note5',
                url: '/images/galaxynote5.jpg',
                price: 5288,
                active: false
            }, {
                name: 'HTC One M9w',
                url: '/images/onem10.jpg',
                price: 3200,
                active: false
            }, {
                name: 'SONY Xperia Z5',
                url: '/images/xperiaz5.jpg',
                price: 5699,
                active: false
            }
        ];
        $scope.toggleActive = function(service) {
            service.active = !service.active;
        };

        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.services, function(service) {
                if(service.active) {
                    total += service.price;
                }
            });
            return total;
        };
    }
]);

demoControllers.controller('searchCtrl', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get("json/themeInfo.json").success(function(data) {
            $scope.title = data.search.title;
            $scope.content = $sce.trustAsHtml(data.search.content);
        });

        $scope.items = [
            {
                url: 'http://www.shejipi.com/81512.html',
                title: '超级无敌大萌灯',
                image: 'http://cdn.shejipi.com/wp-content/uploads/2015/11/%E8%90%8C%E9%B9%BF%E5%9C%A3%E8%AF%9E%E8%8A%823%E9%A6%96%E5%9B%BE.jpg'
            },
            {
                url: 'http://www.shejipi.com/76925.html',
                title: '一款简单的不简单的手表',
                image: 'http://cdn.shejipi.com/wp-content/uploads/2015/10/paike12.jpg'
            },
            {
                url: 'http://www.shejipi.com/84655.html',
                title: '陪竹子走过漫长岁月',
                image: 'http://cdn.shejipi.com/wp-content/uploads/2015/12/naturebamboo25.jpg'
            },
            {
                url: 'http://www.shejipi.com/82365.html',
                title: '让我们对回忆 say hi again',
                image: 'http://cdn.shejipi.com/wp-content/uploads/2015/12/xiamong2.jpg'
            },
            {
                url: 'http://www.shejipi.com/68412.html',
                title: '「后街」的诞生',
                image: 'http://cdn.shejipi.com/wp-content/uploads/2015/08/700bikehoujie3.jpg'
            },
            {
                url: 'http://www.shejipi.com/72996.html',
                title: '骑折叠电动车「云马」上北京地铁',
                image: 'http://cdn.shejipi.com/wp-content/uploads/2015/09/yunmatiyan8.jpeg'
            },
            {
                url: 'http://www.shejipi.com/86799.html',
                title: '把洒满午后阳光的草坪放在书桌上',
                image: 'http://cdn.shejipi.com/wp-content/uploads/2015/12/lvyeyangguang2.jpg'
            }
        ];
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

