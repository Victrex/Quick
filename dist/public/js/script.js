 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
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
