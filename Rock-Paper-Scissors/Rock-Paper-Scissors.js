const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

function push() {
    if (rock && scissors) {
        const result = ("Rock is the winner")
    }   
    if (rock && paper) {
        const result = ("Paper is the winner")
    }   
    if (paper && scissors) {
        const result = ("Scissors is the winner")
    }   
    if (scissors && scissors || rock && rock || paper && paper) {
        const result = ("It's a tie")
    }
    const text = result;
    const  = document.getElementById("winner").innerHTML;

    text.appendChild("result")
}