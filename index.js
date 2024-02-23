const hourE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h = h -12
        ampm = "PM"
    }
   
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    hourE1.innerText = h.toString().padStart(2, '0') ;
    minutesE1.innerText = m.toString().padStart(2, '0');
    secondsE1.innerText = s.toString().padStart(2, '0');
    ampmE1.innerText = ampm;  


    setTimeout(() => {
        updateClock()
      }, 1000);
    
}

updateClock()