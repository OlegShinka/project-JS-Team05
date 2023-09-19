import debounce from 'lodash.debounce';

const form = document.querySelector('.js-modal-rating-form');
const inputEmail = document.querySelector('.modal-rating-input');
const radioStars = document.querySelector('.js-modal-rating-stars');
const number = document.querySelector('.modal-rating-number');

form.addEventListener('submit', handlerSend);
inputEmail.addEventListener('input', debounce(handlerInput, 300));
radioStars.addEventListener('change', hahdlerRadio);

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
