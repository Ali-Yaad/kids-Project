// Color Changer
document.getElementById('color-button').addEventListener('click', function() {
    const colors = ['#ffcccb', '#98fb98', '#87ceeb', '#ffd700', '#dda0dd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Fun Facts
const facts = [
    'A group of flamingos is called a "flamboyance".',
    'Octopuses have three hearts!',
    'Bananas are berries, but strawberries are not.',
    'A day on Venus is longer than a year on Venus.',
    'Elephants are the only animals that can’t jump.'
];
document.getElementById('fact-button').addEventListener('click', function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;
});

// Quiz
const quizButtons = document.querySelectorAll('.quiz-option');
quizButtons.forEach(button => {
    button.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-answer') === 'correct';
        document.getElementById('quiz-result').textContent = isCorrect ? 'Correct! 🎉' : 'Oops, try again! 😞';
    });
});
