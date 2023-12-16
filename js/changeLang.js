translation();

function translation() {
	const lang = 'en'

	const getTranslate = (key) => {
		try {
			return translate[key][lang] || '';
		} catch {
			return '';
		}
	};

	const translate_blocks = document.querySelectorAll('[data-lang]');
	const rmPoints = document.querySelectorAll('.rm_point');

	const email_input = document.getElementById('email');
	email_input.placeholder = 'Email';

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