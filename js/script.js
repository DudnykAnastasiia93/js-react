// "use strict";

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

// let students = {
//   js: [
//     {
//       name: "John",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],
//   html: {
//     basic: [
//       {
//         name: "Katya",
//         progress: 70,
//       },
//       {
//         name: "Petya",
//         progress: 50,
//       },
//     ],
//     pro: [
//       {
//         name: "Vasya",
//         progress: 75,
//       },
//       {
//         name: "Olya",
//         progress: 40,
//       },
//     ]
//   }
// };

// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;

//   for(let course of Object.values(data)) {
//     if(Array.isArray(course)){
//       students += course.length
//       for(let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     }else {
//       for(let subCourse of Object.values(course)) {
//         students += subCourse.length;
//         for(let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }
//   return total / students;
// }

// console.log(getTotalProgressByIteration(students));

/////////////////////////////// та же задачка, только с помощью рекурсии, то есть универсальнее, и обрабатывает все вложенности обьекта

// let students = {
//   js: [
//     {
//       name: "John",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],
//   html: {
//     basic: [
//       {
//         name: "Katya",
//         progress: 70,
//       },
//       {
//         name: "Petya",
//         progress: 50,
//       },
//     ],
//     pro: [
//       {
//         name: "Vasya",
//         progress: 75,
//       },
//       {
//         name: "Olya",
//         progress: 40,
//       },
//     ],
//   }
// };

// function getTotalProgressByRecurtion(data) {
//   if(Array.isArray(data)) {
//     let total = 0;

//     for( let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }

//     return [total, data.length];
//   } else {
//     let total = [0, 0];

//     for (let subData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecurtion(subData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }
//     return total;
//   }
// }

// const result = getTotalProgressByRecurtion(students);

// console.log(result[0]/ result[1]);

///////////////////////////////////////события на мобильных устройствах, пример
// то же самое и с
// touchend
// touchmove
// touchcancel
// touchenter
// touchleave

// window.addEventListener("DOMContentLoaded", () => {
//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//         console.log('jdjdjd');
//     });
// });

////////////////////////////////////////свойства у   е(тот что preventDefault)  на мобильних устройствах

// touches             определяет сколько пальцев сейчас на экране
// targetToushes       определяет сколько пальцев взаимодействует именно с конкретным элементом
// changedTouches      определяет конкретный палец(или несколько) на котором сработало событие

// записываются e.touches;

////////////////////////////////////// оператор опцилнальной цепочки

// .?

// console.log(a?.textContent);

// если нет переменной а - не прерывает код, а продолжает действие и выводит undefined;
// работает только на чтение переменной

///////////////////////////////////// оператор нулевого слияния Nullish

// ??

// это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.

//////////////////////////////////////////создание массива из псевдомассива

// const arr = document.getElementsByClassName('box');
// console.log(Array.from(arr));

///////////////////////////////////////////////метод matches() ищет элемент по отличающемся классу, среди элемнтов с классом box найдет элемент с классом this

// const arr = document.querySelectorAll('.box');

// arr.forEach(box => {
//     if(box.matches('.this'))  console.log(box);

// });

//////////////////////////////////////////метод closest() ищет  родителя с заданным классом по всей цепочке
// const arr = document.querySelectorAll('.box');
// console.log(arr[0].closest('.wrapper'));

/////////////////////////////////////работа с датой и методы
// отсчет времени ведется в милисекундах и начинаеься с 1.1.1970

// let now = new Date();

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());    возвращает число
// console.log(now.getDay());    возвращает день недели в цифре
// console.log(now.getHours());     возвращает часы моего часового пояса
// console.log(now.getUTCHours());     возвращает часы 0 часового пояса

// console.log(now.getTimezoneOffset());   возвращает разница между 0ым и моим часовыс поясном в минутах

// console.log(now.getTime()); вернет время на сейчас в милисекундах

// аналог get свойство set, когда нужно задать параметры даты

////////////////////////////////////////измеряем время работы цикла

// let start = new Date();

// for (let i = 0; i < 1000000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл выполнился за ${end - start}`);

/////////////////////////////////функции-конструкторы ES5

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} вышел`);
// };

// const ivan = new User('Ivan', 28);
// const nastya = new User('nastya', 28);

// console.log(ivan);
// console.log(nastya);

// nastya.hello();
// ivan.exit();

//////////////////////////////////  контекст вызова this

// 1 обычная функция:  this = window, но если включить use strict this = undefined

// "use strict";

// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
///////////////////////////////////////////////

//////  2   контекст у методов объекта - всегда тот объект

// const obj = {
//     a: 20,
//     b: 19,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

////////  3  this в конструкторах и классах  - это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let ivan = new User('Ivan', 29);

// console.log(ivan);

////////////  4  передача cdойств обьекта в функции (ручное присваивание контекста) и разница между call()  и   aplly()

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Ivan'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

///////////  5  ручная привязка контекста this с помощью метода bind()

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(2));
// console.log(double(22));

/////////   6 у стрелочной функции нет своего контекста. она всегда его берет у родителя

// const double = (a) => {
//     return a * 2;
// };
// console.log(double(5));

// можификация стелочной функции из верхнего варианта в нижний

// const double = a => a * 2;

// console.log(double(5));

/////////////////////////////////////////создание классов

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     calcArea() {
//         return this.width * this.height;
//     }
// }

// const square = new Rectangle(10, 10);
// const square1 = new Rectangle(8, 54);
// const square2 = new Rectangle(6, 7);

// console.log(square.calcArea());
// console.log(square1.calcArea());
// console.log(square2.calcArea());

// ///////// создание наследоваемого  класса

// class RectangleWithTextAndColor extends Rectangle {
//     constructor(width, height, text, color) {
//         super(width, height);
//         this.text = text;
//         this.color = color;
//     }
//     showMyProps() {
//         console.log(`Text: ${this.text}, Color: ${this.color}`);
//     }
// }

// const div = new RectangleWithTextAndColor(23, 10, 'Nastya', 'red');

// div.showMyProps();

// console.log(div.calcArea());

///////////////////////////////////оператор rest ( противоположный spread )

const log = function (a, b, c, ...rest) {
  console.log(a, b, c, rest);
};


log(5, 6, 3, 3, 3, 9);  ////// переменные которые попадают в rest выводятся массивом


function calcOrDouble(a, b =2) {  /////////такая запись второго аргумента говорит, что если  2ой аргумент не передан = ему присваивается 2
    console.log(a * b);
}

calcOrDouble(4);








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
