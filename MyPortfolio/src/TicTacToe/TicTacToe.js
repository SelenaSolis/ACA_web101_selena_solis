//user game marker declaration
var gameMarker= "X";
//computer game marker declaration
var compMarker = "O";
//turn counter declaration
var turn=0;
//boolean declaration for winner
var isWinner = false;

var delay = 2000; //2 seconds





//function changes users marker to X and computer marker to O
function changeMarkerToX(){
  //displays user marker
  document.getElementById('message1').innerHTML = "Your marker is X";
  gameMarker = "X";
  compMarker="O";
}


//function changes users marker to O and computer marker to X
function changeMarkerToO(){
  //displays user marker
  document.getElementById('message1').innerHTML = "Your marker is O";
  gameMarker = "O";
  compMarker="X";
}


//function to decide to makes the first move
function decideFirst(){
  //random number either 1 or 2
  var first = Math.floor(Math.random()*2) + 1;
  //if first==1 user goes first
  if (first == 1){
    //displays user is first
    document.getElementById('message2').innerHTML = "You go first";
    turn=1;
  }
  //if first==2 computer goes first
  else {
    //displays computer is first
    document.getElementById('message2').innerHTML = "Computer goes first";
    //calls turnController to place computer marker on board
    turnController(first);
    turn=1;
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

//function to place computers marker on board
function computerTurn(){
  //declaration of variable for random number 1-9
  var compSquare = Math.floor(Math.random() * 9) + 1;
   //checks if square is occupied by checking square of random chosen number
   if (document.getElementById('sq' + compSquare).innerHTML ==="X" || document.getElementById('sq' + compSquare).innerHTML==="O"){ 
    //calls function again if square is occupied
    computerTurn();
  }
  
  
  else{
    //places computer marker in randomly chosen square
    console.log(compMarker);
    document.getElementById('sq'+ compSquare).innerHTML = compMarker;
    //calls function to see if there is a winner
    determineWinner(compMarker);
    //adds 1 to the turn
    turn = turn+1;
    //calls the turn controller function
    turnController(turn);
  }
 }


//function places the correct marker on the board
function placeMarker(n){

    //requires user to click to decide first player
    if (turn == 0){
      document.getElementById('message2').innerHTML = "Click to see who goes first";
      placeMarker(n);
    }

    //checks if the user has chosen an occupied square
    if (document.getElementById(n).innerHTML =="X" || document.getElementById(n).innerHTML=="O"){
      document.getElementById('message2').innerHTML="That square is already used"
      placeMarker(n);
    }
    else {
      document.getElementById(n).innerHTML= gameMarker;
    }
    determineWinner(gameMarker);
    turn = turn+1;
    console.log(turn);
    turnController(turn);

}


//determines winner
function determineWinner(n){
    //declared variables for each square's content
    var square1 = document.getElementById('sq1').innerHTML;
    var square2 = document.getElementById('sq2').innerHTML;
    var square3 = document.getElementById('sq3').innerHTML;
    var square4 = document.getElementById('sq4').innerHTML;
    var square5 = document.getElementById('sq5').innerHTML;
    var square6 = document.getElementById('sq6').innerHTML;
    var square7 = document.getElementById('sq7').innerHTML;
    var square8 = document.getElementById('sq8').innerHTML;
    var square9 = document.getElementById('sq9').innerHTML;

    //if 3 of the same marker in a row declare winner
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
        var gameBoard = document.getElementById('container');
        gameBoard.style.pointerEvents = 'none';
    }


}