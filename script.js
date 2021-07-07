'use strict';
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const gameLost = function () {
  displayMessage('💥 You lost the game!');
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('.score').textContent = 0;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!!!');

    //When player is correct
  } else if (guess === number) {
    displayMessage('🎉 Correct Guess!!! ');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? '📈 Guess Too High!' : '📉 Guess Too Low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameLost();
    }
  }
});

//Again button configuration
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
