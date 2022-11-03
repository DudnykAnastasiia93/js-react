"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 50;

// ( num === 50 ) ? console.log('ok!') : console.log('error');

// свитч кейс

// const num = 50;

// switch(num) {
//     case 49:
//         console.log('no');
//         break;
//     case 100:
//         console.log('no');
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('nonono');
//         break;
// }

////////////////////////////////////////////

// задачка елочка


// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

///////////////////////////////////////////////////////////////////////////

// вложенные циклы и метки



// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ) {
        
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Слишком мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классный зритель');
} else if(personalMovieDB.count >= 30)  {
    console.log('Вы киноман');
} else {
    console.log('произошла ошибка');
}

console.log(personalMovieDB);
