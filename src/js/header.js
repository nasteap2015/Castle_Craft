const menuLinks = document.querySelectorAll('.nav-link');

document.addEventListener('DOMContentLoaded', () => {
    menuLinks.forEach(link => {
      
    link.addEventListener('click', function () {
      menuLinks.forEach(link => link.classList.remove('active'));

      this.classList.add('active');
    });
  });
});
