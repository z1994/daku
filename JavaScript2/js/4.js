var order = JSON.parse(localStorage.getItem('key'));
var arr = [];
var arr = order;
console.log(arr)

content=document.getElementsByClassName("nav_content")[0]; 
kill=document.getElementsByClassName("box")[0];//杀手杀人
last_word=document.getElementsByClassName("box")[1];//发表遗言
say=document.getElementsByClassName("box")[2];//依次发言        
vote=document.getElementsByClassName("box")[3];//全民投票

function kill(){
    location.href = "./log.html";
}




function button_right(){
    
 }
function button_left(){
    confirm ("本轮游戏是否已经结束？"); 
}