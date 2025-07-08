const swiperEl = document.querySelector('#hero');
const Forwardbutton = document.querySelector('#forword-btn');
const Backwardbutton = document.querySelector('#backword-btn')

Forwardbutton.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
});

Backwardbutton.addEventListener('click', () => {
    swiperEl.swiper.slidePrev();
});


// breakpoints
document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('#featured-swiper');

  Object.assign(swiperEl, {
    slidesPerView: 2, // default for desktop
    loop: true,
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // screen width <= 640px
      0: {
        slidesPerView: 1
      },
      // screen width > 640px
      640: {
        slidesPerView: 2
      }
    }
  });

  swiperEl.initialize();
});


document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('#news-swiper');

  Object.assign(swiperEl, {
    slidesPerView: 3, // default for desktop
    loop: true,
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // screen width <= 640px
      0: {
        slidesPerView: 1
      },
      // screen width > 640px
      640: {
        slidesPerView: 3
      }
    }
  });

  swiperEl.initialize();
});