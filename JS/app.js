
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,  

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        200: {
            coverflowEffect: {
                stretch: -30,
                depth: 100,
                rotate: 10,
            },
        },

        500: { 
            coverflowEffect: {
                stretch: -50,
                depth: 100,
                rotate: 20, 
            },
        },
       

        850: {
            coverflowEffect: {
                rotate: 2,
                stretch: -175,
                depth: 300,
                modifier: 2,
                slideShadows: true
            },
          },
    },

});

// function checkBoxFunsction() {
//     const checkBox = document.querySelector('.contact-checkbox').addEventListener('click', function(){
//         console.log('Hello EventListaner');
//     });
//     const text = document.querySelector('.contact-text--small');
// };
