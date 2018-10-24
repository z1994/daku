var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $state, $filter, beg, articleContant) {
    $scope.user = false;

    var page_end
    $scope.pages = function () {

        // if ($scope.a) {
        //     $state.go($state.$current, {
        //         page: 1
        //     }, {
        //         reload: true //刷新当前页面
        //     })
        // } else if ($scope.b) {
        //     $state.go($state.$current, {
        //         page: 2
        //     }, {
        //         reload: true //刷新当前页面
        //     })
        // } else if ($scope.c) {
        //     $state.go($state.$current, {
        //         page: 3
        //     }, {
        //         reload: true //刷新当前页面
        //     })
        // } else if ($scope.d) {
        //     $state.go($state.$current, {
        //         page: 4
        //     }, {
        //         reload: true //刷新当前页面
        //     })
        // } else if ($scope.e) {
        //     $state.go($state.$current, {
        //         page: 5
        //     }, {
        //         reload: true //刷新当前页面
        //     })
        // }

        console.log($scope.a)
        // 由于没有给ng-model：abc赋值，所以即使选取了某一个，也是undefined
        // 怎么样才能识别出点击的是哪一个呢，好像只有做N个点击事件
    }

    $scope.pagea = function () {
        //首页
        $state.go($state.$current, {
            page: 1
        }, {
            reload: true //刷新当前页面
        })
    }

    $scope.pageb = function () {
        $state.go($state.$current, {
            page: 2
        }, {
            reload: true //刷新当前页面
        })
    }

    $scope.pagec = function () {
        $state.go($state.$current, {
            page: 3
        }, {
            reload: true //刷新当前页面
        })
    }

    $scope.paged = function () {
        $state.go($state.$current, {
            page: 4
        }, {
            reload: true //刷新当前页面
        })
    }

    $scope.pagee = function () {
        $state.go($state.$current, {
            page: 5
        }, {
            reload: true //刷新当前页面
        })
    }




    // $scope.del=function(){
    //     //删除
    //     $state.go($state.$current, {
    //         page: 1
    //     }, {
    //         reload: true //刷新当前页面
    //     })
    // }


    // $scope.pageend=function(){
    //     $state.go($state.$current,{
    //         page:page_end
    //     },{
    //         reload:true
    //     })
    // }











    let params1 = $state.params; //获取传参数据
    console.log(params1)
    $scope.typeItem = articleContant.typeItem; //类似列表
    $scope.statusItem = articleContant.statusItem; //状态列表
    $scope.names = articleContant.addType //下拉框
    $scope.industry = articleContant.statusltem //下拉框
    // $scope.pull = function () {
    //     $scope.user = !$scope.user;
    // }
    // $http({
    //     method: 'GET',
    //     url: '/carrots-admin-ajax/a/article/search'
    // }).then(function successCallback(response) {
    //         // 请求成功执行代码
    //         if(response.data.code=="0"){
    //         }
    //     }, function errorCallback(response) {
    //         // 请求失败执行代码
    // });



    // $http.get('/carrots-admin-ajax/a/article/search')
    // .then(function (response) {

    beg.get_list(params1).then(function (response) {
        //调用
        //get向接口请求数据，然后执行函数response，?size=999代表着加载999条数据，默认十条，一页

        console.log(response.data.data.articleList)
        console.log(response)

        page_end = Math.ceil((response.data.data.total) / 10)
        //总数除以10.向上取整，得到页数
        console.log(response.data.data.total)
        console.log(page_end)
        // console.log(response.data.data)
        // console.log(response.data.data.articleList)
        //response返回来的数据，里面嵌套着很多其他数值，可以指向性的console出某一项
        $scope.response = response.data.data.articleList
    });


    $scope.pageend = function () {
        //末页跳转，之所以放在这里，是要得要page_end运算后的值
        $state.go($state.$current, {
            page: page_end
        }, {
            reload: true
        })
    }


    $scope.new = function () {
        //点击事件
        $state.go('home.newly');
        //跳转网页
    }



    $scope.selectedType = +$state.params.type; //类型
    if ($scope.selectedType != 0 && $scope.selectedType != 1 && $scope.selectedType != 2 && $scope.selectedType != 3) {
        $scope.selectedType = undefined; //默认类似的值为空
    }
    $scope.selectedStatus = +$state.params.status; //状态
    if ($scope.selectedStatus != 1 && $scope.selectedStatus != 2) {
        $scope.selectedStatus = undefined; //默认状态的值为空
    }
    $scope.title = $state.params.title; //标题
    $scope.user = $state.params.author; //创建者
    $scope.starttime = $filter("date")($state.params.startAt, "yyyy-MM-dd"); //开始时间
    $scope.endttime = $filter("date")($state.params.endAt, "yyyy-MM-dd"); //结束时间




    $scope.seek = function () { //搜索
        let starttime = $scope.starttime; //
        if (starttime) {
            starttime = parseInt(new Date(starttime).getTime()); //把字符串时间转为时间戳
        } else {
            starttime = undefined;
        }
        // let endtime=$scope.end1;
        // if(endtime){
        //     endtime=parselnt(new Date(end1).getTime());
        // }else{
        //     starttime=undefined;
        // }
        let endtime = $scope.end1; //结束时间
        if (endtime) {
            endtime = parselnt(new Date(endt1).getTime());
        } // 把字符串时间转为时间戳
        else {
            endtime = undefined
        }







        // beg.get_list($scope.seek).then(function () {})

        $state.go($state.$current, { //路由指令
            status: $scope.status1, //状态
            type: $scope.type1, //类型
            title: $scope.title1, //标题
            author: $scope.author1, //创建者
            startAt: $scope.start1, //开始时间
            endAt: $scope.end1, //结束时间
            page: 1
        }, {
            reload: true //带着传参刷新当前页面
        })

    }

    $scope.del = function ($index) {
        let id = $scope.response[$index].id
        //获取点击删除的下标的id
        console.log(id)
        //打印id 
        beg.del(id).then(function () {
            //第一个id是代入对象，因为已经let了，所以不需要$scope
            $state.reload()//刷新页面

        })


    }

})









// }) }