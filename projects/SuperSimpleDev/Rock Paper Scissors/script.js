let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

document.querySelector('.auto-play-button').addEventListener('click', () => {
    autoPlay(click);
});

document.querySelector('body').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        autoPlay();
    }
});

document.querySelector('.reset-score-button').addEventListener('click', () => {
    resetScore()
})

document.querySelector('body').addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        resetScore();
    }
})

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.auto-play-button').innerHTML = 'Stop Playing';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
    }
};

function resetScore() {
    document.querySelector('.are-you-sure')
        .innerHTML = `Are you sure you want to reset the score?<br>
        <button class="yes">Yes</button>
        <button class="no">No</button>`;

    document.querySelector('.yes').addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
        document.querySelector('.are-you-sure').innerHTML = '';
    });
    document.querySelector('.no').addEventListener('click', () => {
        document.querySelector('.are-you-sure').innerHTML = '';
    })
}

document.querySelector('.rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.paper-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.scissors-button').addEventListener('click', () => {
    playGame('scissors');
});

document.querySelector('body').addEventListener('keydown', (event) => {
    if (event.key === '1') {
        playGame('rock');
    } else if (event.key === '2') {
        playGame('paper');
    } else if (event.key === '3') {
        playGame('scissors');
    }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML =
        `You <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties}`;
}