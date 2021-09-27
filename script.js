let offset = 0;
const sliderLine = document.querySelector('.slider-items');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 1000;
    if (offset > 4000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 1000;
    if (offset < 0) {
        offset = 4000;
    }
    sliderLine.style.left = -offset + 'px';
});