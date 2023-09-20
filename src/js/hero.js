// завантажуємо скріпт пагінації
import { createSwiper } from '../api/swiper-lib';
import { getEvent } from '../api/hero-fetch';
import { postOrderNow } from '../api/ordernow-modal-fetch';
import Notiflix from 'notiflix';

const swiperConteinerEl = document.querySelector('.swiper-wrapper');
const btnNewOrder = document.querySelector('.btn-hero');
const modal = document.querySelector('[data-modal-overnow]');

const closeWindowMob = document.querySelector('[data-modal-close]');
const form = document.querySelector('[name = subscribe-orderNow]');

btnNewOrder.addEventListener('click', onClick);
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
    Notiflix.Notify.failure('Error order now!');
  });
}
function onClick() {
  modal.classList.toggle('is-hidden');
}
//отримуЄмо з бекенда данні для формування масиву мастеркласів
function getMasterClassArray() {
  getEvent()
    .then(arrayCook => {
      // в data знаходиться масив кухарів;
      addImage(arrayCook);
    })
    .catch(error => {
      Notiflix.Notify.failure(error);
    });
}
//викликаємо функцію для відмальовки  майстер класів
function addImage(el) {
  const markup = getMarkup(el);
  swiperConteinerEl.innerHTML = markup;
  //після отримання данних з беку підгружаємо бібліотеку Swiper
  createSwiper();
}
//створюєму розмітку майстер класів з отримного масиву даних по кухарям
function getMarkup(ar) {
  return ar
    .map((el, ind) => {
      return `
      <!-- Slide ${ind + 1} -->
      <div class="swiper-slide image-slider_image">
        <div class="hero-container">
          <!-- image 1 -->
          <div class="hero-img-cook-div hero-img-srink">
            <picture>
              <source srcset="${el.cook.imgWebpUrl}" type="image/webp" />
              <img
                class="hero-cook-img"
                src="${el.cook.imgUrl}"
                alt="${el.cook.name}"
              />
            </picture>
          </div>
          <!-- image 2 -->
          <div class="hero-img-div hero-img-srink">
            <picture>
              <source srcset="${el.topic.previewWebpUrl} "type="image/webp" />
              <img
                class="hero-tried-img"
                src="${el.topic.previewUrl}"
                alt="${el.topic.name}"
              />
            </picture>
            <h2 class="hero-name-treat">${el.topic.name}</h2>
            <p class="hero-country-treat">${el.topic.area}</p>
          </div>
          <!-- image 3 -->
          <div class="hero-img-div-fill">
            <picture>
              <source srcset="${el.topic.imgWebpUrl} "type="image/webp" />
              <img
                class="hero-tried-img-flll"
                src="${el.topic.imgUrl}"
                alt="${el.topic.name}"
              />
            </picture>
          </div>
        </div>
      </div>
      <!-- END Slide ${ind + 1}-->
          `;
    })
    .join('');
}

getMasterClassArray();
