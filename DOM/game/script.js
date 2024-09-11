"use strict";

const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const current0El = document.querySelector("#current-0");
const current1El = document.getElementById("current-1");
const btnNew = document.querySelector(".restart");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const diceEl = document.querySelector(".dice");

//* starting condition
let score, currentScore, activePlayer, playing;

function init() {
  score = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player-winner");
  player1El.classList.remove("player-winner");

  player0El.classList.add("player-active");
  player1El.classList.remove("player-active");
}
init();

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player-active");
  player1El.classList.toggle("player-active");
};

//* Roll btn functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. generate random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    // 2. display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `./images/dice-${dice}.svg`;

    // 3. check for dice 1? if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      // current0El.textContent = currentScore; // change later
      document.querySelector(`#current-${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

//* Hold btn functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. add current score to active player's score
    score[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      player0El.classList.remove("player-active");
      player1El.classList.remove("player-active");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
    } else {
      switchPlayer();
    }
  }
});

//* New btn functionality
btnNew.addEventListener("click", init);
