import debounce from 'lodash.debounce';
import { modalRating } from './modal-rec';
import { patchRating } from '../api/rating-patch';

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

  let star = form.querySelector('.star-radio-label');
  for (let i = 1; i <= 5; i += 1) {
    if (
      star
        .querySelector('.rating-icon')
        .classList.contains('rating-icon-orange')
    ) {
      star.querySelector('.rating-icon').classList.remove('rating-icon-orange');
    }
    star = star.nextElementSibling;
  }

  star = form.querySelector('.star-radio-label');
  for (let i = 1; i <= num; i += 1) {
    if (star.querySelector('.star-radio').value == i) {
      star.querySelector('.rating-icon').classList.add('rating-icon-orange');
    }
    star = star.nextElementSibling;
  }
}

let email = '';
function handlerInput() {
  email = inputEmail.value;

  storageData.storEmail = email;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}

function handlerSend(evt) {
  evt.preventDefault();

  // const recipeId = '6462a8f74c3d0ddd28897fc1';

  if (!num) {
    alert('Rate this recipe!');
  } else {
    if (!inputEmail.value) {
      alert('Enter your email!');
    } else {
      // patchRating(recipeId, num)
      //   .then(data => {
      //     console.log(data);
      //     return data;
      //   })
      //   .catch(err => console.log(err));
    }
  }

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

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
