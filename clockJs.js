setInterval(TimeMethod,1000)

const hour=document.querySelector("[Date-hour-Hand]");
const minute=document.querySelector("[Date-mintue-Hand]");
const second=document.querySelector("[Date-second-Hand]");


function TimeMethod()
{
    const curDate=new Date();
    const sec=curDate.getSeconds()/60;
    const min=(sec + curDate.getMinutes())/60;
    const hr=(min + curDate.getHours())/12;
    
    second.style.setProperty('--rotate',sec*360)
    minute.style.setProperty('--rotate',min*360)
    hour.style.setProperty('--rotate',hr*360)
}

TimeMethod()