$(document).ready(function () {
    img_count = $('img').length;
    video_count = $('video').length;
    media_count = img_count + video_count;

    const span = document.querySelector('.percents');
    const preload = document.querySelector('.preloader');

    const circle = document.querySelector('circle');
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    percent = 100 / media_count;
    progress = 0;
    loaded_media = 0;

    for (let i = 0; i < img_count; i++) {
        let img_copy = new Image();
        img_copy.src = document.images[i].src;
        img_copy.onload = madia_load;
        img_copy.onerror = madia_load;
    }


    function madia_load() {
        loaded_media++;
        progress += percent;
        span.innerHTML = progress.toFixed();
        let offset = circumference - progress / 100 * circumference;
        circle.style.strokeDashoffset = offset;

        if (progress >= 100 || loaded_media == img_count) {
            span.innerHTML = 100
            document.body.classList.remove('overflow--hide');
            preload.classList.add('preloader--hide');
            circle.style.strokeDashoffset = 0;
        }
    }
});