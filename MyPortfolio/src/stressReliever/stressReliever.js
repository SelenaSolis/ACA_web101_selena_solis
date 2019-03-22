
//function to choose a random square and change the display to block
function randomPoop(){

    //choose random number between 2 and 24
    var square = Math.floor(Math.random()*23)+2;

    //square 5 and 21 are outside playable area
    if (square == 5 || square == 21){
        randomPoop();
    }
    else{

        //audio
        var audio = document.getElementById("sound");

        //allows audio to replay upon click
        if (audio.paused) {
            audio.play();
        }
        else {
            audio.currentTime = 0
        }

        //changes the square of random number to display block
        document.getElementById("sq" + square).style.display = "block";
    }
    //calls startButton function
    startButton();
}


//function called upon when a square is clicked
function clickMe(n){

    //if the display of the square clicked is block, changes back to none
    if (document.getElementById("sq" + n).style.display = "block"){
        document.getElementById("sq" + n).style.display = "none";

        //adds one to the counter
        document.getElementById("counter").innerHTML = parseFloat(document.getElementById("counter").innerHTML) + 1;

        //calls the randomPoop() function
        randomPoop();
    }
}

//hides the start button after first clicked
function startButton(){
        document.getElementById("button").style.display = "none";
}