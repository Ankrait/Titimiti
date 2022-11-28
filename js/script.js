body = document.body
procents = document.querySelector('.procents')
preload = document.querySelector('.preloader')

preloader = $('.preloader'); // селектор прелоадера    
imagesCount = $('img').length; // количество изображений   
videosCount = $('video').length; // количество видео  

let i = 0;

allCount = imagesCount + videosCount;

percent = 100 / allCount; //количество % на одну картинку

// document.addEventListener('DOMContentLoaded', () => {
//     const mediaFiles = document.querySelectorAll('img');

//     Array.from(mediaFiles).forEach((file, index) => {
//         file.onload = () => {
//             i++;

//             procents.innerHTML = ((i * 100) / mediaFiles.length).toFixed();

//             if (i === 1) {
//                 body.classList.remove('preload')
//                 preload.classList.add('preloader--hide')
//                 procents.innerHTML = 100
//             }
//         }
//     })
// });



swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.titiland__arr-right',
        prevEl: '.titiland__arr-left'
    },

    freeMode: true,
    loop: true,
    allowTouchMove: false,

    autoplay: {
        delay: 5000,
        speed: 1000,
        disableOnInteraction: false,
    },

    speed: 1000,

});


arrow = document.querySelector('.arrow-content')
topp = screen.height - 130
arrow.style.top = topp + 'px';

arrow.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('.about').offset().top - 120
   }, 1000);
});