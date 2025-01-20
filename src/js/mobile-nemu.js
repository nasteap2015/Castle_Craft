const openBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-btn');
const backdropMenu = document.querySelector('.backdrop');
const allSite = document.querySelector('body');
const menuLinks = document.querySelectorAll('.mob-nav-link');

openBtn.addEventListener('click', e => {
  openMobileMenu();
});

closeBtn.addEventListener('click', e => {
  closeMobileMenu();
});

function openMobileMenu(e) {
  backdropMenu.style.display = 'block';
  setTimeout(() => {
    allSite.classList.add('noscroll');
    backdropMenu.classList.add('is-open');
  }, 300);

  closeBtn.addEventListener('click', closeMobileMenu);
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu(e) {
  allSite.classList.remove('noscroll');
  backdropMenu.classList.remove('is-open');
  setTimeout(() => {
    backdropMenu.style.display = 'none';
  }, 1000);

  closeBtn.removeEventListener('click', closeMobileMenu);
  menuLinks.forEach(menuLink => {
    menuLink.removeEventListener('click', closeMobileMenu);
  });
}
