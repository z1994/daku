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

        // get_seek:function(){
        //     return '/carrots-admin-ajax/a/article/search'
        //     // ?size=999代表着加载999条数据，默认十条，一页
        // },
        
        del:function(id){
            return '/carrots-admin-ajax/a/u/article/'+id;
        },

        getSelfDetall:function(){
            if(localStorage["self"]===undefined){
                return undefined;
            }else{
                return JSON.parse(localStorage["self"]);
            }
        }

        
    }
})
      