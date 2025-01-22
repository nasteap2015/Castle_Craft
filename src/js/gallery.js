import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const galleryswiper = new Swiper('.swiper_gallery', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
