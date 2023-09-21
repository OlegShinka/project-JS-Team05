// const switch = document.querySelector('.sw-chbox');
const switchhDark = document.querySelector('.sw-chbox');
const switchOn = document.querySelector('.icon-onswitch-mob');
const switchOff = document.querySelector('.icon-switch-mob');
console.log(switchhDark);
console.dir(switchhDark);

switchhDark.addEventListener('change', onClickSwitch);

function onClickSwitch() {
  if (switchhDark.checked) {
    console.log(true);
    switchOn.classList.remove('is-hidden');
    switchOff.classList.add('is-hidden');
  } else {
    switchOn.classList.add('is-hidden');
    switchOff.classList.remove('is-hidden');
  }
}
