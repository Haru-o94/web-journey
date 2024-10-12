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

// reset Element
score0Element.textContent = 0;
score1Element.textContent = 0;
let activePlyer = 0;
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
    document.getElementById(`current--${activePlyer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlyer}`).textContent = 0;
    currentScore = 0;
    activePlyer = activePlyer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
  }
});
