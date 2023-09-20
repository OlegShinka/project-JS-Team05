const btnBurger = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-menu-close]');
const btnOpenOrderNow = document.querySelector('.btn-cart-header');
const modalOrderNow = document.querySelector('[data-modal-overnow]');

const modal = document.querySelector('[data-menu]');
btnBurger.addEventListener('click', onClick);
closeModalBtn.addEventListener('click', onClick);
function onClick() {
  modal.classList.toggle('is-hidden');
}

btnOpenOrderNow.addEventListener('click', onClickCart);
function onClickCart() {
  modalOrderNow.classList.toggle('is-hidden');
}
