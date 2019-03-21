
function randomPoop(){
    var square = Math.floor(Math.random()*23)+2;
    console.log("square " + square);
    if (square == 5 || square == 21){
        randomPoop();
    }
    else{
        document.getElementById("sq" + square).style.display = "block";
    }
    startButton();
}

function clickMe(n){
    if (document.getElementById("sq" + n).style.display = "block"){
        document.getElementById("sq" + n).style.display = "none";
        document.getElementById("counter").innerHTML = parseFloat(document.getElementById("counter").innerHTML) + 1;
        randomPoop();
    }
}

function startButton(){
        document.getElementById("button").style.display = "none";
}