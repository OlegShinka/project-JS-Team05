
const modal = document.querySelector('.modal-rec-window');
const recipeInfo = document.querySelector('.js-modal-rec');
const btnClose = document.querySelector('.modal-rec-close');
const btnAdd = document.querySelector('.modal-rec-btn-add');
const btnRating = document.querySelector('.modal-rec-btn-rating');

btnClose.addEventListener('click', handlerClose);
btnAdd.addEventListener('click', handlerAddBtn);
btnRating.addEventListener('click', handlerRatingBtn);

function handlerClose() {
  modal.style.display = 'none';
  btnClose.removeEventListener('click', handlerClose);
}

function handlerAddBtn() {}
function handlerRatingBtn() {}

export function fetchRecipe(recipeId) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = '/recipes';

  return fetch(`${BASE_URL}${END_POINT}/${recipeId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log('YES');
    return response.json();
  });
}

export function markupRecipeModal(arr) {
  let preview = `<img src="" alt="" />`;
  // let preview = `<img src="${arr.thumb}" alt="${arr.title}" class="recipe-img" />`;
  // if (arr.youtube) {
  //   console.log(arr.youtube);
  //   preview = `<video src="${arr.youtube}"></video>`;
  // }

  let tags = `<div class="modal-rec-tag-text">#${arr.tags[0]}</div>`;
  for (let i = 1; i < 3; i += 1) {
    tags += `<div class="modal-rec-tag-text">#${arr.tags[i]}</div>`;
  }

  let ingredients = `
        <div class="modal-rec-ingr-one">
          <div class="modal-rec-ingr-name">${arr.ingredients[0].name}</div>
          <div class="modal-rec-ingr-qnt">${arr.ingredients[0].measure}</div>
        </div>
        <div class="modal-rec-ingr-line"></div>`;
  for (let i = 1; i < arr.ingredients.length; i += 1) {
    ingredients += `<div class="modal-rec-ingr-one">
          <div class="modal-rec-ingr-name">${arr.ingredients[i].name}</div>
          <div class="modal-rec-ingr-qnt">${arr.ingredients[i].measure}</div>
        </div>
        <div class="modal-rec-ingr-line"></div>`;
  }

  let stars = `
      <svg class="modal-star-icon" width="18" height="18">
        <use href="./img/symbol-defs.svg#icon-Star"></use>
      </svg>
      <svg class="modal-star-icon" width="18" height="18">
        <use href="./img/symbol-defs.svg#icon-Star"></use>
      </svg>
      <svg class="modal-star-icon" width="18" height="18">
        <use href="./img/symbol-defs.svg#icon-Star"></use>
      </svg>
      <svg class="modal-star-icon" width="18" height="18">
        <use href="./img/symbol-defs.svg#icon-Star"></use>
      </svg>
      <svg class="modal-star-icon" width="18" height="18">
        <use href="./img/symbol-defs.svg#icon-Star"></use>
      </svg>`;

  const card = `
      <h2 class="modal-rec-title">${arr.title}</h2>
      <div class="modal-rec-img">
        ${preview}
      </div>
      <div class="modal-rec-flex">
        <div class="modal-rec-tags">
          ${tags}        
        </div>
        <div class="modal-rec-rating">
          <div class="modal-rec-rat-text">${arr.rating}</div>
          <div class="modal-rec-rat-stars">${stars}</div>
          <div class="modal-rec-rat-time">${arr.time}</div>
        </div>
      </div>
      <div class="modal-rec-ingr">
        ${ingredients}
      </div>
      <div class="modal-rec-instr">${arr.instructions}</div>`;
  return card;
}


// import { fetchRecipe } from "../js/modal-rec";
// import { markupRecipeModal } from "../js/modal-rec";
// const recipeInfo = document.querySelector('.js-modal-rec');

// fetchRecipe('6462a8f74c3d0ddd28897fc1')
//   .then(data => {
//     console.log(data);
//     recipeInfo.innerHTML = markupRecipeModal(data);
//   })
//   .catch(err => console.log(err));