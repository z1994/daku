// angular.module("app",['ui-router'])
// .config(function($stateProvider,$urlRouterProvider){
//     stateProvider
//         .state('log',{
//             url:'/log',
//             templaterUrl:'http://dev.admin.carrots.ptteng.com/'
//         })
//     })

angular.module('myApp', ["ui.router", "oc.lazyLoad"]) //加载ui路由模块和懒加载模块
    .config(function ($httpProvider) { //设置请求头数据类型
        // Set x-www-form-urlencoded Content-Type,设置请求content-type
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.transformRequest = function (data) {
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login'); //默认加载页面
        $stateProvider

            .state('login', { //路由跳转
                url: '/login', //定义路由的地址
                views: { //视窗，加载路由的html模块
                    '': {
                        templateUrl: 'html/log.html',
                    }
                },
                resolve: { //懒加载，加载html模块对应的css和js文件
                    myload: (function ($ocLazyLoad) {
                        return $ocLazyLoad.load(["css/log.css", "js/login.js"]);
                    })
                }
            })

            .state('home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'html/home.html',
                    }
                },
                resolve: {
                    myload: (function ($ocLazyLoad) {
                        return $ocLazyLoad.load(["css/home.css", "js/home.js"])
                    })
                }
            })

            .state('home.upload', {
                url: '/upload?page&size&value&status&type&title&author&startAt&endAt',
                //将各种传参代入到搜索里
                views: {
                    '': {
                        templateUrl: 'html/upload.html',
                    }
                },
                resolve: {
                    myload: (function ($ocLazyLoad) {
                        return $ocLazyLoad.load(["css/upload.css", "js/upload.js"])
                    })
                }
            })

            .state('home.newly', {
                url: '/newly',
                views: {
                    '': {
                        templateUrl: 'html/newly.html',
                    }
                },
                resolve: {
                    myload: (function ($ocLazyLoad) {
                        return $ocLazyLoad.load(["css/newly.css", "js/newly.js"])
                    })
                }
            })


    })