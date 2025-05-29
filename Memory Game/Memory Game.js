function getRandQuestions() {
    const questions = ["The man ran down the street to catch the ball.", "The person says they want a dog.", "The girl doesn't like her neighborhood.", "The basketball player made a three pointer."];
    return questions [Math.floor(Math.random() * questions.length)];
}

function quest() {
    document.getElementById("questions").innerHTML = getRandQuestions();
    document.getElementById("tasks").innerHTML = "";
}

let timeLeft = 5;
const timerDisplay = document.getElementById("timer");

function countdown() {
    if (timeLeft >= 0) {
        timerDisplay.textContent = `${timeLeft}`;
        timeLeft--;
    } else {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(countdown, 1000);