/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => {
    item.remove();
})

document.querySelector('.promo__genre').innerHTML = 'Драма';
document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg)';


movieDB.movies.sort();

movieDB.movies.forEach((film, i ) => {
    document.querySelector('.promo__interactive-list').innerHTML += 
    `
    <li class='promo__interactive-item'>${i+1} ${film}
                            <div class='delete'></div>
                        </li>
    `
})

// for( let i = 0; i < movieDB.movies.length; i ++) {
//     const film = document.createElement('li');
//     film.classList = 'promo__interactive-item';  
//     document.querySelector('.promo__interactive-list').append(film);

//     film.innerHTML = movieDB.movies[i];
//     film.prepend(`${i+1} `);
// }