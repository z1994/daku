
// ====================================


// var list = document.getElementsByClassName('let_style');
// var run = document.getElementById('run');
// var stop = document.getElementById('stop'); 
// var time;



// function begin() {
//     var one = Math.floor(Math.random() * list.length);
//     var two = Math.floor(Math.random() * list.length);
//     var three = Math.floor(Math.random() * list.length);
   
//     if (one == two) {
//         one = Math.floor(Math.random() * list.length);
//     } else if (two == three) {
//         two = Math.floor(Math.random() * list.length);
//     } else if (one == three) {
//         three = Math.floor(Math.random() * list.length);
//     }
//     list[one].style.backgroundColor = 'rgb' + colors();
//     list[two].style.backgroundColor = 'rgb' + colors();
//     list[three].style.backgroundColor = 'rgb' + colors();
// //  console.log(one)
// //     console.log(two)
// //     console.log(three)

// }

// function colors() {
//     var rgb;
//     var r = Math.floor(Math.random() * 265);
//     var g = Math.floor(Math.random() * 265);
//     var b = Math.floor(Math.random() * 265);
//     rgb = '(' + r + ',' + g + ',' + b + ')';
//     return rgb;
// }
// run.onclick = function () {
//     clearInterval(time);
//     time = setInterval(function () {
//         for (var i = 0; i < list.length; i++) {
//             list[i].style.backgroundColor = '';
//         }
//         begin();

//     }, 1000);
// }
// stop.onclick = function () {
//     clearInterval(time);
//     for (var i = 0; i < list.length; i++) {
//         list[i].style.backgroundColor = '';
//     }
// }
// 

// var list=document.getElementsByClassName('let_style');
// var run=document.getElementById('run');
// var stop=document.getElementById('stop');
// var time;//??????????????

// function begin(){
//     var one=Math.floor(Math.random()*list.length);
//     var two=Math.floor(Math.random()*list.length);
//     var three=Math.floor(Math.random()*list.length);

//     if (one==two){
//         one=Math.floor(Math.random()*list.length);
//     }else if(two==three){
//         two=Math.floor(Math.random()*list.length);
//     }else if(three==one){
//         three=Math.floor(Math.random()*list.length);
//     }
//     list[one].style.background='rgb'+colors();
//     list[two].style.background='rgb'+colors();
//     list[three].style.background='rgb'+colors();
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
//     },100);
// }
// stop.onclick=function(){
//     clearInterval(time);
//     for(var i=0;i<list.length;i++){
//         list[i].style.backgroundColor='';
//     }
// }

// ==========


var list=document.getElementsByClassName("let_style");//获取节点
var run=document.getElementById("run");
var stop=document.getElementById("stop");
var time;//???

function begin(){
    var one=Math.floor(Math.random()*list.length);
    var two=Math.floor(Math.random()*list.length);
    var three=Math.floor(Math.random()*list.length);
if(one==two || two==three || three==one) {
    one=Math.floor(Math.random()*list.length);
    two=Math.floor(Math.random()*list.length);
    three=Math.floor(Math.random()*list.length);
}
list[one].style.background='rgb'+colors();
list[two].style.background='rgb'+colors();
list[three].style.background='rgb'+colors();

// console.log(one)
//     console.log(two)
//     console.log(three)
}
  

function colors(){
    var rgb;
    var r=Math.floor(Math.random()*265);
    var g=Math.floor(Math.random()*265);
    var b=Math.floor(Math.random()*265);
    rgb='('+r+','+g+','+b+')';
    return rgb;
}

run.onclick=function(){
    clearInterval(time);
    time=setInterval(function(){
        for(var i=0;i<list.length;i++){
            list[i].style.backgroundColor='';
        }
        begin();
    },1000);
}
stop.onclick=function(){
    clearInterval(time);
    for(var i=0;i<list.length;i++){
        list[i].style.backgroundColor='';
    }
}