'use strict';
var btnPrev = document.querySelector('#gallery .buttons .prev');
var btnNext = document.querySelector('#gallery .buttons .next');
var images = document.querySelectorAll('#gallery .photos img');
var i = 0;
btnPrev.onclick = function () {
    images[i].className = '';
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].className = 'showed';
};
btnNext.onclick = function () {
    images[i].className = '';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = 'showed';
};