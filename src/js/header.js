import * as basicLightbox from 'basiclightbox';
const btnBurger = document.querySelector('.js-open-menu');
let backdrop;
let instAb;
btnBurger.addEventListener('click', onClickBurger);
function onClickBurger() {
  const instance = basicLightbox.create(
    //створюємо розмітку модального вікна
    `<!-- modbile menu-->
<div class="mobile-menu-backdrop">
  <div class="mobile-menu-window">
    <button type="button" class="mob-menu-close" data-modal-rec-close>
      
    </button>
    <div class="js-modal-rec"></div>
    <!-- Navigation -->
    <ul class="nav-list-mob-menu list">
      <li class="nav-item-mob-menu">
        <a class="nav-link-mob-menu link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link-mob-menu link active" href="favorites.html">Favorites</a>
      </li>
    </ul>
     <svg class="icon-switch-mob-menu" height="20" width="46">
      <use href="./img/symbol-defs.svg#icon-switch"></use>
    </svg>
  </div>
</div>
`,
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
            '<svg class="mob-menu-svg" width="32" height="32" > <use href="./img/symbol-defs.svg#icon-x"></use> </svg>';
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
