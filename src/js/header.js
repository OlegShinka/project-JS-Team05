const btnBurger = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-menu-close]');
const modal = document.querySelector('[data-menu]');
btnBurger.addEventListener('click', onClick);
closeModalBtn.addEventListener('click', onClick);
function onClick() {
  modal.classList.toggle('is-hidden');
}
