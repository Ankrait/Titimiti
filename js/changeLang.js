const but_select = document.querySelector('.footer__lang');
const select = document.querySelectorAll('.footer__lang--item');
const current_select = document.querySelector('.footer__lang--current');

let language = getCookie('lang') || 'ru';
current_select.innerHTML = document.querySelector(`[data-value = ${language}]`).innerHTML;
translation(language);

but_select.addEventListener('click', () => {
	but_select.classList.toggle('active');
});

select.forEach((el) => {
	el.addEventListener('click', () => changeLanguage(el));
});

function changeLanguage(el) {
	if (language !== el.dataset.value && el.dataset.value !== 'zh') {
		language = el.dataset.value;
		translation(el);

		let date = new Date();
		date.setDate(date.getDate() + 30);
		document.cookie = `lang=${language}; path=/; expires=` + date.toUTCString();

		current_select.innerHTML = el.innerHTML;
	}
}

function translation(lang) {
	const getTranslate = (key) => {
		try {
			return translate[key][language] || '';
		} catch {
			return '';
		}
	};

	const translate_blocks = document.querySelectorAll('[data-lang]');
	const rmPoints = document.querySelectorAll('.rm_point');

	const email_input = document.getElementById('email');
	if (language == 'en') email_input.placeholder = 'Email';
	else if (language == 'ru') email_input.placeholder = 'Электронная почта';

	translate_blocks.forEach((el) => {
		el.innerHTML = getTranslate(el.dataset.lang);
	});

	rmPoints.forEach((point) => {
		const pointNum = point.className.match(/point-\d+/)[0];

		const text = getTranslate(pointNum);
		if (text) {
			point.querySelector('.p-info').innerHTML = getTranslate(pointNum);
		}

		if (point.querySelector('.p-title')) {
			const text = getTranslate(pointNum + 'd');
			if (text) {
				point.querySelector('.p-title').innerHTML = text;
			}
		}
	});
}

// const userLang = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';

// const translate_blocks = document.querySelectorAll('[data-lang]');
// const rmPoints = document.querySelectorAll('.rm_point');
// const tr = {}
// translate_blocks.forEach(el => {
//     tr[el.dataset.lang] = el.innerHTML.trim();
// });

// let str = "";
// for (let el in tr){
//     str+= '"' + el + '": ' +  '"' + tr[el].split('\n').join().trim() + '",';
// }
// let json = JSON.stringify(tr);
