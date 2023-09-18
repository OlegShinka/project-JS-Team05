import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

import { fetchInfoRecipe } from '../api/recipe-info-fetch';
import {
  markupRecipeModal,
  markupRecipeModalMobile,
} from './templates/recipe-modal-markup';
import { addToFav, isFav } from '../api/fav-localStarage';

const modal = document.querySelector('.modal-rec-backdrop');
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

function handlerClose() {
  modalRecipe.close();
  modal.classList.toggle('is-hidden');
}

let recipeId = '';
function handlerRecipeCont(evt) {
  if (!evt.target.classList.contains('js-see-recipe')) {
    return;
  } else {
    modal.classList.toggle('is-hidden');
    recipeId = evt.target.dataset.id;
    fetchInfoRecipe(recipeId)
      .then(data => {
        if (matchMedia('(max-width: 570px)').matches) {
          recipeInfo.innerHTML = markupRecipeModalMobile(data);
        } else recipeInfo.innerHTML = markupRecipeModal(data);
      })
      .catch(err => console.log(err));

    modalRecipe.show();
    if (modalRecipe.show()) {
      document.addEventListener('keydown', evt => {
        if (evt.code === 'Escape') {
          modalRecipe.close();
          modal.classList.toggle('is-hidden');
        }
      });
      modal.addEventListener('click', () => {
        modalRecipe.close();
        modal.classList.toggle('is-hidden');
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
    const cardHeart = document.querySelector(
      `.thumb[data-id="${evt.target.parentNode.dataset.id}"] .fav-icon`
    );
    cardHeart.classList.add('is-fav');
  }
}

function handlerRatingBtn() {}
