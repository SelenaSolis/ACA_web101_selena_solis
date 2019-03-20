var equalClicked = false;

function number(dig){
    return document.querySelector("#result").value += dig;
}

function equalFunc(num1, operator){
    equal.addEventListener('click', function(){
        var num2 = document.querySelector("#result").value;
        if (operator == "add"){
            var sum = num1 + num2;
            console.log(sum);
        }
    })
    
}


function arith(n){
    var operator = n;
    var num1 = document.querySelector("#result").value;
    document.querySelector("#result").value = "";
    equalFunc(num1, operator);
}
