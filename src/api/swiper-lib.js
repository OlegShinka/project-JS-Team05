// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);
// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  spaceBetween: 100,
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
  // grabCursor: true,
  slideToClickedSlide: true,
  //slidesPerView: 1.8,
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
