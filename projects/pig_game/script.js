"use strict";

const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0Score = document.querySelector("#current--0");
const player1Score = document.querySelector("#current--1");

// reset Element
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;

// Rolling Dice
btnRoll.addEventListener("click", function () {
  // Generate Dice Number
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display The Dice
  diceElement.src = `dice-${dice}.png`;
  diceElement.classList.remove("hidden");

  // check if not 1 then continue play , else swtich player
  if (dice !== 1) {
    currentScore += dice;
    player0Score.textContent = currentScore;
  } else {
    player0Score.textContent = 0;
  }
});
