import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
