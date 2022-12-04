document.querySelectorAll('video').forEach(v => { v.setAttribute('pip', 'false'); }) //Яндекс
body = document.body

///////////////////// Свайпер /////////////////////
swiper = new Swiper('.titiland .swiper', {
    pagination: {
        el: '.titiland .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.titiland__arr-right',
        prevEl: '.titiland__arr-left'
    },

    // freeMode: true,
    loop: true,
    allowTouchMove: true,

    autoplay: {
        delay: 5000,
        speed: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            allowTouchMove: false,
            speed: 1000,
            pagination: false,
        }
    }
});

team_swiper = new Swiper('.team__personal.phone .swiper', {
    freeMode: false,
    loop: false,
    pagination: {
        el: '.team .swiper-pagination',
        clickable: true,
    },
    spaceBetween: 20
});
///////////////////// Свайпер /////////////////////


///////////////////// Стрелка на первом экране /////////////////////
const arrow = document.querySelector('.arrow-content')
arrow.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('.about').offset().top - 100
    }, 1000);
});
///////////////////// Стрелка на первом экране /////////////////////


///////////////////// Popup 404 visible /////////////////////
const er404_blocks = document.querySelectorAll('.er_404');
const popup404 = document.querySelector('.popup404');

er404_blocks.forEach(item => {
    item.addEventListener('click', openPopupFunc);
});

function openPopupFunc(e) {
    popup404.classList.add('open');
    body.classList.add('overflow--hide');
    e.preventDefault();
}
///////////////////// Popup 404 visible /////////////////////


///////////////////// popup404 hidden /////////////////////
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
///////////////////// popup404 hidden /////////////////////


///////////////////// popup_email hidden /////////////////////
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
///////////////////// popup_email hidden /////////////////////

///////////////////// Паралакс луны и коллайдера /////////////////////
const moon = document.querySelector('.moon')
const moon_bg = document.querySelector('.moon-bg')
const collider_images = document.querySelectorAll('.swiper img')
const lines = document.querySelectorAll('.lines')

document.addEventListener('mousemove', moonParalaks)

function moonParalaks(e) {
    if (window.screen.width > 780) {
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
}
///////////////////// Паралакс луны и коллайдера /////////////////////


///////////////////// Тык по логу = скролл на верх сайта /////////////////////
const logo = document.querySelector('.menu__logo')
logo.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 1000);
});
///////////////////// Тык по логу = скролл на верх сайта /////////////////////


///////////////////// Тык по меню скролл /////////////////////
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
///////////////////// Тык по меню скролл /////////////////////


///////////////////// Анимация /////////////////////
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
///////////////////// Анимация /////////////////////


///////////////////// Бургер /////////////////////
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
///////////////////// Бургер /////////////////////


///////////////////// Перетаскивание блока кнопки /////////////////////
window.addEventListener('resize', btnRemove);
function btnRemove() {
    if (window.screen.width < 767.89)
        $(".titiland__more").appendTo(".titiland");
    else
        $(".titiland__more").appendTo(".titiland__content");

}
btnRemove()
///////////////////// Перетаскивание блока кнопки /////////////////////

///////////////////// отправление почты /////////////////////
const email = document.querySelector('input');
const form_btn = document.querySelector('.form__btn');
const email_popup = document.querySelector('.email-accept');

function emailTest(value) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

form_btn.addEventListener('click', (e) => {
    let value = email.value;

    if (emailTest(value)) {
        email_popup.classList.add("open");
        email.value = '';
    }
    else {
        e.preventDefault();
        email.classList.add("error");
        $('.form__item span').addClass("error");
    }
});

email.addEventListener('focus', () => {
    email.classList.remove("error");
    $('.form__item span').removeClass("error");
});
///////////////////// отправление почты /////////////////////


///////////////////// Убрать куки /////////////////////
const cookie_btn = document.querySelector('.cookie__btn');
const cookiewin = document.querySelector('.cookie');

cookie_btn.addEventListener('click', (e) => {
    cookiewin.classList.add("cookie--hide");
});
///////////////////// Убрать куки /////////////////////


// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let cookiecook = getCookie("cookiecook");

// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
    cookiewin.classList.remove("cookie--hide");
    // показываем   

    let date = new Date;
    date.setDate(date.getDate() + 1);
    document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
}