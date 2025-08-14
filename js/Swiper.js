const swiperEl = document.querySelector('#hero');
const Forwardbutton = document.querySelector('#forword-btn');
const Backwardbutton = document.querySelector('#backword-btn')

Forwardbutton.addEventListener('click', () => {
  swiperEl.swiper.slidePrev();
});

Backwardbutton.addEventListener('click', () => {
  swiperEl.swiper.slideNext();
});


const featuredswiperEl = document.querySelector('#featured-swiper');
const featuredForwardbutton = document.querySelector('#featured-swiper-left');
const featuredBackwardbutton = document.querySelector('#featured-swiper-right')

featuredForwardbutton.addEventListener('click', () => {
  featuredswiperEl.swiper.slidePrev();
});

featuredBackwardbutton.addEventListener('click', () => {
  featuredswiperEl.swiper.slideNext();
});


const newsswiperEl = document.querySelector('#news-swiper');
const newsForwardbutton = document.querySelector('#news-swiper-left');
const newsBackwardbutton = document.querySelector('#news-swiper-right')

newsForwardbutton.addEventListener('click', () => {
  newsswiperEl.swiper.slidePrev();
});

newsBackwardbutton.addEventListener('click', () => {
  newsswiperEl.swiper.slideNext();
});



// breakpoints
document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('#featured-swiper');

  Object.assign(swiperEl, {
    slidesPerView: 2, // default for desktop
    loop: true,
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
      },
      900: {
        slidesPerView: 3
      }
    }
  });

  swiperEl.initialize();
});


document.addEventListener('DOMContentLoaded', () => {
  const swiperE2 = document.querySelector('#about-swiper');

  Object.assign(swiperE2, {
    slidesPerView: 3, // default for desktop
    loop: true,
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
      },
      900: {
        slidesPerView: 3
      }
    }
  });

  swiperE2.initialize();
});