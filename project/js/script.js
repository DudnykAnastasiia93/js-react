/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img");
  const addMovieInput = document.querySelector(".adding__input");
  const movieList = document.querySelector(".promo__interactive-list");
  const form = document.querySelector(".add");
  const favoriteCheck = document.querySelector("[type='checkbox']");

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    document.querySelector(".promo__genre").innerHTML = "Драма";
    document.querySelector(".promo__bg").style.background = "url(img/bg.jpg)";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let film = addMovieInput.value;
    const checked = favoriteCheck.checked;

    if (checked) {
      console.log("дОбавляем любимый фильм");
    }

    if (film.length > 21) {
      film = `${film.substring(0, 22)}...`;
    }

    if (film) {
      movieDB.movies.push(film);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();

    console.log(movieDB.movies);
  });

  function createMovieList(films, parent) {
    parent.innerHTML = "";

    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class='promo__interactive-item'>${i + 1} ${film}
                                <div class='delete'></div>
                            </li>
        `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);

  makeChanges();

  createMovieList(movieDB.movies, movieList);
});
