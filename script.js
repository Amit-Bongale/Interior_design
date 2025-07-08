const swiperContainer = document.querySelector('#slider');
const backwardBtn = document.querySelector('#left-btn');
const forwardBtn = document.querySelector('#right-btn');


backwardBtn.addEventListener('click', () => {
  swiperContainer.swiper.slidePrev();
});


forwardBtn.addEventListener('click', () => {
  swiperContainer.swiper.slideNext();
});


const swiper=document.querySelector('#swipe-head');
const leftArrow= document.querySelector('#left-button');
const rightArrow=document.querySelector('#right-button');

leftArrow.addEventListener('click',()=>{
  swiper.swiper.slidePrev();
});

rightArrow.addEventListener('click',()=>{
  swiper.swiper.slideNext();
});


// for tablate view


