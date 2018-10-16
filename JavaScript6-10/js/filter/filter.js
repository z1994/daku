// angular.module("myApp")
//     .filter("indexFilter", function () {//过滤列表数据的index序号
//         return function (index) {
//             return index + 1;
//         };
//     })
//     .filter("typeFilter", function () {//过滤列表数据的type类型
//         return function (type) {
//             if (type == 0) {
//                 return "首页banner";
//             } else if (type == 1) {
//                 return "找职位banner";
//             } else if (type == 2) {
//                 return "找精英banner";
//             } else if (type == 3) {
//                 return "行业大图";
//             }
//         };
//     })
//     .filter("statusFilter", function () {//过滤列表数据的status状态
//         return function (status) {
//             if (status == undefined) {
//                 return "全部";
//             } else if (status == 1) {
//                 return "草稿";
//             } else if (status == 2) {
//                 return "上线";
//             }
//         };
//     })




angular.module("myApp")
    .filter("indexFilter", function () {//filter代表着自定义过滤器
        return function (index) {
            return index + 1;
        };
    })
    .filter("typeFilter", function () {
        return function (type) {
            if (type == 0) {
                return "首页banner";
            } else if (type == 1) {
                return "找职位banner";
            } else if (type == 2) {
                return "找精英banner";
            } else if (type == 3) {
                return "行业大图";
            }
        };
    })
    .filter("statusFilter", function () {
        return function (status) {
            if (status == 1) {
                return "草稿";
            } else if (status == 2) {
                return "上线";
            } 
        }
    })

angular.module("myApp")
    .constant("articleContant", {
        typeltem: [{
            type: "全部",
            num: undefined
        }, {
            type: "首页banner",
            num: 0
        }, {
            type: "找职位banner",
            num: 1
        }, {
            type: "找精英banner",
            num: 2
        }, {
            type: "行业大图",
            num: 3
        }],
        statusltem: [{
            status: "全部的",
            num: undefined
        }, {
            status: "草稿",
            num: 1
        }, {
            status: "上线",
            num: 2
        }],
        industryltem: [{
            industry: "移动互联网",
            num: 0
        }, {
            industry: "电子商务",
            num: 1
        }, {
            industry: "企业服务",
            num: 2
        }, {
            industry: "O2O",
            num: 3
        }, {
            industry: "教育",
            num: 4
        }, {
            industry: "金融",
            num: 5
        }, {
            industry: "游戏",
            num: 6
        }],

        addType: [{
            type: "首页banner",
            num: 0
        }, {
            type: "找职位banner",
            num: 1
        }, {
            type: "找精英banner",
            num: 2
        }, {
            type: "行业大图",
            num: 3
        }],
    })
    .value("articleConstant", 123)