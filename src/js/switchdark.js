const switchhDarkMenu = document.querySelector('.sw-chbox');
const bodyEl = document.querySelector('body');
const swRefsMenu = {
  switchOn: document.querySelector('.icon-onswitch-mob'),
  switchOff: document.querySelector('.icon-switch-mob'),
};

const switchhDarkHeder = document.querySelector('.sw-chbox-heder');
const swRefsHed = {
  switchOn: document.querySelector('.icon-onswitch'),
  switchOff: document.querySelector('.icon-switch'),
};
function setThema() {
  if (localStorage.getItem('thema') === 'dark') {
    //якщо тема в локалі записана темна
    switchhDarkHeder.checked = true;
    changeSwitch(switchhDarkHeder, swRefsHed, switchhDarkMenu, swRefsMenu);
    bodyEl.classList.toggle('dark');
  }
}
setThema();
switchhDarkMenu.addEventListener('change', onClickSwitchMenu);
switchhDarkHeder.addEventListener('change', onClickSwitchHeder);

function changeSVGSvitch(switchhD, swRf) {
  if (switchhD.checked) {
    swRf.switchOn.classList.remove('is-hidden');
    swRf.switchOff.classList.add('is-hidden');
  } else {
    swRf.switchOn.classList.add('is-hidden');
    swRf.switchOff.classList.remove('is-hidden');
  }
}
//У нас два залежник чекбокса. Синхронізуємо їх.
//В залежності від стну чекбоксів скриваємо або показуєом відповідну картинку повзунок
function changeSwitch(switchhD, swRf, switchhD2, swRf2) {
  switchhD2.checked = switchhD.checked;
  //в залежносты від стану свіча змінюємо положення ползунка
  changeSVGSvitch(switchhD, swRf);
  changeSVGSvitch(switchhD2, swRf2);
}
function SetTemsLocStorage() {
  console.log('thems');
  if (bodyEl.classList.contains('dark')) {
    // console.log('thems dark');
    localStorage.setItem('thema', 'dark');
  } else {
    localStorage.setItem('thema', 'light');
    // console.log('thems light');
  }
}
function onClickSwitchMenu() {
  changeSwitch(switchhDarkMenu, swRefsMenu, switchhDarkHeder, swRefsHed);
  bodyEl.classList.toggle('dark');
  SetTemsLocStorage();
}
function onClickSwitchHeder() {
  changeSwitch(switchhDarkHeder, swRefsHed, switchhDarkMenu, swRefsMenu);
  bodyEl.classList.toggle('dark');
  SetTemsLocStorage();
}
