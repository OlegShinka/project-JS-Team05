import { createRecipesMarkup } from './templates/recipes-markup';
import {
  getFavArray,
  isFav,
  deleteFromFav,
  addToFav,
} from '../api/fav-localStarage';
import { createPagination } from './pagination';
import { Notify } from 'notiflix';
import { postOrderNow } from '../api/ordernow-modal-fetch';

const elements = {
  recipesCont: document.querySelector('.recipes-container'),
  paginationCont: document.querySelector('#tui-pagination-container'),
  pagination: undefined,
  noFav: document.querySelector('.no-fav'),
  categoriesFilter: document.querySelector('.categories-filter'),
  otherCat: document.querySelector('.other-categories'),
};

startRecipes();

elements.recipesCont.addEventListener('click', handleFav);
elements.categoriesFilter.addEventListener('click', handleCatChange);

function handleFav(e) {
  if (!e.target.classList.contains('js-fav')) {
    return;
  }
  const { id } = e.target.dataset;
  if (isFav(id)) {
    deleteFromFav(id);
    startRecipes();
    Notify.success('Recipe deleted from favotites');
  } else {
    addToFav(id);
    e.target.parentElement.classList.add('is-fav');
    Notify.success('Recipe added to favotites');
  }
}

function startRecipes() {
  let fav = getFavArray();
  if (!fav || fav.length === 0) {
    elements.recipesCont.innerHTML = '';
    elements.otherCat.innerHTML = '';
    elements.noFav.classList.remove('hidden');
    elements.paginationCont.classList.add('hidden');
    return;
  }
  const categories = fav.map((el, idx, arr) => {
    if (idx === arr.findIndex(elem => elem.category === el.category)) {
      return el.category;
    }
  });
  elements.otherCat.innerHTML = categoryFilterMarkup(categories);
  const perPage = matchMedia('(max-width: 1109px)').matches ? '8' : '9';
  elements.recipesCont.innerHTML = createRecipesMarkup(fav);
  elements.pagination = createPagination({
    page: 1,
    perPage: perPage,
    totalPages: fav.length / Number(perPage),
  });
}

function categoryFilterMarkup(arr) {
  return arr
    .map(el => {
      if (el) {
        return `<button type="button" class="category-btn" data-cat="${el}">${el}</button>`;
      }
    })
    .join('');
}

function handleCatChange(e) {
  if (
    !e.target.classList.contains('category-btn') ||
    e.target.classList.contains('active')
  ) {
    return;
  }
  let fav = getFavArray().filter(({ category }) => {
    if (e.target.dataset.cat === 'all') {
      return true;
    }
    return category === e.target.dataset.cat;
  });
  document.querySelector('.category-btn.active').classList.remove('active');
  e.target.classList.add('active');
  const perPage = matchMedia('(max-width: 1109px)').matches ? '8' : '9';
  elements.recipesCont.innerHTML = createRecipesMarkup(fav);
  elements.pagination = createPagination({
    page: 1,
    perPage: perPage,
    totalPages: fav.length / Number(perPage),
  });
}

//Order now modal

const modal = document.querySelector('[data-modal-overnow]');
const closeWindowMob = document.querySelector('[data-modal-close]');
const form = document.querySelector('[name = subscribe-orderNow]');

closeWindowMob.addEventListener('click', onClick);
form.addEventListener('submit', onSabmit);
function onSabmit(event) {
  event.preventDefault();
  const data = event.currentTarget;
  const order = {
    name: data.name_customers.value,
    phone: data.tel_customers.value,
    email: data.email_customers.value,
    comment: data.comment_customers.value,
  };

  postOrderNow(order).catch(error => {
    Notify.failure('Error order now!');
  });
}
function onClick() {
  modal.classList.toggle('is-hidden');
}
