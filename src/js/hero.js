// завантажуємо скріпт пагінації
// console.log('завантажуємо скріпт пагінації');
import '../api/swiper-lib';

import { getEvent } from '../api/hero-fetch';
const swiper = document.querySelector('.swiper-wrapper');
console.log('swiper', swiper);
// console.log('отримуЄмо з бекенда данні');
//отримуЄмо з бекенда данні для формування масиву мастеркласів
function getMasterClassArray() {
  getEvent()
    .then(arrayCook => {
      // в data знаходиться масив кухарів;
      addImage(arrayCook);
    })
    .catch(error => {
      console.log(error);
    });
}
//викликаємо функцію для відмальовки  майстер класів
function addImage(el) {
  const markup = getMarkup(el);
  console.log(markup);
  swiper.innerHTML = markup;
}
//створюєму розмітку майстер класів з отримного масиву даних по кухарям
function getMarkup(ar) {
  return ar
    .map(el => {
      return `<div class="swiper-slide image-slider_image">
      <div class="hero-container">
      <!-- image 1 -->
          <div class="hero-img-cook-div hero-img-srink">
            <img class="hero-cook-img" src="${el.cook.imgUrl}"
              alt="${el.cook.name}" />
          </div>
          <!-- image 2 -->
          <div class="hero-img-div hero-img-srink">
            <img class="hero-tried-img" src="${el.topic.previewUrl}"
              alt="${el.topic.name}" />
            <h2 class="hero-name-treat">${el.topic.name}</h2>
            <p class="hero-country-treat">${el.topic.area}</p>
          </div>
          <!-- image 3 -->
          <div class="hero-img-div-fill hero-img-srink">
            <img class="hero-tried-img-flll" src="${el.topic.imgUrl}"
              alt="${el.topic.name}" />
          </div>
         </div>    
          </div> 
          `;
    })
    .join('');
}

getMasterClassArray();
