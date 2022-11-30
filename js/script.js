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


// Свайпер
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

// Стрелка на первом экране
const arrow = document.querySelector('.arrow-content')
arrow.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('.about').offset().top - 100
    }, 1000);
});


// Popup 404 visible 
const liBtns = document.querySelectorAll('li');
const logo = document.querySelector('.menu__logo')
const welcBtn = document.querySelector('.welcome__btn');
const titilandBtn = document.querySelector('.titiland__more');
const zoomBtn = document.querySelector('.zoomloop__play-btn');
const popup404 = document.querySelector('.popup404');

liBtns.forEach(item => {
    item.addEventListener('click', openPopupFunc);
});

titilandBtn.addEventListener('click', openPopupFunc);
welcBtn.addEventListener('click', openPopupFunc);
zoomBtn.addEventListener('click', openPopupFunc);

function openPopupFunc(e) {
    popup404.classList.add('open');
    body.classList.add('overflow--hide')
    e.preventDefault();
}

//popup404 hidden
const close_btns = document.querySelectorAll('.popup__close-btn');

popup404.addEventListener('click', hidePopup404);

close_btns.forEach(item => {
    item.addEventListener('click', (e) => {
        popup404.classList.remove('open');
        body.classList.remove('overflow--hide')
        e.preventDefault();
    });
});


function hidePopup404(e) {
    if (!e.target.closest('.popup__content')) {
        popup404.classList.remove('open');
        body.classList.remove('overflow--hide')
    }
    e.preventDefault();
}
//popup_email hidden
const popup_email = document.querySelector('.email-accept')
popup_email.addEventListener('click', hidePopupEmail);

close_btns.forEach(item => {
    item.addEventListener('click', (e) => {
        popup_email.classList.remove('open');
        body.classList.remove('overflow--hide')
        e.preventDefault();
    });
});


function hidePopupEmail(e) {
    if (!e.target.closest('.popup__content')) {
        popup_email.classList.remove('open');
        body.classList.remove('overflow--hide')
    }
    e.preventDefault();
}



// отправление почты
const form = document.querySelector('.form');
const form_btn = document.querySelector('.form__btn');

form_btn.addEventListener('click', (e) => {
    email_popup.classList.add("open");
    e.preventDefault();
});


// Тык по логу = скролл на верх сайта
logo.removeEventListener('click', openPopupFunc);
logo.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 1000);
});


// Убрать куки
const cookie = document.querySelector('.cookie');
const cookie_btn = document.querySelector('.cookie__btn');
const email_popup = document.querySelector('.email-accept');

cookie_btn.addEventListener('click', (e) => {
    cookie.classList.add("cookie--hide");
});



// Паралакс луны
const moon = document.querySelector('.moon')
const moon_bg = document.querySelector('.moon-bg')

document.addEventListener('mousemove', moonParalaks)

function moonParalks(e) {
    let offsetX = (e.clientX / window.innerWidth * 10) - 5;
    let offsetY = (e.clientY / window.innerHeight * 10) - 5;

    console.log(moon.);
}