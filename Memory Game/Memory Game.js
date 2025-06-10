function getRandQuestions() {
    const questions = ["The man ran down the street to catch the ball.", "The person says they want a dog.", "The girl doesn't like her neighborhood.", "The basketball player made a three pointer."];
    return questions [Math.floor(Math.random() * questions.length)];
}

function startButton() {
    document.getElementById("questions").innerHTML = getRandQuestions();
    document.getElementById("tasks").innerHTML = "";
}

let timeLeft = 5;
let timerDisplay = document.getElementById("timer");
let timerInterval;



function countdow() {
    if (timeLeft >= 0) {
        timerDisplay.textContent = `${timeLeft}`;
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        timeLeft = 5;
        document.getElementById("startButton").innerHTML = anytime;
    }
}


document.getElementById("startButton").addEventListener("click", function() {
    clearInterval(timerInterval);
    timeLeft = 5;
    timerInterval = setInterval(countdown, 1000);

    if (timeLeft <= 0) {
        ;
    }
});
