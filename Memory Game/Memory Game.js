function getRandQuestions() {
    const questions = ["The man ran down the street to catch the ball.", "The person says they want a dog.", "The girl doesn't like her neighborhood.", "The basketball player made a three pointer."];
    return questions [Math.floor(Math.random() * questions.length)];
}

function quest() {
    document.getElementById("questions").innerHTML = getRandQuestions();
    document.getElementById("tasks").innerHTML = "";
}

function time() {
    for (let i = .00; i < 5.00; i++);
    return value[i];
}

document.getElementById("timer").value = value[i];
