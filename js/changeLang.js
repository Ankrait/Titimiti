const but_select = document.querySelector('.footer__lang');
const select = document.querySelectorAll('.footer__lang--item');
const current_select = document.querySelector('.footer__lang--current')
const allLang = ['en', 'ru', 'zh'];

let lang = getCookie("lang") || "en";
current_select.innerHTML = document.querySelector(`[data-value = ${lang}]`).innerHTML;
translation();

// const userLang = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';

but_select.addEventListener("click", () => {
    but_select.classList.toggle("active");
});

select.forEach((el) => {
    el.addEventListener("click", () => changeLanguage(el));
})

// перенаправить на url с указанием языка
function changeLanguage(el) {
    if (lang != el.dataset.value) {
        lang = el.dataset.value;
        translation();

        let date = new Date;
        date.setDate(date.getDate() + 30);
        document.cookie = `lang=${lang}; path=/; expires=` + date.toUTCString();

        current_select.innerHTML = el.innerHTML;
    }
}

function translation() {
    let translate_blocks = document.querySelectorAll('[data-lang]');
    translate_blocks.forEach(el => {
        el.innerHTML = translate[lang][el.dataset.lang];
    });
}
