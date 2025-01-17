import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Parametry Swiper
  slidesPerView: 'auto',
  spaceBetween: '24px',
  loop: true, // Pętla
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Umożliwia klikanie w kropki
  },
  autoplay: {
    delay: 3000, // Automatyczne przewijanie co 3 sekundy
    disableOnInteraction: false,
  },
});
