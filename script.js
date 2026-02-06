let minutes = 25;
let seconds = 0;
let interval = null;


const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");

function updateDisplay() {
    displayMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    displaySeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
}

function timerLogic() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(interval); 
            interval = null;
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    
    updateDisplay();
}


document.getElementById("start").addEventListener("click", function(){
    if (interval === null) {
        interval = setInterval(timerLogic, 1000);
    }
});


document.getElementById("pause").addEventListener("click", function(){
    clearInterval(interval);
    interval = null; 
});


document.getElementById("reset").addEventListener("click", function(){
    clearInterval(interval);
    interval = null;
    minutes = 25;
    seconds = 0;
    
    updateDisplay();

});
