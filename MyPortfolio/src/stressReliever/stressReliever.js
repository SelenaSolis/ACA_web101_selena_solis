function randomPoop(){
    var square = Math.floor(Math.random()*24)+ 2;
    if (square == 5 || square == 21){
        randomPoop();
    }
    else{
        console.log(square);
        document.getElementById("sq" + square).style.display = "block";
    }
}