const DateTimes=document.querySelector('.DateTime');
const inptDay=document.querySelector('.dayBx');
const inptDate=document.querySelector('.dteBx');
const inptMonth=document.querySelector('.MnthBx');
const inptYear=document.querySelector('.YearBx');
const inptTime=document.querySelector('.TimeBx');
const Btn=document.querySelector('.btns');
const localtime=document.querySelector('#localdate');

const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

const dt=new Date();

Btn.addEventListener('click',GetDate);

function GetDate(){
    DateTimes.textContent= dt;
    inptDay.value= days[dt.getDay()];
    inptDate.value=dt.getDate();
    inptMonth.value=(months[dt.getMonth()])+" ,"+(dt.getMonth()+1);
    inptYear.value=dt.getFullYear();
    inptTime.value=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();    
    
}

// for right clock


function rightClock(){
    let d= new Date();  //writen this code line again for making the time running.
    let hours=d.getHours();
    let minutes=d.getMinutes();
    let seconds=d.getSeconds();
    let meridian='AM';
    
    if(hours==0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        meridian='PM';
    }
    
    hours=(hours<10) ?"0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;
    
    let timetext=hours+":"+minutes+":"+seconds+":"+meridian;
    
    localtime.textContent=timetext;

    let time = setTimeout(function(){ 
        rightClock() 
    }, 1000);
}

rightClock();
