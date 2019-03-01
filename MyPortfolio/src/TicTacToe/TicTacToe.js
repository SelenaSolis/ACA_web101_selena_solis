var gameMarker= "X";
var compMarker = "O";
var turn=0;
var isWinner = false;

//function changes users marker to X
function changeMarkerToX(){
  document.getElementById('message1').innerHTML = "Your marker is X";
  gameMarker = "X";
  compMarker="O";
}


//function changes users marker to O
function changeMarkerToO(){
  document.getElementById('message1').innerHTML = "Your marker is O";
  gameMarker = "O";
  compMarker="X";
}



function decideFirst(){
  var first = Math.floor(Math.random()*2) + 1;
  if (first == 1){
    document.getElementById('message2').innerHTML = "You go first";
    turnController(first, gameMarker);
  }
  
  else {
    document.getElementById('message2').innerHTML = "Computer goes first";
    turnController(first, compMarker);
  }
}




//determines who's turn it is
//even computer
//odd user
function turnController(n) {
   if (!isWinner && n%2 === 0){
     computerTurn();
   }
}




function computerTurn(){
  var compSquare = Math.floor(Math.random() * 9) + 1;
   
   if (document.getElementById('sq' + compSquare).innerHTML ==="X" || document.getElementById('sq' + compSquare).innerHTML==="O"){ 
    computerTurn();
  }
  
   else{
    document.getElementById('sq'+ compSquare).innerHTML=compMarker;
    determineWinner(compMarker);
     console.log(turn);
     console.log(compSquare);
    turn = turn+1;
    turnController(turn);
   }
 }



function placeMarker(n){
    if (document.getElementById(n).innerHTML =="X" || document.getElementById(n).innerHTML=="O"){
      document.getElementById('message2').innerHTML="That square is already used"
      placeMarker(n);
    }
    else {
      document.getElementById(n).innerHTML= gameMarker;
    }
    determineWinner(gameMarker);
    turn=turn+1;
    turnController(turn);
}



function determineWinner(n){
    var square1 = document.getElementById('sq1').innerHTML;
    var square2 = document.getElementById('sq2').innerHTML;
    var square3 = document.getElementById('sq3').innerHTML;
    var square4 = document.getElementById('sq4').innerHTML;
    var square5 = document.getElementById('sq5').innerHTML;
    var square6 = document.getElementById('sq6').innerHTML;
    var square7 = document.getElementById('sq7').innerHTML;
    var square8 = document.getElementById('sq8').innerHTML;
    var square9 = document.getElementById('sq9').innerHTML;
    if ((square1===square2 && square2===square3 && (square1 === "X" || square1 === "O")) ||
        (square4===square5 && square5===square6 && (square4 === "X" || square4 === "O")) ||
        (square7===square8 && square8===square9 && (square7 === "X" || square7 === "O")) ||
        (square1===square4 && square4===square7 && (square1 === "X" || square1 === "O")) ||
        (square2===square5 && square5===square8 && (square2 === "X" || square2 === "O")) ||
        (square3===square6 && square6===square9 && (square3 === "X" || square3 === "O")) ||
        (square1===square5 && square5===square9 && (square1 === "X" || square1 === "O")) ||
        (square3===square5 && square5===square7 && (square3 === "X" || square3 === "O"))){
        document.getElementById('message2').innerHTML = n +" WINS!";
        isWinner = true;
    }
}