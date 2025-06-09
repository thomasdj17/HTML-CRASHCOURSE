function getRandQuestions() {
    const questions = ["The man ran down the street to catch the ball.", "The person says they want a dog.", "The girl doesn't like her neighborhood.", "The basketball player made a three pointer."];
    return questions [Math.floor(Math.random() * questions.length)];
}

function startButton() {
    document.getElementById("questions").innerHTML = getRandQuestions();
    document.getElementById("tasks").innerHTML = "";
}

let timeLeft = 5;
const timerDisplay = document.getElementById("timer");
let timerInterval;

function countdown() {
    if (timeLeft >= 0) {
        timerDisplay.textContent = `${timeLeft}`;
        timeLeft--;
    } else {
        clearInterval(timerInterval);
    }
}

document.getElementById("startButton").addEventListener("click", function() {
    clearInterval(timerInterval);
    timeLeft = 5;
    timerInterval = setInterval(countdown, 1000);
    if(timerInterval === 0) {
        document.getElementById("questions").innerHTML = "";
        
    }
});