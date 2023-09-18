// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
import * as basicLightbox from 'basiclightbox';
// const basicLightbox = require('basiclightbox');
const btnBurger = document.querySelector('.js-open-menu');
let backdrop;
let instAb;
//const markup = <load src="partials/header.html" />;
//console.log(markup);
btnBurger.addEventListener('click', onClickBurger);

function onClickBurger() {
  console.log('кликнули на бургер');
  const instance = basicLightbox.create(
    `<!-- modbile menu-->
<div class="mobile-menu-backdrop">
  <div class="mobile-menu-window">
    <button type="button" class="mob-menu-close" data-modal-rec-close>
      <svg class="mob-menu-svg" width="32" height="32" fill = "red">
        <use href="./img/symbol-defs.svg#icon-x2"></use>
      </svg>
    </button>
    <div class="js-modal-rec"></div>
    <!-- Navigation -->
    <ul class="nav-list-mob-menu list">
      <li class="nav-item-mob-menu">
        <a class="nav-link-mob-menu link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link active" href="favorites.html">Favorites</a>
      </li>
    </ul>
  </div>
</div>
`,
    {
      onClose: instance => {
        document.removeEventListener('click', onClickCloseMenu, instance);
        console.log('remove even listener keyboard');
        return true;
      },
      onShow: instance => {
        instAb = instance;
        setTimeout(() => {
          const btnCloseMenu = document.querySelector('.mob-menu-close');
          backdrop = document.querySelector('.mobile-menu-backdrop');
          btnCloseMenu.addEventListener('click', onClickCloseMenu);
        });
      },
    }
  );
  instance.show();
}

function onClickCloseMenu() {
  console.log('close menu');
  //   backdrop.classList.add('is-hidden');
  instAb.close();
}
