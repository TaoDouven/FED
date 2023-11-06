console.log("hallo");


/*let inputChecked = document.getElementById("checkbox1"); 
let form = document.querySelector(form);


console.log(inputChecked.checked);

/*checkbox checken 
form.addEventListner(){
  document.querySelectorAll(type = ["checkbox"]){
    
    if (inputChecked.checked = true){
        console.log("checkbox checked");
    }
    else{
        console.log("checkbox not checked");
    }
        
    
  }
}*/








































/*

var output = document.querySelector(".outputtext");
var userInput = document.querySelector(".userInput");
var characterPlay = document.querySelector("#speler");
var characterPlayTwee = document.querySelector("#spelerTwee");
var timerElement = document.querySelector("#timer");
var timerElementTwee = document.querySelector("#timerTwee");
var startTime = new Date();
var startTimeTwee = new Date();
var myInterval;
var myIntervalTwee;
var bewegen = 10;
var x = 0;
var y = 0;
var xTwee = 0;
var yTwee = 0;
var zinnetjes = ["Yeea je hebt gewonnen!", "Nice, goed gedaan!", "Goedzoooooo!", "Geweldig gedaan"];
var knopDrukken = document.querySelector("#knop");
var randomGetal = Math.floor(Math.random() * 3);
var zinnetjeZien = document.querySelector("p");
var eindSpel = document.querySelector("#tekstSecondScreen");

//Laat eerste scherm zien
window.onload = function () {
    document.getElementById("firstScreen").style.display = "block";
    document.getElementById("secondScreen").style.display = "none";
    startTimer();
}

//https://www.youtube.com/watch?v=Pg1UqzZ5NQM 
//poppetje bewegen
document.addEventListener("keydown", (e) => {
    if (document.getElementById("firstScreen").style.display === "block") {
        //boven bewegen
        if (e.key === "ArrowUp") {
            y -= bewegen;
            characterPlay.style.top = y + "px";
            console.log("x:" + x + "y" + y);
            isLevelComplete();
        }
        //beneden bewegen
        else if (e.key === "ArrowDown") {
            y += bewegen;
            characterPlay.style.top = y + "px";
            console.log("x:" + x + "y" + y);
            isLevelComplete();
        }
        //links bewegen
        else if (e.key === "ArrowLeft") {
            x -= bewegen;
            characterPlay.style.left = x + "px";
            console.log("x:" + x + "y" + y);
            isLevelComplete();
        }
        //rechts bewegen
        else if (e.key === "ArrowRight") {
            x += bewegen;
            characterPlay.style.left = x + "px";
            console.log("x:" + x + "y" + y);
            isLevelComplete();
        }
    }
})

//https://www.youtube.com/watch?v=R-7eQIHRszQ
//Start timer
function startTimer() {
    // console.log("timer gestart")
    myInterval = setInterval(updateTimer, 1000);
}

// Update the timer display
function updateTimer() {
    timerElement.innerText = Math.floor((new Date() - startTime) / 1000);
}

// Stop the timer
function stopTimer() {
    console.log("Timer gestopt");
    clearInterval(myInterval);
}

// functie die beschrijft of je het level gehaal hebt aka hebt het gele dingetje aangeraakt
function isLevelComplete() {
    console.log("checken level complete");
    if (x === 50 && y === -570) {
        // laat stukje tekst zien dat je level gehaald hebt
        zinnetjeZien.innerHTML = zinnetjes[randomGetal];
        console.log("geraakt");
        stopTimer();
        knopDrukken.innerHTML = "<button onclick>klik om door te gaan naar level twee</button>";
    } else {
        console.log("niet geraakt");
    }
}

//https://www.youtube.com/watch?v=Pg1UqzZ5NQM 
// Event listener voor secondScreen
document.addEventListener("keydown", (e) => {
    if (document.getElementById("secondScreen").style.display === "block") {
        // Boven bewegen
        if (e.key === "ArrowUp") {
            yTwee -= bewegen;
            characterPlayTwee.style.top = yTwee + "px";
            console.log("x:" + xTwee + "y:" + yTwee);
            isLevelCompleteTwee();
        }
        // Beneden bewegen
        else if (e.key === "ArrowDown") {
            yTwee += bewegen;
            characterPlayTwee.style.top = yTwee + "px";
            console.log("x:" + xTwee + "y:" + yTwee);
            isLevelCompleteTwee();
        }
        // Links bewegen
        else if (e.key === "ArrowLeft") {
            xTwee -= bewegen;
            characterPlayTwee.style.left = xTwee + "px";
            console.log("x:" + xTwee + "y:" + yTwee);
            isLevelCompleteTwee();
        }
        // Rechts bewegen
        else if (e.key === "ArrowRight") {
            xTwee += bewegen;
            characterPlayTwee.style.left = xTwee + "px";
            console.log("x:" + xTwee + "y:" + yTwee);
            isLevelCompleteTwee();
        }
    }
});

//Als je op de knop drukt dan ga je naar secondScreen
knopDrukken.addEventListener("click", levelTwee);

//Laat tweede scherm zien
function levelTwee() {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "block";
    startTimerTwee();
}

// Functie die beschrijft of je het level gehaald hebt aka hebt het gele dingetje aangeraakt
function isLevelCompleteTwee() {
    console.log("checken level twee complete");
    if (xTwee === -240 && yTwee === -90) {
        // Laat stukje tekst zien dat je level gehaald hebt
        console.log("geraakt");
        stopTimerTwee();
        eindSpel.innerHTML = "Je bent klaar met de game";
    } else {
        console.log("nog niet geraakt");
    }
}


//https://www.youtube.com/watch?v=R-7eQIHRszQ
// Start timer twee
function startTimerTwee() {
    console.log("timer twee gestart");
    startTimeTwee = new Date(); // Reset startTimeTwee naar het huidige tijdstip
    myIntervalTwee = setInterval(updateTimerTwee, 1000);
    updateTimerTwee(); // Voer de updateTimerTwee-functie direct uit om het juiste startpunt weer te geven
}

// Update the timer twee display
function updateTimerTwee() {
    var currentTime = new Date();
    var timeDifference = Math.floor((currentTime - startTimeTwee) / 1000);
    timerElementTwee.innerHTML = timeDifference;
}

// Stop timer twee
function stopTimerTwee() {
    console.log("Timer gestopt");
    clearInterval(myIntervalTwee);
}

*/