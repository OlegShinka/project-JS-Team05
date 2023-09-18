import * as basicLightbox from 'basiclightbox';
// import '/node_modules/basiclightbox/dist/basicLightbox.min.css';
import {
  getPopularRecipes,
  getOnePopularRecipe,
} from '../api/popular-rec-fetch';
import { markupRecipeModal } from './templates/recipe-modal-markup';

const popularItems = document.querySelector('.popular-items');

getPopularRecipes()
  .then(data => {
    createMarkUp(data);
    const popularRecItem = document.querySelectorAll('.popular-item');
    for (const item of popularRecItem) {
      item.addEventListener('click', showRecipeDitails);
    }
  })
  .catch(error => console.log(error.message));

//відмальовка списку популярних рецептів
function createMarkUp(arr) {
  const markup = arr
    .map(
      ({
        description,
        title,
        preview,
        _id,
      }) => `<div id=${_id} class="popular-item">
    <img
      class="popular-item-img"
      src="${preview}"
      alt="${title}"
    />
    <div class="popular-item-text-content">
      <h3 class="popular-item-title">${title}</h3>
      <p  class="popular-item-descr">${description}</p>
    </div>
  </div>`
    )
    .join('');
  popularItems.insertAdjacentHTML('beforeend', markup);
}

//по запиту на бекенд по ID викликає модальне вікно з детальною інфо
// function showRecipeDitails(evt) {
//   getOnePopularRecipe(evt.currentTarget.id)
//     .then(data => {
//       // console.log(data);
//       const cardRec = markupRecipeModal(data);
//       // console.log(cardRec);
//       const instance = basicLightbox.create(cardRec);
//       instance.show();
//       document.addEventListener("keydown", (event) => {
//         if (event.code === "Escape") {
//           instance.close();
//         }
//       });
//     })
//     .catch(error => console.log(error.message));
// }
