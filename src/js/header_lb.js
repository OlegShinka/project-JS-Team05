import * as basicLightbox from 'basiclightbox';
import { markupMobMenu } from './templates/mobile-menu-markup';
const btnBurger = document.querySelector('.js-open-menu');
let backdrop;
let instAb;
btnBurger.addEventListener('click', onClickBurger);
function onClickBurger() {
  const instance = basicLightbox.create(
    //створюємо розмітку модального вікна
    markupMobMenu(),
    {
      //при закритті видаляємо прослуховувач подій створених при відкритти екземпляру бібліотеки
      onClose: instance => {
        document.removeEventListener('click', onClickCloseMenu, instance);
        return true;
      },
      onShow: instance => {
        instAb = instance;
        //забезпечуємо  пошук селектора та створення прослуховувача подій після відображення вікна меню
        setTimeout(() => {
          const btnCloseMenu = document.querySelector('.mob-menu-close');
          backdrop = document.querySelector('.mobile-menu-backdrop');
          btnCloseMenu.innerHTML =
            '<svg class="mob-menu-svg" width="32" height="32" > <use href="./img/symbol-defs.svg#icon-x-modal"></use> </svg>';
          btnCloseMenu.addEventListener('click', onClickCloseMenu);
        });
      },
    }
  );
  instance.show();
}

function onClickCloseMenu() {
  instAb.close();
}
