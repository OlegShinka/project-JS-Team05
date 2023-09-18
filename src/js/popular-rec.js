import { getPopularRecipes } from '../api/popular-rec-fetch';
import { createModal } from './modal-rec';

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

//відмальовування списку популярних рецептів
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

//виклик модального вікна по кліку на рецепт
function showRecipeDitails(evt) {
  const id = evt.currentTarget.id;
  createModal(id);
}
