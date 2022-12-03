document.querySelectorAll('video').forEach(v => { v.setAttribute('pip', 'false'); })

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
        item.setAttribute("style", "transform: translate(" + offsetX * 3 + "px, " + offsetY * 3 + "px);");
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

const menu = document.querySelector('.menu');
const toggle = document.querySelector('.burger');
const header = document.querySelector('.header');

menu_roadmap.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.roadmap').offset().top - 220
    }, {
        duration: 1000,
        easing: "swing"
    });
    removeMenuOpened();
});

menu_titiland.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.titiland').offset().top - 100
    }, 1000);
    removeMenuOpened();
});

menu_zoomloop.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.zoomloop').offset().top - 180
    }, 1000);
    removeMenuOpened();
});

menu_miticoin.addEventListener('click', (e) => {
    $('html, body').animate({
        scrollTop: $('.miticoin').offset().top - 170
    }, 1000);
    removeMenuOpened();
});



// Выезжание при скролле к зум лупу
const anim_items = document.querySelectorAll('.anim');

if (anim_items.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    async function animOnScroll() {
        anim_items.forEach((item) => {
            let scrollY = window.pageYOffset || document.documentElement.scrollTop;

            let anim_item_height = item.offsetHeight;
            let anim_item_offsetY = item.getBoundingClientRect().top + scrollY;
            let anim_start = 4;

            let anim_item_point = window.innerHeight - anim_item_height / anim_start;
            if (anim_item_height > window.innerHeight) {
                let anim_item_point = anim_item_height - window.innerHeight / anim_start;
            }

            if ((scrollY > anim_item_offsetY - anim_item_point) && (scrollY < (anim_item_offsetY + anim_item_height))) {
                item.classList.add('_active');
            }
        });

    }
    animOnScroll();
}



// Бургер
toggle.addEventListener('click', function (e) {
    this.classList.toggle('opened');
    menu.classList.toggle('opened');
    header.classList.toggle('opened');
    body.classList.toggle('overflow--hide');
});

function removeMenuOpened() {
    toggle.classList.remove('opened');
    menu.classList.remove('opened');
    header.classList.remove('opened');
    body.classList.remove('overflow--hide');
}



// Перетаскивание блока кнопки
window.addEventListener('resize', btnRemove);
function btnRemove() {
    if (window.screen.width < 767.89)
        $(".titiland__more").appendTo(".titiland");
    else
        $(".titiland__more").appendTo(".titiland__content");

}
btnRemove()

// Перетаскивание блока team
window.addEventListener('resize', lidersRemove);
function lidersRemove() {
    if (window.screen.width < 767.89) {
        $("._lid").prependTo(".team__personal");
    }
    else {
        $("._lid").prependTo(".team__liders");
    }

}
lidersRemove()