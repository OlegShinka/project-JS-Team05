function markupMobMenu() {
  return `<!-- modbile menu-->
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
`;
}

export { markupMobMenu };
