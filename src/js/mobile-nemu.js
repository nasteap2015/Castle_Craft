const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-btn');
const backdropMenu = document.querySelector('.backdrop');

burgerBtn.addEventListener('click', e => {
  openMobileMenu();
});

closeBtn.addEventListener('click', e => {
  closeMobileMenu();
});

function openMobileMenu(e) {
  backdropMenu.style.display = 'block';
  setTimeout(() => {
    backdropMenu.classList.add('is-open');
  }, 300);
}

function closeMobileMenu(e) {
  backdropMenu.classList.remove('is-open');
}
