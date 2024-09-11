"use strict";

/*
console.log(document.querySelector(".message"));
document.querySelector(".message").textContent = "You won!";
document.querySelector(".number").textContent = 13;

document.querySelector(".guess").value = 123;

function greeting() {
  console.log("Hello button");
}
// document.querySelector(".check").addEventListener("click", greeting);
*/
let chances;
let randomNumber;
let highScore = 0;

function init() {
  chances = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  console.log(randomNumber);
  document.querySelector(".message").textContent = "Game Status...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".chance").textContent = chances;
  document.querySelector(".hScore").textContent = highScore;
  document.querySelector("body").style.backgroundColor = "#111111";
}
init();

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
  let guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    displayMessage("No Number 🚫");
  } else if (guessNumber === randomNumber) {
    displayMessage("Correct Number 🏆");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = randomNumber;
    if (chances > highScore) {
      highScore = chances;
      document.querySelector(".hScore").textContent = highScore;
    }
  } else if (guessNumber !== randomNumber) {
    if (chances > 1) {
      displayMessage(guessNumber > randomNumber ? "Too High ☝️" : "Too Low 👇");
      chances--;
      document.querySelector(".chance").textContent = chances;
    } else {
      chances = 0;
      document.querySelector(".chance").textContent = chances;
      document.querySelector(".message").textContent = "Game Over 💥";
    }
  }
});

document.querySelector(".restart").addEventListener("click", init);
