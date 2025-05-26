const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

var userScore = 0;
var cpuScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function push(userChoice) {
    const computerChoice = getComputerChoice();

    let message = "";

    getComputerChoice();
    if ((userChoice === rock && computerChoice === "scissors") || (userChoice === paper && computerChoice === "rock") || (userChoice === scissors && computerChoice === "paper")) {
        userScore++;
        document.getElementById("Wins").textContent = userScore;
        message = "The user is the winner";
    } else if (userChoice === computerChoice) {
        message = "It's a tie";
    } else {
        cpuScore++;
        document.getElementById("Loses").textContent = cpuScore;
        message = "The cpu is the winner";
    }

    document.getElementById("winner").innerHTML = message;
}

rock.addEventListener("click", () => push(rock));
paper.addEventListener("click", () => push(paper));
scissors.addEventListener("click", () => push(scissors));
