// script.js
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const resultElement = document.getElementById('result');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultElement.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        resultElement.textContent = `Congratulations! You've guessed the number in ${attempts} attempts.`;
    } else if (guess < targetNumber) {
        resultElement.textContent = 'Too low! Try again.';
    } else {
        resultElement.textContent = 'Too high! Try again.';
    }
}
