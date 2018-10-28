// var editor;
//         KindEditor.ready(function (K) {
//             console.log(111)
//             editor = K.create('textarea[name="content"]', {
//                 resizeType: 1,
//                 allowPreviewEmoticons: false,
//                 allowImageUpload: false,
//                 items: [
//                     'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic',
//                     'underline',
//                     'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright',
//                     'insertorderedlist',
//                     'insertunorderedlist', '|', 'emoticons', 'image', 'link'
//                 ]
//             });
//         });



angular.module('myApp', ['ngFileUpload'])
    .controller('ss', function ($scope, Upload, $timeout, $http, articleContant) {

        var editor;
        KindEditor.ready(function (K) {
            console.log(000)
            editor = K.create('textarea[name="content"]', {
                resizeType: 1,
                allowPreviewEmoticons: false,
                allowImageUpload: false,
                items: [
                    'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic',
                    'underline',
                    'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright',
                    'insertorderedlist',
                    'insertunorderedlist', '|', 'emoticons', 'image', 'link'
                ]
            });
        });



        $scope.up = function () {
            let cc = 1
            console.log(cc)

        }
        $scope.uploadImg = function () {
            console.log($scope.picFile)
            $scope.name = $scope.picFile.name;
            $scope.size = (($scope.picFile.size) % 1024 + 'kb');

        }





        $scope.uploadPic = function (file) { //图片上传
            file.upload = Upload.upload({ //post请求,
                url: '/carrots-admin-ajax/a/u/img/task',
                data: {
                    username: $scope.username,
                    file: file,
                },
            });
            file.upload.then(function (response) {
                $timeout(function () { //获取返回的url
                    file.result = response.data.data.url;
                    url = file.result;
                    console.log(111)
                    console.log(file) //返回的数据
                    console.log(url) //数据内的URL
                    console.log(response) //返回来的数据
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });



            // $scope.indexFilter = typeFilter.type
            $scope.immediate1 = function () {
                // if(response!=null&&response!=undefined){
                // console.log(www)
                $http({
                    method: "post",
                    url: '/carrots-admin-ajax/a/u/article',
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        status: $scope.immediate1 = 1,
                        img: file.result,
                        content: $scope.content1,
                        industry: $scope.industry1,
                        url: $scope.url1,
                    },
                }).then(function () {
                    // console.log(status1)

                })
                // }
            }

            $scope.immediate2 = function () {
                // if(response!=null&&response!=undefined){
                // console.log(www)
                $http({
                    method: "post",
                    url: '/carrots-admin-ajax/a/u/article',
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        status: $scope.immediate2 = 2,
                        img: file.result,
                        content: $scope.content1,
                        industry: $scope.industry1,
                        url: $scope.url1,
                    },
                }).then(function () {
                    // console.log(status1)
                })
                // }
            }

            
        }
        $scope.names = articleContant.addType
        //让HTML中的names连接过滤器中的addType
        $scope.industry = articleContant.industryltem
        //让HTML中的industry连接过滤器中的industryltem
        $scope.status = articleContant.statusltem
        //让HTML中的status连接过滤器中的statusltem


        
    })

    var editor;
        KindEditor.ready(function (K) {
            console.log(000)
            editor = K.create('textarea[name="content"]', {
                resizeType: 1,
                allowPreviewEmoticons: false,
                allowImageUpload: false,
                items: [
                    'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic',
                    'underline',
                    'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright',
                    'insertorderedlist',
                    'insertunorderedlist', '|', 'emoticons', 'image', 'link'
                ]
            });
        });