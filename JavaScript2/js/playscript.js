var order = JSON.parse(localStorage.getItem('key'));
var arr = [];
var arr = order;


var content=document.getElementsByClassName("nav_content")[0]; 
// var kill=document.getElementsByClassName("box")[0];//杀手杀人
var last_word=document.getElementsByClassName("box")[1];//发表遗言
var say=document.getElementsByClassName("box")[2];//依次发言        
var vote=document.getElementsByClassName("box")[3];//全民投票

function kill(){
    location.href = "./log.html";
    
}




function button_right(){
    location.href = "./log.html";
 }
function button_left(){
    confirm ("本轮游戏是否已经结束？"); 
}