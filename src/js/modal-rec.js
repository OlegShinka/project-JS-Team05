import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

import { fetchInfoRecipe } from '../api/recipe-info-fetch';
import {
  markupRecipeModal,
  markupRecipeModalMobile,
} from './templates/recipe-modal-markup';
import { addToFav, isFav } from '../api/fav-localStarage';
import { showModalRating } from './modal-rating';

const modal = document.querySelector('.modal-rec-backdrop');
const recipeModal = document.querySelector('.modal-rec-window');
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
  modal.classList.add('is-hidden');
}

let recipeId = '';
function handlerRecipeCont(evt) {
  if (!evt.target.classList.contains('js-see-recipe')) {
    return;
  } else {
    recipeId = evt.target.dataset.id;
    recipeModal.dataset.id = recipeId;
    createModal(recipeId);
  }
}

export function createModal(recipeId) {
  fetchInfoRecipe(recipeId)
    .then(data => {
      if (matchMedia('(max-width: 768px)').matches) {
        recipeInfo.innerHTML = markupRecipeModalMobile(data);
      } else recipeInfo.innerHTML = markupRecipeModal(data);
    })
    .catch(err => console.log(err));

  modal.classList.remove('is-hidden');
  modalRecipe.show();
  if (modalRecipe.show()) {
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        modalRecipe.close();
        modal.classList.add('is-hidden');
      }
    });
    modal.addEventListener('click', () => {
      modalRecipe.close();
      modal.classList.add('is-hidden');
    });
  }
}

function handlerAddBtn(evt) {
  if (isFav(recipeId)) {
    Notiflix.Notify.info('Recipe is already in Favorites!', {
      width: '300px',
      distance: '40px',
      cssAnimationStyle: 'from-top',
      borderRadius: '15px',
      fontFamily: 'Inter',
      fontSize: '14px',
      info: {
        background: '#9BB537',
        textColor: '#fff',
        notiflixIconColor: '#000',
      },
    });
  } else {
    addToFav(recipeId);
    Notiflix.Notify.info('Recipe added to Favorites!', {
      width: '300px',
      distance: '40px',
      cssAnimationStyle: 'from-top',
      borderRadius: '15px',
      fontFamily: 'Inter',
      fontSize: '14px',
      info: {
        background: '#9BB537',
        textColor: '#fff',
        notiflixIconColor: '#000',
      },
    });
    const cardHeart = document.querySelector(
      `.thumb[data-id="${evt.target.parentNode.dataset.id}"] .fav-icon`
    );
    cardHeart.classList.add('is-fav');
  }
}

export const modalRating = basicLightbox.create(modal);
function handlerRatingBtn() {
  showModalRating();
}
