const quotes = [
    "Believe you can and you're halfway there.",
    "The future depends on what you do today.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does.",
    "With the new day comes new strength and new thoughts."
];

const colors = ["#FFC107", "#E91E63", "#4CAF50", "#00BCD4", "#FF5722", "#9C27B0"];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('generate-btn');

button.addEventListener('click', () => {
    // Generate random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;

    // Change background color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
