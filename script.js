'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉correct number !';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number';

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'green';

        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
        }


    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📈 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😥 You lost the game';
            document.querySelector('.score').textContent = 0;
        }


        // when guess is too high

        // } else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📈 Too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '😥 You lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }

        //     // when guess is too low
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📈 Too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '😥 You lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})