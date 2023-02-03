"use strict";

const box = document.querySelector(".box");
const btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight; /////////////////значения высоты и ширины блока без учета маржинов но с учетом скролла и паддингов

// const width = box.offsetWidth;
// const height = box.offsetHeight;  ///////////////значения высоты и ширины блока с учетом маржинов,скролла и паддингов

// const height = box.scrollHeight; /////////////////высота скроллового блока
// const toper = box.scrollTop; /////////////////расстояние к верзхней границе блока

// console.log(width, height, toper);

btn.addEventListener("click", () => {
  box.style.height = box.scrollHeight + "px";
});


console.log(box.getBoundingClientRect());////////////////////метод для получения координат расположения элемента на странице
console.log(box.getBoundingClientRect().top);////////////////получить только топ и по аналогии остальные можно