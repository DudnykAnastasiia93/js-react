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


/////////////////////////////////

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// let counter = 0;

// for( let key in options ) {
//     if(typeof(options[key]) === "object") {
//         for(let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);


/////////////////////////////////////////////

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// console.log(Object.keys(options).length);

// // деструктуризация

// const {border, bg} = options.colors;

// console.log(border);




/////////////////////////////////////////клонирование объекта

// function copy(mainObj) {
//     let copyObj = {};

//     for(let key in mainObj) {
//         copyObj[key] = mainObj[key];
//     }
//     return copyObj;
// }

// const numbers = {
//     a: 1,
//     b: 4,
//     c: {
//         x: 6,
//         z: 4
//     }
// }

// const newNumbers = copy(numbers);

// newNumbers.a = 11;

// console.log(numbers);
// console.log(newNumbers);


/////////////////////////////////////////клонирование объекта

// const add = {
//     d: 4,
//     e: 9
// }

// const clone = Object.assign({}, add);

// clone.d = 30;

// console.log(add);
// console.log(clone);


/////////////////////////////////////////клонирование массива

// const oldArr = ['a', 'b', 'c'];

// const newArr = oldArr.slice();

// newArr[1] = 'ewfwf';

// console.log(newArr);
// console.log(oldArr);



////////////////////////////////оператор SPREAD

// const blog = ['q', 'w', 'w'],
//       sites = ['f', 'd', 'p'],
//       internet = [...blog, ...sites, 'n', 'c'];
    
// console.log(internet);

///////////

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [1, 8, 4];

// log(...num);




///////////////////////создание копий объектов черех оператор spread 

// const obj = {
//     one: 1,
//     two: 2
// }

// const newObj = {...obj};

// newObj.one = 22;

// console.log(obj);
// console.log(newObj);

//////////////////////слияние объектов

// const numbers = {
//     a: 1,
//     b: 4,
//     c: {
//         x: 6,
//         z: 4
//     }
// }

// const add = {
//     d: 4,
//     e: 9
// }

// console.log(Object.assign(numbers, add));



// let numberOfFilms; 

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ) {
            
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Слишком мало фильмов');
//     } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классный зритель');
//     } else if(personalMovieDB.count >= 30)  {
//         console.log('Вы киноман');
//     } else {
//         console.log('произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(let i = 0; i < 3;  i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
//     }
//     console.log(personalMovieDB);
// }

// writeYourGenres();