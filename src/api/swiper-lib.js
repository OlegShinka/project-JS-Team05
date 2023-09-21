// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);

function createSwiper() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 300,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    touchRatio: 1,
    //форма курсора

    slideToClickedSlide: true,
  });
}

export { createSwiper };
