angular.module("myApp")
    .factory("beg", function ($http, site) {
        //工厂模式
        return {
            
            login: function (params) {
                return $http.post(site.login(), params);
            },
            
            log_out:function(){
                return $http.post(site.log_out(),{

                });
            },

            get_list: function (params) {
                //创建变量名，list获取列表请求
                return $http.get(site.get_list(), {
                    //调用site地址方法,后面带()为调用，没有()为引用
                    params: params
                    //带请求传参
                });
            },

            getSelfDetall:function(params){
                return $http.post(site.getSelfDetall(),{
                    params:params
                });
            },
            // get_seek:function(params){
            //     return $http.get(seek.get_seek(),{
            //         params:params
            //     });
            // },
            // skip:function(parms){
            //     return $http.get(pages.skip(),{
            //         params:params
            //     })
            // }
            del:function(id){
                return $http.delete(site.del(id));
            },



        }
    })