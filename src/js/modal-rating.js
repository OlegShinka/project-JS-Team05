import debounce from 'lodash.debounce';
import { modalRating } from './modal-rec';

const modalBackdropRating = document.querySelector('.modal-rating-backdrop');
const form = document.querySelector('.js-modal-rating-form');
const btnClose = document.querySelector('.modal-rating-close');
const inputEmail = document.querySelector('.modal-rating-input');
const radioStars = document.querySelector('.js-modal-rating-stars');
const number = document.querySelector('.modal-rating-number');

form.addEventListener('submit', handlerSend);
btnClose.addEventListener('click', handlerClose);
inputEmail.addEventListener('input', debounce(handlerInput, 300));
radioStars.addEventListener('change', hahdlerRadio);

function handlerClose() {
  modalRating.close();
  modalBackdropRating.classList.add('is-hidden');
}

const STORAGE_KEY = 'input-email';
let storageData = {
  storEmail: '',
};
let storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (storage) {
  inputEmail.value = storage.storEmail;
}

let num = 0;
function hahdlerRadio(evt) {
  num = evt.target.value;
  number.textContent = `${num}.0`;
}

let email = '';
function handlerInput() {
  email = inputEmail.value;

  storageData.storEmail = email;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}

function handlerSend(evt) {
  evt.preventDefault();

  if (!num) {
    alert('Rate this recipe!');
  } else {
    if (!inputEmail.value) {
      alert('Enter your email!');
    } else {
      fetchRating();
    }
  }

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fetchRating() {}

export function showModalRating() {
  modalBackdropRating.classList.remove('is-hidden');
  modalRating.show();
  if (modalRating.show()) {
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        modalRating.close();
        modalBackdropRating.classList.add('is-hidden');
      }
    });
    modalBackdropRating.addEventListener('click', evt => {
      if (evt.target === evt.currentTarget) {
        modalRating.close();
        modalBackdropRating.classList.add('is-hidden');
      }
    });
  }
}
