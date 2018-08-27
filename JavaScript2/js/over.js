var order = JSON.parse(localStorage.getItem('key'));
var die = JSON.parse(localStorage.getItem('key1'));
var res = JSON.parse(localStorage.getItem('res'));

var dayes = document.getElementsByTagName("h4");
var main = document.getElementsByClassName("main")[0];

var night = document.getElementsByClassName("night");
var daytime = document.getElementsByClassName("daytime")
var p=document.getElementsByTagName("p");





if (res) {
    var kill = 0;
    var com = 0;
    for (i = 0; i < res.length; i++) {
        if (res[i].job == "杀手") {
            if (res[i].life == "c") {
                kill++;
                document.getElementById("kill").innerHTML = kill;
            }
        }
        if (res[i].job == "平民") {
            if (res[i].life == "c") {
                com++;
                document.getElementById("com").innerHTML = com;

            }

        }
    }
}



if (die) {
    for (let i = 0; i < die.length - 2; i++) {
        var day = document.getElementsByClassName("row")[i].cloneNode(true); //克隆天数
        main.appendChild(day); //天数位置
        dayes[i + 1].innerHTML = "第" + (i + 2) + "天"; //以day.length来显示天数
    }
}

if (die) {
    for (let i = 0; i < die.length - 1; i++) {
        // p[i].innerText="晚上："+(die[i].kill+1)+ "号被杀手杀死，"+(die[i].kill+1)+ "号是"+res[die[i].kill].job;
        // p[i+1].innerText="白天："+(die[i].tou+1)+ "号被投票杀死，"+(die[i].tou+1)+ "号是"+res[die[i].tou].job;
        var a=die[i].kill+1
        var b=die[i].tou+1
        $('.a').eq(i).text("晚上:"+a+"号被杀手杀死，");
        $('.b').eq(i).text("白天"+b+"号被投票杀死，");
    }
}









$(document).ready(function () {
    $('.footer-left').click(function () {
        localStorage.clear();
        location.href = "deal.html";
    })
})