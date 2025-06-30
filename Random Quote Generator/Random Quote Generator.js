function generateQuote() {
    const shuffled = [...quotes];
    for(let i = quotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled[0];
}

function displayQuote() {
    const quoteText = generateQuote();
    return quoteText;
}

const quotes = [
    `"The purpose of our lives is to be happy." — Dalai Lama`,
    `"Life is what happens when you're busy making other plans." — John Lennon`,
    `"Get busy living or get busy dying." — Stephen King`,
    `"You only live once, but if you do it right, once is enough." — Mae West`,
    `"Many of life’s failures are people who did not realize how close they were to success when they gave up."– Thomas A. Edison`,
];

const randomQuotes = displayQuote();
document.getElementById("quote").innerHTML = randomQuotes;
