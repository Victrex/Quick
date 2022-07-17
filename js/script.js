 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'false',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        220: {
            slidesPerView: 2,
        },
        620: {
            slidesPerView: 3,
        },
    },
  });
