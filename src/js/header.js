import * as basicLightbox from 'basiclightbox';
const btnBurger = document.querySelector('.js-open-menu');
let backdrop;
let instAb;
btnBurger.addEventListener('click', onClickBurger);
function onClickBurger() {
  console.log('кликнули на бургер');
  const instance = basicLightbox.create(
    `<!-- modbile menu-->
<div class="mobile-menu-backdrop">
  <div class="mobile-menu-window">
    <button type="button" class="mob-menu-close" data-modal-rec-close>
      <svg class="mob-menu-svg" width="32" height="32" fill = "red">
        <use href="../img/symbol-defs.svg#icon-x2"></use>
      </svg>
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
      <use href="../img/symbol-defs.svg#icon-switch"></use>
    </svg>
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
  instAb.close();
}
