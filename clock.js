const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand   = document.getElementById('hour-hand');

function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;
   
    rotateClockHand(secondHand,seconds);
    rotateClockHand(minuteHand,minutes);
    rotateClockHand(hourHand,hours);    
}


function rotateClockHand(element,ratation){
    element.style.setProperty('--rotate',ratation * 360);
}

setInterval(clockTick,1000);