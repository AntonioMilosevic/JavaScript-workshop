'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0'); // # sluzi za id"score--0" , tacka je za klase
const score1El = document.getElementById('score--1'); // getElementById je brze od querySelector
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
