'use strict';
var btnPrev = document.querySelector('#gallery .buttons .prev');
var btnNext = document.querySelector('#gallery .buttons .next');
var images = document.querySelectorAll('#gallery .photos img'); //получаем массив фотографий
var i = 0;

btnPrev.onclick = function () {
    images[i].className = '';
    i--;

    //В ПРОГРАММИРОВАНИИ ЭЛЕМЕНТЫ СЧИТАЮТСЯ С 0!!! картинка с номером 0 у нас первая
    if (i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed';
};
btnNext.onclick = function () {
    images[i].className = ''; //скрываем текущую картинку по классу
    i++;

    if (i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed'; // открываем следующую ( уже текущую картинку) после скрытой по классу showed
};