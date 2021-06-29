let tb = document.getElementById('start')
let sm = document.getElementsByClassName('startmenu')[0]
tb.addEventListener('click',()=>{
    if(sm.style.bottom == "-400px"){
        sm.style.bottom = "50px"
    }else{
        sm.style.bottom = "-400px"
    }
})


tb.addEventListener('mousedown',()=>{
    tb.style.height = "25px"
    tb.style.marginTop = "3px"
})

tb.addEventListener('mouseup',()=>{
    tb.style.height = "30px"
    tb.style.marginTop = "0px"
})

let bing = document.getElementById('bing')
bing.addEventListener('click',()=>{
    window.open('https://www.bing.com/')
})

bing.addEventListener('mousedown',()=>{
    bing.style.height = "25px"
    bing.style.marginTop = "3px"
})

bing.addEventListener('mouseup',()=>{
    bing.style.height = "30px"
    bing.style.marginTop = "0px"
})

let t1 = document.getElementById('tim')

t1.addEventListener('mousedown',()=>{
    t1.style.backgroundColor = "#e0e0e0"
})

t1.addEventListener('mouseup',()=>{
    t1.style.backgroundColor = "#f3f3f3"
})

let i1 = document.getElementById('i1')



i1.addEventListener('click',()=>{
    if(i1.style.backgroundColor == "#d1f0ff"){
        i1.style.backgroundColor = "white";
    }else{
        i1.style.backgroundColor = "#d1f0ff";
    }
})

let i2 = document.getElementById('i2')

i2.addEventListener('click',()=>{
    if(i2.style.backgroundColor == "#d1f0ff"){
        i2.style.backgroundColor = "white";
    }else{
        i2.style.backgroundColor = "#d1f0ff";
    }
})

let myDate = new Date();

function updateTime(){
    let day = myDate.getDay();
    var dt = myDate.getDate();
    var mnth = myDate.getMonth();
    var yr = myDate.getFullYear();
    var hrs = myDate.getHours();
    var minute = myDate.getMinutes();
    var sec = myDate.getSeconds();

    if(day == 1){
        var days = "Monday";
    }
    else if(day == 2){
        var days = "Tuesday"
    }
    else if(day == 3){
        var days = "Wednesday"
    }
    else if(day == 4){
        var days = "Thursday"
    }
    else if(day == 5){
        var days = "Friday";
    }
    else if(day == 6){
        var days = "Saturday";
    }
    else{
        var days = "Sunday";
    }
    var fullTime;
    fullTime = (hrs+":"+minute+"\n| "+days+"\n"+dt+" \\ "+(mnth+1)+" \\ "+yr);
   
    document.getElementById('tim').innerHTML = fullTime;
}

setInterval(updateTime,1000);