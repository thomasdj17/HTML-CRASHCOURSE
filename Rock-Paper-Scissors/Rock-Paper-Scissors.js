const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

function push() {
    if (rock && scissors) {
        var result = "Rock is the winner!!!";
    }   
    if (rock && paper) {
        var result = "Paper is the winner!!!";
    }   
    if (paper && scissors) {
        var result = "Scissors is the winner!!!";
    }   
    if (scissors && scissors || rock && rock || paper && paper) {
        var result = "It's a tie!!!";
    }
    
    document.getElementById("winner").innerHTML = result;
}

const user = 1;
const cpu = 2;
const winner = choices;

function score() {
    if (winner === user) {
        let (document.getElementById("Wins").value = i++ )
    } else {
        let (document.getElementById("Loses").value = i++)
    }
}