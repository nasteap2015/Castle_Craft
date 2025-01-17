import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: '24px',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
