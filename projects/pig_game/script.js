"use strict";

const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");

// reset html element text
const scores = [0, 0];
score0Element.textContent = 0;
score1Element.textContent = 0;
let activePlayer = 0;
let currentScore = 0;
let playing = true;
diceElement.classList.add("hidden");

// function for switching player if hold or get 1
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

// Rolling Dice
btnRoll.addEventListener("click", function () {
  if(playing) {
  // Generate Dice Number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display The Dice
    diceElement.src = `dice-${dice}.png`;
    diceElement.classList.remove("hidden");

    // check if not 1 then continue play , else swtich player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// if player hold switch to anthor player
btnHold.addEventListener("click", function () {
  if (playing) {
    // adding current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

      // check if player win >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
        diceElement.classList.add('hidden');
        
    } else {
    switchPlayer();
  }
}
});

// reset to a new game
btnNew.addEventListener('click', function() {
  //1. reset the score
  score0Element.textContent = 0
  score1Element.textContent = 0 

  // 2. reset the current score
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  // 3. remove the player winner class
  document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove("player--winner");
  document
        .querySelector(`.player--0`)
        .classList.add("player--active");
        
  // 4. reset the variable
  playing = true;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  diceElement.classList.add('hidden');
});