// const switch = document.querySelector('.sw-chbox');
const switchhDark = document.querySelector('.sw-chbox');
const swRefs = {
  switchOn: document.querySelector('.icon-onswitch-mob'),
  switchOff: document.querySelector('.icon-switch-mob'),
};

const switchhDarkHeder = document.querySelector('.sw-chbox-heder');
const switchOnHeder = document.querySelector('.icon-onswitch');
const switchOffHeder = document.querySelector('.icon-switch');
const swRefsHed = {
  switchOn: document.querySelector('.icon-onswitch'),
  switchOff: document.querySelector('.icon-switch'),
};

console.log(switchhDark);
console.dir(switchhDark);

switchhDark.addEventListener('change', onClickSwitch);
switchhDarkHeder.addEventListener('change', onClickSwitchHeder);
function changeSwitch(switchhD, swRf) {
  if (switchhD.checked) {
    console.log(true);
    swRf.switchOn.classList.remove('is-hidden');
    swRf.switchOff.classList.add('is-hidden');
  } else {
    swRf.switchOn.classList.add('is-hidden');
    swRf.switchOff.classList.remove('is-hidden');
  }
}
function onClickSwitch() {
  changeSwitch(switchhDark, swRefs);
}
function onClickSwitchHeder() {
  changeSwitch(switchhDarkHeder, swRefsHed);
}
