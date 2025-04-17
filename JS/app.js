
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,  

    coverflowEffect: {
        rotate: 2,
        stretch: -175,
        depth: 300,
        modifier: 2,
        slideShadows: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

});

function checkBoxFunction() {
    const checkBox = document.querySelector('.contact-checkbox');
    const text = document.querySelector('.contact-text--small');
    
};
