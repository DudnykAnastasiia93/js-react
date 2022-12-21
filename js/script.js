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

////////////////////////////////////////создание прототипов

// const soldier = {
//     health: 400,
//     armor: 99,
//     hello: function() {
//         console.log('Hello')
//     }
// }

// const john = Object.create(soldier);

// john.hello();

// Object.setPrototypeOf(john, soldier); //унаследование прототипа

//////////////////////////создание счетчика

// function createCounter() {
//   let counter = 0;

//   const myFunction = function() {
//     counter = counter + 1;
//     return counter;
//   }
//   return myFunction;
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

/////////////////////////////////////задачки с собеседований

// let x = 5;

// alert(x++);

// ответ 5

////////////

// const res = [] + false - null + true;

// console.log(res);

// ответ NaN

/////////////

// let y = 1;

// let x = y = 2;

// alert(x);

// Ответ 2

/////////////

// const res = [] + 1 + 2;

// console.log(res);

// Ответ 12

//////////////

// alert("1"[0]);

// Ответ 1 (string)

// console.log(2 && 1 && null && 0 && undefined);

// ответ null (оператор && всегда запинается на лжи, оператор || наоборот на правде)

//////

// console.log(!!(1 && 2 ) == (1 && 2 ))

// Ответ false, выражения не равны, потому что !! переводит код в булиновое значение

///////////////

// alert(null || 2 && 3 || 4);

// ответ 3

////////////////

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a == b);

// ответ false

///////////////

// alert(+"Infinity");

// ответ выведет Infinity с типом данных число
/////////////////////

// console.log("Ежик" > "яблоко");

// ответ false

//////////////////////

// console.log(0 || '' || 2 || undefined || true || false);

// ответ 2

///////////////////////метод childNodes для элементов, а не для нод

// for( let node of document.body.childNodes) {
//   if (node.nodeName == '#text') {
//     continue;
//   }
//     console.log(node);
//
// }

//////////////////////////////////////////// рекурсия (вызов функции внутри ее же)

// function pow(x, n) {
//   let result = 1;

//   for( let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// сверху функция возведения числа в степень, ниже то же самое, только с помощью рекурсии

// function pow(x, n) {
//   if(n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n-1);
//   }
// }

// pow(2, 1) // 2
// pow(2, 2) // 4
// pow(2, 3) // 8
// pow(2, 4) // 16

//////////////////////////////////задачка с подсчетом студентов и прогрессом

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "Katya",
        progress: 70,
      },
      {
        name: "Petya",
        progress: 50,
      },
    ],
    pro: [
      {
        name: "Vasya",
        progress: 75,
      },
      {
        name: "Olya",
        progress: 40,
      },
    ]
  }
};


function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for(let course of Object.values(data)) {
    if(Array.isArray(course)){
      students += course.length
      for(let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    }else {
      for(let subCourse of Object.values(course)) {
        students += subCourse.length;
        for(let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }
  return total / students;
}

console.log(getTotalProgressByIteration(students));

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//         b = prompt("На сколько оцените его?", "");

//       if (
//         a != null &&
//         b != null &&
//         a != "" &&
//         b != "" &&
//         a.length < 50 &&
//         b.length < 50
//       ) {
//         personalMovieDB.movies[a] = b;
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       console.log("Слишком мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классный зритель");
//     } else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман");
//     } else {
//       console.log("произошла ошибка");
//     }
//   },
//   showMyDB: function () {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres: function () {
//     // for (let i = 1; i <= 3; i++) {
//     //   let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//     //   if (genre === "" || genre === null) {
//     //     console.log("телега");
//     //     i--;
//     //   } else {
//     //     personalMovieDB.genres[i - 1] = genre;
//     //   }
//     // }

//    ///////////////////////////////////////////////////////////////////////////////то же самое немного по-другому

//     for (let i = 1; i < 2; i++) {
//       let genre = prompt("Введите ваши любимые жанры через запятую");

//       if (genre === "" || genre === null) {
//         console.log("телега");
//         i--;
//       } else {
//         personalMovieDB.genres = genre.split(", ");
//       }
//     }

//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Ваш любимый жанр ${item} под номером ${i + 1}`);
//     });
//   }
// };
