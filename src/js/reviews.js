import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reviewsswiper = new Swiper('.swiper_reviews', {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
