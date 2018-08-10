var order = JSON.parse(localStorage.getItem('key'));


var player = document.getElementsByClassName("main_font");
var number = document.getElementsByClassName("main_number");


var arr = [];
var arr = order;

function run() {
    var boxes;
    boxes = arr.length;
    console.log(boxes);

    var main = document.getElementsByTagName("main")[0];
    //获取标签main节点，变量名main

    for (var i = 0; i < arr.length-1; i++) {
        var bb = document.getElementsByClassName("box")[0].cloneNode(true);
        //获取类名box节点，克隆，变量名bb
        main.appendChild(bb);
        //在main的后面向子节点添加bb节点。
        console.log(player)
        
    }
    for (var i = 0; i < arr.length; i++) {
player[i].innerText=(arr[i]);
       
        number[i].innerText=i+1 +"号";
    }

    
    console.log(bb)
}
run();

function box(){
    var show=document.getElementsByClassName("skill-box")[0,1,2,3,4,5,6,7].style.display="block";
}

// function myFunction(){

// 	var my2=document.getElementById("my2").lastChild;//itm=获取m2的子级的最后一位
// 	var cln=my2.cloneNode(true);//变量cln=克隆itm
// 	document.getElementById("my1").appendChild(cln);//将变量cln放入m1的HTML的后面
// }

