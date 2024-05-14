// JavaScript Version
const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});

navMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.remove('open-menu');
  buttonMenu.classList.remove('nav-open');
});