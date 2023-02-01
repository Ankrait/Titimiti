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

    freeMode: false,
    loop: true,
    allowTouchMove: true,

    autoplay: {
        delay: 5000,
        speed: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            speed: 1000,
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
///
///
///
///////////////////// Стрелка на первом экране /////////////////////
$('.arrow-content').bind('click', () => {
    $('html, body').animate({
        scrollTop: $('.about').offset().top - 100
    }, 1000);
});
///////////////////// Стрелка на первом экране /////////////////////
///
///
///
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
///
///
///
///////////////////// popup404 hidden /////////////////////
const close_btns = document.querySelectorAll('.popup__close-btn');
const popup_email = document.querySelector('.email-accept');

popup404.addEventListener('click', hidePopup404);

close_btns.forEach(item => {
    item.addEventListener('click', (e) => {
        popup404.classList.remove('open');
        popup_email.classList.remove('open');
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
///
///
///
///////////////////// popup_email hidden /////////////////////
popup_email.addEventListener('click', hidePopupEmail);
function hidePopupEmail(e) {
    if (!e.target.closest('.popup__content')) {
        popup_email.classList.remove('open');
        body.classList.remove('overflow--hide')
    }
    e.preventDefault();
}
///////////////////// popup_email hidden /////////////////////
///
///
///
///////////////////// Паралакс луны и коллайдера /////////////////////
const moon = document.querySelector('.moon')
const moon_bg = document.querySelector('.moon-bg')
const collider_images = document.querySelectorAll('.swiper img')
const lines = document.querySelectorAll('.lines')

document.addEventListener('mousemove', paralaks)

function paralaks(e) {
    if (window.matchMedia('screen and (min-width: 780px)').matches) {
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
///
///
///
///////////////////// Тык по логу = скролл на верх сайта /////////////////////
const logo = document.querySelector('.menu__logo');
const logo_phone = document.querySelector('.logo-phone');

const onLogoClick = () => {
    let scroll_to = $('body').offset().top;
    if ($('html, body').is(':animated'))
        return;
    if (window.scrollY == scroll_to)
        return;

    $('html, body').animate({
        scrollTop: scroll_to
    }, 1000);
}

logo.addEventListener('click', onLogoClick);
logo_phone.addEventListener('click', onLogoClick);
///////////////////// Тык по логу = скролл на верх сайта /////////////////////
///
///
///
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

const onMenuClick = (blockName, offset) => {
    let scroll_to = $(blockName).offset().top + offset;
    if ($('html, body').is(':animated'))
        return;
    if (window.scrollY == Math.floor(scroll_to))
        return;

    $('html, body').animate({
        scrollTop: scroll_to
    }, 1000);
    removeMenuOpened();
}

menu_tocenomic.addEventListener('click', () => onMenuClick('.tocenomics', -200));
menu_roadmap.addEventListener('click', () => onMenuClick('.roadmap', -220));
menu_titiland.addEventListener('click', () => onMenuClick('.titiland', -100));
menu_zoomloop.addEventListener('click', () => onMenuClick('.zoomloop', -180));
menu_miticoin.addEventListener('click', () => onMenuClick('.miticoin', -170));
///////////////////// Тык по меню скролл /////////////////////
///
///
///
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
                anim_item_point = anim_item_height - window.innerHeight / anim_start;
            }

            if ((scrollY > anim_item_offsetY - anim_item_point) && (scrollY < (anim_item_offsetY + anim_item_height))) {
                item.classList.add('_active');
            }
        });

    }
    animOnScroll();
}
///////////////////// Анимация /////////////////////
///
///
///
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
///
///
///
///////////////////// Перетаскивание блока кнопки /////////////////////
window.addEventListener('resize', btnRemove);
function btnRemove() {
    if (window.matchMedia('screen and (max-width: 768px)').matches)
        $(".titiland__more").appendTo(".titiland");
    else
        $(".titiland__more").appendTo(".titiland__content");

}
btnRemove()
///////////////////// Перетаскивание блока кнопки /////////////////////
///
///
///
///////////////////// Перетаскивание mititocen /////////////////////
window.addEventListener('resize', btnRemove);
function btnRemove() {
    if (window.matchMedia('screen and (max-width: 768px)').matches)
        $(".mititoken__button").appendTo(".mititoken");
    else
        $(".mititoken__button").appendTo(".mititoken__information");

}
btnRemove()
///////////////////// Перетаскивание mititocen /////////////////////
///
///
///
///////////////////// отправление почты /////////////////////
const email = document.querySelector('input');
const form_btn = document.querySelector('.form__btn');
const email_popup = document.querySelector('.email-accept');

function emailTest(value) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

form_btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (emailTest(email.value)) {
        email_popup.classList.add("open");
        $.ajax(`send.php/?email=${email.value}`).then(() => email.value = '')
    }
    else {
        email.classList.add("error");
        $('.form__item span').addClass("error");
    }
});

email.addEventListener('focus', () => {
    email.classList.remove("error");
    $('.form__item span').removeClass("error");
});
///////////////////// отправление почты /////////////////////
///
///
///
///////////////////// Убрать куки /////////////////////
const cookie_btn = document.querySelector('.cookie__btn');
const cookiewin = document.querySelector('.cookie');

cookie_btn.addEventListener('click', (e) => {
    cookiewin.classList.add("cookie--hide");

    let date = new Date;
    date.setDate(date.getDate() + 3);
    document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
});

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let cookiecook = getCookie("cookiecook");

// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no" || cookiecook == null) {
    cookiewin.classList.remove("cookie--hide");
}
///////////////////// Убрать куки /////////////////////
///
///
///
///////////////// Скролл на тим /////////////////
const team_personal = document.querySelector('.team__personal')

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    team_personal.scrollLeft -= (delta * 60); // Multiplied by 10

    if (team_personal.scrollLeft != 0 && (team_personal.scrollWidth - team_personal.clientWidth >= team_personal.scrollLeft))
        e.preventDefault();
}

if (team_personal.addEventListener) {
    // IE9, Chrome, Safari, Opera
    team_personal.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    team_personal.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    team_personal.attachEvent("onmousewheel", scrollHorizontally);
}
///////////////// Скролл на тим /////////////////
///
///
///
///////////////// mititocen hover /////////////////
const mititoken_hover_items = document.querySelectorAll(".mititoken__item");
const mititoken_value = document.querySelector(".mititoken__value");
const mititoken_image = document.querySelector(".mititoken__image");
const circle_hover_items = document.querySelectorAll(".unit");

const hoverMititocen = (item) => {
    let num;
    for (let i = 1; i <= mititoken_hover_items.length; i++)
        if (item.classList.contains("_" + i)) {
            num = "_" + i;
            break;
        }

    let base_value = "329 857 812";
    let values = {
        "_1": "131 943 125",
        "_2": "13 194 312",
        "_3": "118 748 812",
        "_4": "32 985 781",
        "_5": "32 985 781",
    }

    item.addEventListener("mouseenter", () => {
        if (item.classList.contains(num)) {
            mititoken_image.classList.add(num);
            mititoken_value.innerHTML = values[num];

            mititoken_hover_items.forEach(el => {
                if (el.classList.contains(num))
                    el.classList.add("hovered");
            });
        }
    })
    item.addEventListener("mouseleave", () => {
        if (item.classList.contains(num)) {
            mititoken_image.classList.remove(num);
            mititoken_value.innerHTML = base_value;

            mititoken_hover_items.forEach(el => {
                if (el.classList.contains(num))
                    el.classList.remove("hovered");
            });
        }
    })
}

mititoken_hover_items.forEach(item => hoverMititocen(item));
circle_hover_items.forEach(item => hoverMititocen(item));
///////////////// mititocen hove /////////////////
var vid = document.querySelectorAll("video");
vid.forEach((el) => {
    el.defaultMuted = true;
    el.play();
})
