const but_select = document.querySelector('.footer__lang');
const select = document.querySelectorAll('.footer__lang--item');
const current_select = document.querySelector('.footer__lang--current');

let lang = getCookie("lang") || "ru";
current_select.innerHTML = document.querySelector(`[data-value = ${lang}]`).innerHTML;
translation();

but_select.addEventListener("click", () => {
    but_select.classList.toggle("active");
});

select.forEach((el) => {
    el.addEventListener("click", () => changeLanguage(el));
})

// перенаправить на url с указанием языка
function changeLanguage(el) {
    if (lang != el.dataset.value && el.dataset.value !== 'zh') {
        lang = el.dataset.value;
        translation();

        let date = new Date;
        date.setDate(date.getDate() + 30);
        document.cookie = `lang=${lang}; path=/; expires=` + date.toUTCString();

        current_select.innerHTML = el.innerHTML;
    }
}

function translation() {
    const translate_blocks = document.querySelectorAll('[data-lang]');
    const rmPoints = document.querySelectorAll('.rm_point');

    translate_blocks.forEach(el => {
        el.innerHTML = translate[lang][el.dataset.lang];
    });

    rmPoints.forEach(point => {
        let pointNum = point.className.match(/point-\d+/)[0];
        point.querySelector(".p-info").innerHTML = translate[lang][pointNum];

        if (point.querySelector(".p-title")) {
            point.querySelector(".p-title").innerHTML = translate[lang][pointNum + 'd'];
        }
    });

}


// const userLang = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
