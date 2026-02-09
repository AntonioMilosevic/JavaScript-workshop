'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(
    'click',
    openModal,
    // console.log('Button clicked');
    // modal.classList.remove('hidden'); // bez tacke '.hidden'
    // overlay.classList.remove('hidden');
  );

btnCloseModal.addEventListener(
  'click',
  closeModal,
  // modal.classList.add('hidden');
  //overlay.classList.add('hidden');
);

// ove kose linije od linije prave "komentar"
overlay.addEventListener(
  'click',
  closeModal,
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
);
