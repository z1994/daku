
var order = JSON.parse(localStorage.getItem('key'));

//获取ng-app，赋值变量app
var app = angular.module('myApp', []);
//获取app的作用域，依赖注入￥http
app.controller('res', function ($scope, $http,$state) {
//     var self=manageService.getSelfDetail();


//     if(self==undefined){
//         $rootScope.alert("您还未登录",function(){
//             $state.go('login');
//         });
//         return false;
//     }else{
//         $rootScope.uid=self.role.id;
//     }

//    roleService.getRole(self.role.id).then(function(res){
//        if(res.data.code==0){ 
//        }
//        var moduleIDs=Object.keys(res.data.data.role.premissionsSet);
//        localStorage["permissionsSet"]=JSON.stringify(res.data.data.role.per
//    }) 
$scope.out=function(){
    $state.go('login')
}


            
    $scope.user = true; //turn代表默认隐藏
    $scope.pull = function () { //点击事件的函数
        $scope.user = !$scope.user;
    }
    if(order!=null){
    $scope.typ = function () {
        
        $state.go('home.upload');
    }
}else{
    $state.go('login');
}
})