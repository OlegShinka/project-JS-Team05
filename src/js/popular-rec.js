import { getPopularRecipes } from "../api/popular-rec-fetch";

const popularItems = document.querySelector(".popular-items");

getPopularRecipes()
    .then(data => createMarkUp(data))
    .catch(error => console.log(error.message));


// const popularRecItems = document.querySelector(".popular-items");
// console.log(popularRecItems);

// popularRecItems.addEventListener("click", showRecipeDitails);

// function showRecipeDitails(evt){
//     console.log(evt.target)
// }

function createMarkUp(arr) {
    const markup = arr.map(({description, title, preview, _id}) => `<div id=${_id} class="popular-item">
    <img
      class="popular-item-img"
      src="${preview}"
      alt="${title}"
    />
    <div class="popular-item-text-content">
      <h3 class="popular-item-title">${title}</h3>
      <p  class="popular-item-descr">${description}</p>
    </div>
  </div>`).join("");
  popularItems.insertAdjacentHTML('beforeend', markup);
  }
  
