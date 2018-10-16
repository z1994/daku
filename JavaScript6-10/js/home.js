//获取ng-app，赋值变量app
var app = angular.module('myApp', []);
//获取app的作用域，依赖注入￥http
app.controller('res', function ($scope, $http,$state) {
    $scope.user = true; //turn代表默认隐藏
    $scope.pull = function () { //点击事件的函数
        $scope.user = !$scope.user;
    }
    $scope.typ = function () {
        $state.go('home.upload');
    }

})