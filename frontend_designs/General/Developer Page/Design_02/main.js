var swiper = new Swiper('.swiper-container', {
  autoHeight: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  // },
});
