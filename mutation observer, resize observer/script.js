'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecord => {
    console.log(MutationRecord);
});

observer.observe(box, {
    childList: true
});


////////////////////сверху отслеживаются изменения в box
////////////////////ниже прекращаем их отслеживать

observer.disconnect();