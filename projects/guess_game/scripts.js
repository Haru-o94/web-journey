let secertNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// show the number
// document.querySelector(".number").textContent = secertNumber;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

// reset all to default value
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // check if the guess input is empty
  if (!guess) {
    displayMessage('⛔ No Number');

    // check if guess is equal to secertNumber
  } else if (guess == secertNumber) {
    displayMessage('🎉Correct Answer');

    // change the style page if correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secertNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // if the guess greater than secertNumber print meassge
  } else if (guess !== secertNumber) {
    if (score > 1) {
      displayMessage(guess > secertNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🔴 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
