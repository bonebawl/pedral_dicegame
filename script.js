function roll(){
    var diceNum = parseInt(Math.random()*6)+1;
    document.getElementById("diceNum").innerHTML = diceNum;
    document.getElementById("winOrNot").innerHTML = "You rolled " + diceNum+ ". "+check(diceNum);
}

function check(value){
    var diceString;
    if(value > 3){
        diceString = "You win!";
        return diceString
    }else{
        diceString = "You lose!";
        return diceString
    }
}