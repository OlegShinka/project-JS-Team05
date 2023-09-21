// const switch = document.querySelector('.sw-chbox');
const switchhDark = document.querySelector('.sw-chbox');
const bodyEl = document.querySelector('body');
console.log(bodyEl);
const swRefs = {
  switchOn: document.querySelector('.icon-onswitch-mob'),
  switchOff: document.querySelector('.icon-switch-mob'),
};

const switchhDarkHeder = document.querySelector('.sw-chbox-heder');
const swRefsHed = {
  switchOn: document.querySelector('.icon-onswitch'),
  switchOff: document.querySelector('.icon-switch'),
};
function setThema() {
  console.log(localStorage.getItem('thema'));
  if (localStorage.getItem('thema') === 'dark') {
    //якщо тема в локалі записана темна
    // bodyEl.classList.add('dark');
    // switchhDark.checked = true;
  } else {
    //  if (bodyEl.classList.contains('dark')){}
  }
}
setThema();
switchhDark.addEventListener('change', onClickSwitch);
switchhDarkHeder.addEventListener('change', onClickSwitchHeder);
function changeSwitch(switchhD, swRf) {
  if (switchhD.checked) {
    swRf.switchOn.classList.remove('is-hidden');
    swRf.switchOff.classList.add('is-hidden');
  } else {
    swRf.switchOn.classList.add('is-hidden');
    swRf.switchOff.classList.remove('is-hidden');
  }
}
function SetTemsLocStorage() {
  if (bodyEl.classList.contains('dark')) {
    localStorage.setItem('thema', 'dark');
  } else {
    localStorage.setItem('thema', 'light');
  }
}
function onClickSwitch() {
  changeSwitch(switchhDark, swRefs);
  bodyEl.classList.toggle('dark');
  SetTemsLocStorage();
}
function onClickSwitchHeder() {
  changeSwitch(switchhDarkHeder, swRefsHed);
  bodyEl.classList.toggle('dark');
  SetTemsLocStorage();
}
