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
const er404_blocks = document.querySelectorAll('.er_404');
const popup404 = document.querySelector('.popup404');

er404_blocks.forEach(item => {
    item.addEventListener('click', openPopupFunc);
});

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


// Убрать куки
const cookie = document.querySelector('.cookie');
const cookie_btn = document.querySelector('.cookie__btn');
const email_popup = document.querySelector('.email-accept');

cookie_btn.addEventListener('click', (e) => {
    cookie.classList.add("cookie--hide");
});



// Паралакс луны и коллайдера
const moon = document.querySelector('.moon')
const moon_bg = document.querySelector('.moon-bg')
const collider_images = document.querySelectorAll('.swiper img')
const lines = document.querySelectorAll('.lines')

console.log(collider_images);

document.addEventListener('mousemove', moonParalaks)

function moonParalaks(e) {
    let offsetX = (e.clientX / window.innerWidth * 12) - 6;
    let offsetY = (e.clientY / window.innerHeight * 12) - 6;

    moon.setAttribute("style", "transform: translate(" + offsetX + "px, " + offsetY + "px);");
    moon_bg.setAttribute("style", "transform: translate(" + -offsetX + "px, " + -offsetY + "px);");

    collider_images.forEach((item) => {
        item.setAttribute("style", "transform: translate(" + offsetX + "px, " + offsetY + "px);");
    });

    lines.forEach((item) => {
        item.setAttribute("style", "transform: translate(" + offsetX + "px, " + offsetY + "px);");
    });
}


// Тык по логу = скролл на верх сайта
const logo = document.querySelector('.menu__logo')
logo.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 1000);
});

// Тык по меню скролл
const menu_tocenomic = document.querySelector('.scroll_tocenomic');
const menu_whitepaper = document.querySelector('.scroll_whitepaper');
const menu_roadmap = document.querySelector('.scroll_roadmap');
const menu_titiland = document.querySelector('.scroll_titiland');
const menu_zoomloop = document.querySelector('.scroll_zoomloop');
const menu_miticoin = document.querySelector('.scroll_miticoin');

menu_roadmap.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.roadmap').offset().top - 220
    }, {
        duration: 1000,
        easing: "swing"
    });
});

menu_titiland.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.titiland').offset().top - 100
    }, 1000);
});

menu_zoomloop.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.zoomloop').offset().top - 160
    }, 1000);
});

menu_miticoin.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.miticoin').offset().top - 150
    }, 1000);
});