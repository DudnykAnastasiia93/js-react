'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;


window.addEventListener("DOMContentLoaded", () => {
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('jdjdjd');
    });
});




// function changeParams(elem, h, w) {
//     elem.style.height = `${h}px`;
//     elem.style.width = `${w}px`;
// }

// changeParams(box, newHeight, newWidth);