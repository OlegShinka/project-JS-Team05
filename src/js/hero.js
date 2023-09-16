// import Swiper JS
// import Swiper, { Navigation, Padination } from 'swiper';
// // // import Swiper styles
// //import 'swiper/css';

// const swiper = new Swiper('.swiper-container', {
//   //   // Optional parameters
//   //direction: 'horizontal',
//   direction: 'vertical',
//   loop: true,
//   spaceBetween: 10,

//   //   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   // Navigation arrows
//   //   navigation: {
//   //     nextEl: '.swiper-button-next',
//   //     prevEl: '.swiper-button-prev',
//   //   },

//   //   // And if we need scrollbar
//   //   scrollbar: {
//   //     el: '.swiper-scrollbar',
//   // },
// });
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);
// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
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

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
