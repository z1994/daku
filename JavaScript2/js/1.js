var input = document.getElementById('myinput')

function change () {
    var x = document.getElementById("myinput").value; //总人数 
    var z = Math.round(x / 2 + x / 6 + x / 24.1);//平民人数
    var y = x - z;//杀手人数
    document.getElementById("killer").innerHTML = y;//HTML显示杀手人数
    document.getElementById("civ").innerHTML = z;//HTML显示平民人数
    if(4 > x || 18 < x){//人数不正确判断
        document.getElementById("killer").innerHTML = "";
    document.getElementById("civ").innerHTML = "";
    }
}

change()

input.oninput = function myf() {
    change()
}

var go = document.getElementById('go');//这是点击事件的节点

// 这是点击事件
 go.onclick = function () {
var x = document.getElementById("myinput").value; 
if (4 > x || 18 < x) {
       confirm('人数不对')
    }
    else {
        location.href = "./home.html" }
}

var back=document.getElementById("back");
back.onclick=function(){
    console.log(11)
    if(confirm("返回页面")){
        location.href="./home.html";
    }else{
        return false;
    }
}





 //键盘事件，抬起按键触发
document.onkeyup=function(v){ //a时按键信息对象以函数参数的形式传递进来
    //取出按键信息中的按键代码（大部分浏览器通过keyCode属性获取按键代码，但少部分浏览器使用的是charCode
    var x= v.keyCode;
    if (x===13){//13为回车键的编码

        //按下回车键执行如下代码
        var y=document.getElementById("myinput").value;
        if(y<4||y>18){
            confirm("人数不对")
        }else{
            location.href="./home.html";
        }
    }   
}
