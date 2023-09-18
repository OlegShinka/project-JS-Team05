import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

import { fetchInfoRecipe } from '../api/recipe-info-fetch';
import { markupRecipeModal } from './templates/recipe-modal-markup';

const modal = document.querySelector('.modal-rec-backdrop');
const recipeInfo = document.querySelector('.js-modal-rec');
const btnSeeRecipe = document.querySelector('.js-see-recipe');
const btnClose = document.querySelector('.modal-rec-close');
const btnAdd = document.querySelector('.modal-rec-btn-add');
const btnRating = document.querySelector('.modal-rec-btn-rating');

const modalRecipe = basicLightbox.create(modal);

console.log(btnSeeRecipe);
// btnSeeRecipe.addEventListener('click', handlerSeeRecipeBtn);
btnClose.addEventListener('click', handlerClose);
btnAdd.addEventListener('click', handlerAddBtn);
btnRating.addEventListener('click', handlerRatingBtn);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

function handlerClose() {
  modalRecipe.close();
  toggleModal();
}

function handlerAddBtn() {}
// function handlerSeeRecipeBtn() {}
function handlerRatingBtn() {}

// function handlerSeeRecipeBtn() {
//   toggleModal();
//   fetchInfoRecipe(recipeId)
//     .then(data => {
//       recipeInfo.innerHTML = markupRecipeModal(data);
//     })
//     .catch(err => console.log(err));

//   modalRecipe.show();
//   if (modalRecipe.show()) {
//     document.addEventListener('keydown', evt => {
//       if (evt.code === 'Escape') {
//         modalRecipe.close();
//       }
//     });
//   }
// }
