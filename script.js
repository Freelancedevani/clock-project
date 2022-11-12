const hourStick = document.querySelector(".hour-stick");
const minuteStick = document.querySelector(".minute-stick");
const secondStick = document.querySelector(".second-stick");
const datePosition = document.querySelector(".date-position");

function clockFunc(){
   const date = new Date();
   const hour = date.getHours();
   const minute = date.getMinutes();
   const second = date.getSeconds();
   
   // convert hour, munite, second to deg 
   const hourDeg = ((hour / 12) * 360 ) + 90;
   const minDeg  = ((minute / 60 ) * 360 ) + 90;
   const secDeg = ((second / 60) * 360 ) + 90; 

    // rotate the clock 
    hourStick.style.transform = `rotate(${hourDeg}deg)`;
    minuteStick.style.transform = `rotate(${minDeg}deg)`;
    secondStick.style.transform = `rotate(${secDeg}deg)`;

    // apply sound effect
    if(secDeg){
     const audio = new Audio("tic-tac.mp3");
     const playPromise = audio.play();
     if(playPromise !== undefined){
        playPromise.then(_ =>{
           audio.play();
        }).catch(err =>{
            console.log(err);
        })
     }
    }
  
    // add zero before single digit
   function addZero(num) {
    if(num <10){
        return `0${num}`
    }else{
        return num;
    }
   }



   // displaying date
   const day =  date.getDate();
   const month = date.getMonth();
   const year = date.getFullYear();

   datePosition.innerHTML = `${addZero(day)}/${addZero(month)}/${year}`

}

setInterval(clockFunc, 1000);

clockFunc();
