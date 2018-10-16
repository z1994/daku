angular.module("myAPP",[])
.controller("login",function($scope,$http,$state){
    $scope.value=function(){
        $scope.hint="";
    }
    $scope.login=function(){
        if($scope.name==undefined||$scope.name==""||$scope.password==undefined||$scope.password==""){
            $scope.hint="请输入账号密码";
        }else if($scope.name!=""&&$scope.password!=""){
            $http({
                method:"post",
                url:'',
                params:{
                    name:$scope.name,
                    pwd:$scope.password,
                },

            }).then(function (response){
                
            })
        }
    }
})