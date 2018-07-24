// var list=document.getElementsByClassName("let_style");//获取节点
// var run=document.getElementById("run");
// var stop=document.getElementById("stop");
// var time;//???

// function begin(){
//     var one=Math.floor(Math.random()*list.length);
//     var two=Math.floor(Math.random()*list.length);
//     var three=Math.floor(Math.random()*list.length);
// if(one==two || two==three || three==one) {
//     one=Math.floor(Math.random()*list.length);
//     two=Math.floor(Math.random()*list.length);
//     three=Math.floor(Math.random()*list.length);

// }
// console.log(one,two,three)
// list[one].style.background='rgb'+colors();
// list[two].style.background='rgb'+colors();
// list[three].style.background='rgb'+colors();

// // console.log(one)
// //     console.log(two)
// //     console.log(three)
// }


// function colors(){
//     var rgb;
//     var r=Math.floor(Math.random()*265);
//     var g=Math.floor(Math.random()*265);
//     var b=Math.floor(Math.random()*265);

//     rgb='('+r+','+g+','+b+')';
//     return rgb;
// }

// run.onclick=function(){
//     clearInterval(time);
//     time=setInterval(function(){
//         for(var i=0;i<list.length;i++){
//             list[i].style.backgroundColor='';
//         }
//         begin();
//     },1000);
// }
// stop.onclick=function(){
//     clearInterval(time);
//     for(var i=0;i<list.length;i++){
//         list[i].style.backgroundColor='';
//     }
// }
// ----------------------------------------------------------

var list = document.getElementsByClassName("let_style");
var run = document.getElementById("run");
var stop = document.getElementById("stop");
var time;


function rgb() {
    var r = Math.floor(Math.random() * 265);
    var g = Math.floor(Math.random() * 265);
    var b = Math.floor(Math.random() * 265);
    var rgb = "(" + r + "," + g + "," + b + ")"
    return rgb;
}

function begin() {
    var one = Math.floor(Math.random() * list.length);
    var two = Math.floor(Math.random() * list.length);
    var three = Math.floor(Math.random() * list.length);
    if (one != two && two != three && three != one) {
        list[one].style.background = "rgb" + rgb();
        list[two].style.background = "rgb" + rgb();
        list[three].style.background = "rgb" + rgb();
    } else {
        //调用自身
        arguments.callee(); 
        // begin();
    }
}



run.onclick = function () {
    clearInterval(time);
    time = setInterval(function () {
        for (var i = 0; i < list.length; i++) {
            list[i].style.backgroundColor = '';
        }
        begin();
    }, 1000);
}
stop.onclick = function () {
    clearInterval(time);
    for (var i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = '';
    }
}















// -------------------------------------------
// var input = document.getElementById('myinput')

// function change () {
//     var x = document.getElementById("myinput").value;  
//     var z = Math.round(x / 2 + x / 6 + x / 24.1);
//     var y = x - z;
//     document.getElementById("killer").innerHTML = y;
//     document.getElementById("civ").innerHTML = z;
//     if(4 > x || 18 < x){
//         document.getElementById("killer").innerHTML = "";
//     document.getElementById("civ").innerHTML = "";
//     }
// }

// change()



// input.oninput = function myf() {
//     change()
// }

// var go = document.getElementById('go');//这是点击事件的节点

// // 这是点击事件
//  go.onclick = function () {
// var x = document.getElementById("myinput").value; 
// if (4 > x || 18 < x) {
//        confirm('人数不对')
//     }
//     else {
//         location.href = "./home.html" }

// }