import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

import { fetchInfoRecipe } from '../api/recipe-info-fetch';
import { markupRecipeModal } from './templates/recipe-modal-markup';
import { addToFav, isFav } from '../api/fav-localStarage';

const modal = document.querySelector('.modal-rec-backdrop');
const window = document.querySelector('.modal-rec-window');
const recipeInfo = document.querySelector('.js-modal-rec');
const recipesCont = document.querySelector('.recipes-container');
const btnClose = document.querySelector('.modal-rec-close');
const btnAdd = document.querySelector('.modal-rec-btn-add');
const btnRating = document.querySelector('.modal-rec-btn-rating');

const modalRecipe = basicLightbox.create(modal);

recipesCont.addEventListener('click', handlerRecipeCont);
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

let recipeId = '';
function handlerRecipeCont(evt) {
  if (!evt.target.classList.contains('js-see-recipe')) {
    return;
  } else {
    recipeId = evt.target.dataset.id;
    window.dataset.id = evt.target.dataset.id;

    toggleModal();
    fetchInfoRecipe(recipeId)
      .then(data => {
        recipeInfo.innerHTML = markupRecipeModal(data);
      })
      .catch(err => console.log(err));

    modalRecipe.show();
    if (modalRecipe.show()) {
      document.addEventListener('keydown', evt => {
        if (evt.code === 'Escape') {
          modalRecipe.close();
          toggleModal();
        }
      });
      modal.addEventListener('click', () => {
        modalRecipe.close();
        toggleModal();
      });
    }
  }
}

function handlerAddBtn(evt) {
  if (isFav(recipeId)) {
    Notiflix.Notify.info('Recipe is already in Favorites!');
  } else {
    addToFav(recipeId);
    Notiflix.Notify.success('Recipe added to Favorites!');
    // e.target.parentElement.classList.add('is-fav');
  }
  // }
}

function handlerRatingBtn() {}
