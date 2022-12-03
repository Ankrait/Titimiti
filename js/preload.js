$(document).ready(function () {
    img_count = $('img').length;
    video_count = $('video').length;
    media_count = img_count + video_count;

    const span = document.querySelector('.procents');
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

// let img = document.images,
//     img_count = img.length,
//     img_loaded_count = 0;

// for (let i = 0; i < img_count; i++) {
//     img_clone = new Image();
//     img_clone.onload = img_loaded;
//     img_clone.onerror = img_loaded;
//     image_clone.src = img[i].src;
// }

// function img_loaded() {
//     img_loaded_count++;
//     console.log(img_loaded_count);

//     if (img_loaded_count > img_count) {
//         document.body.classList.remove('overflow--hide')
//     }
// }