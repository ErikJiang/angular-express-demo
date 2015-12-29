'use strict';

var seedControllers = angular.module('seedControllers', []);

seedControllers.controller('panelCtrl', ['$scope', function($scope) {
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

seedControllers.controller('testCtrl', ['$scope', function($scope) {
    $scope.test = "hello! this is test page!"
}]);

seedControllers.controller('navMenuCrtl', ['$scope', function($scope) {
    $scope.active = '';
    $scope.notes = {
        title: '欢迎来到 angular & express 例程',
        content: '欢迎来到 angular-express-demo !'
    };
    $scope.setMenuBtn = function(evt) {
        var elem = evt.currentTarget;
        $scope.item = elem.getAttribute('class');
        if ('home' == $scope.item) {
            $scope.notes = {
                title: '欢迎来到 angular & express 例程',
                content: '欢迎来到 angular-express-demo !'
            };
        }
        else if ('editer' == $scope.item) {
            $scope.notes = {
               title: '例程1: 内联文本编辑器',
                content: '我们会创建一个简单的内联编辑器-单击段落时会显示文本提示框。' +
                '我们会使用到一种控制器，能够初始化模型，以及声明两个函数用来切换提示的可见性。' +
                '控制器是常规的JavaScript函数，能自动被Angular执行。' +
                '使用中，用ng-controller指令关联相关的页面。'
            };
        }
        else if ('order' == $scope.item) {
            $scope.notes = {
                title: '例程2: 订单表单',
                content: '我们使用另一个Angular中非常有用的特性-过滤器，' +
                '来编写一个能实时更新总价的订单表单。过滤器能通过管道符”|”级联起来修改模型。' +
                '在下面的例子中，我使用了货币过滤器，把数字转换为正确格式化的价格，包括美元符号以及分。' +
                '你也可以和即将看到的第四个例子一样，很容易地创造自己的过滤器。' +
                'ng-repeat绑定(文档)是框架的另一个有用的特性，能够让你遍历数组元素并且生成相应的标记。' +
                '当某个条目改变或者删除时，它能够智能地更新。'
            };
        }
        else if ('search' == $scope.item) {
            $scope.notes = {
                title: '例程3: 即时搜索',
                content: '这个例子允许用户通过在文本域输入来过滤条目集。这是Angular另一个出众的地方，' +
                '也是编写自定义的过滤器最合适的地方。既然要这样做，首先我们就不得不把我们的应用转换成一个模块。' +
                '模块是把JavaScript应用组织成通过新颖而又有趣的方式进行绑定形成独立组件的一种方式。' +
                'Angular通过这种技术达到了代码分离，并且要求你创建过滤器时遵循这种方式。' +
                '在把你的应用转变成模块中，你仅仅需要做两件事：' +
                '1.在你的JS中使用angular.module(“name”,[])函数调用。这样就会进行初始化并且返回一个新的模块；' +
                '2.通过ng-app指令值传递模块的名称。' +
                '然后创建过滤器仅仅是简单地调用由angular.module(“name”,[])返回的模块对象上的filter()方法。'
            };
        }
        else if ('network' == $scope.item) {
            $scope.notes = {
                title: '例程4: 切换网络',
                content: '另一个经常用到的交互UI是通过单击按钮来切换不同的布局模式(网格或者列表)。' +
                '这用Angular来做非常容易。另外，我会介绍一下另一个重要的概念–服务。' +
                '它们是一种对象，能够用来让你的应用和服务器进行交互，比如：API，或者其它数据源。' +
                '这个例子里，我们会编写一个与InstagramAPI交互的服务，用它来返回以数组形式当前最流行的图片。'
            };
        }
        else if ('about' == $scope.item) {
            $scope.notes = {
                title: '最后关于',
                content: '如果你已经按照上面例子做了的话，你已经理解了Angular开发的基本要点了。' +
                '但是，如果要成为专业人才的话，需要更多地去学习。'
            };
        }
    };
}]);