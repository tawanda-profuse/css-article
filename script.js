var minutesOutput = document.getElementById("minutes"); // Minutes output
var secondsOutput = document.getElementById("seconds"); // Seconds output

// Store a reference to the variables
var startTimer = null;
var secondsValue = 0;
var minutesValue = 45;

function timer(){
    if(minutesValue == 0 && secondsValue == 0){
        minutesValue = 0;
        secondsValue = 0;
        minutesOutput.innerHTML = minutesValue;
        secondsOutput.innerHTML = secondsValue;
      } else if(secondsValue != 0){
        secondsValue--;
        minutesOutput.innerHTML = minutesValue;
        secondsOutput.innerHTML = secondsValue;
      } else if(minutesValue != 0 && secondsValue == 0){
        secondsValue = 59;
        minutesValue--;
        minutesOutput.innerHTML = minutesValue;
        secondsOutput.innerHTML = secondsValue;
      } 
      return;
}

document.addEventListener("DOMContentLoaded", function (){
        startTimer = setInterval(function(){
            timer();
        }, 1000);    
});

