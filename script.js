const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultEl = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        displayChoices(playerChoice, computerChoice);
        const winner = determineWinner(playerChoice, computerChoice);
        updateScore(winner);
    });
});

function displayChoices(playerChoice, computerChoice) {
    const icons = {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    };

    playerChoiceEl.textContent = icons[playerChoice];
    computerChoiceEl.textContent = icons[computerChoice];
}

function determineWinner(player, computer) {
    if (player === computer) {
        resultEl.textContent = "It's a tie!";
        resultEl.style.color = 'black'; 
        return 'tie';
    }

    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        resultEl.textContent = 'You win!';
        resultEl.style.color = 'green'; 
        return 'player';
    } else {
        resultEl.textContent = 'Computer wins!';
        resultEl.style.color = 'red'; 
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    playerScoreEl.textContent = `Player: ${playerScore}`;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
}
