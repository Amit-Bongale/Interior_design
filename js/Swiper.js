const swiperEl = document.querySelector('#hero');
const Forwardbutton = document.querySelector('#forword-btn');
const Backwardbutton = document.querySelector('#backword-btn')

Forwardbutton.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
});

Backwardbutton.addEventListener('click', () => {
    swiperEl.swiper.slidePrev();
});