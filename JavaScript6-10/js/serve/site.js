angular.module("myApp")
.factory("site",function(){
    return{
        // login:'/carrots-admin-ajax/a/login',

        login:function(){
            return '/carrots-admin-ajax/a/login';
        },

        get_list:function(){//封装获取list列表数据接口为一个方法
            return '/carrots-admin-ajax/a/article/search';
        },

        get_seek:function(){
            return '/carrots-admin-ajax/a/article/search'
        }


        
    }
})
      