// var app=angular.module('app',['ui.router']);
// app.controller('content',function($scope){
// 	$scope.ures="";
// 	$scope.pass="";
// 	$scope.log="";
// }); 
// app.config(function ($stateProcider,$urlRouterProvider){
// 	.stateProvider
// 	.state('user',{
// 		url:'/user',
// 		templateUrl

// 	})
// })

// var app=angular.module('app',['ui.router']);
// app.controller('content',function($scope){
// 	$scope.ures="";
// 	$scope.pass="";
// });
// app.config(function($stateProvider,$urlRouterProvider){
// stateProvider
// 	.state('log',{
// 		url:'http://dev.admin.carrots.ptteng.com/',
// 		templaterUrl
// 	})
// })



angular.module("myApp", [])
    .controller("login", function ($scope, $http, $state, beg) {
        // 当用户名输入框和密码输入框获得焦点时清除报错提示
        $scope.value = function () {
            $scope.hint = ""; //清除报错提示
        }
        // 点击登录按钮
        $scope.login = function () {
            // 当未输入账号和密码时报错提示
            if ($scope.name == undefined || $scope.name == "" || $scope.password == undefined || $scope.password == "") {
                $scope.hint = "请输入账号密码";
            } else if ($scope.name != "" && $scope.password != "") {

                $scope.params = {};
                $scope.params.name = $scope.name;
                $scope.params.pwd = $scope.password;
                //params可以把$scope的对象序列化成键值对形式
                beg.login($scope.params).then(function (response) { //发起请求成功
                    console.log(response);
                    console.log(response.data);
                    if (response.data.code == "-5003") {
                        $scope.hint = response.data.message; //提示用户名错误
                    } else if (response.data.code == "-5004") {
                        $scope.hint = response.data.message; //提示密码错误
                    } else if (response.data.code == "0") {
                        $scope.hint = "登录成功"; //提示登录成功
                        $state.go('home'); //路由跳转到主页
                    }
                })

                // $http({
                //     method: "POST", //定义POST请求
                //     url: '/carrots-admin-ajax/a/login', //请求地址
                //     params: { //params可以把$scope的对象序列化成键值对形式
                //         name: $scope.name,
                //         pwd: $scope.password,
                //     },
                //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded'
                //         //请求表头
                //     }
                // })
                // .then(function (response) { //发起请求成功
                //     // console.log(response);
                //     // console.log(response.data);
                //     if (response.data.code == "-5003") {
                //         $scope.hint = response.data.message; //提示用户名错误
                //     } else if (response.data.code == "-5004") {
                //         $scope.hint = response.data.message; //提示密码错误
                //     } else if (response.data.code == "0") {
                //         $scope.hint = "登录成功"; //提示登录成功
                //         $state.go('home'); //路由跳转到主页
                //     }
                // }, function (response) { //发起请求失败
                //     console.log(response);
                //     location.href = "404"; //跳转到404
                // })
            }
        }
    })