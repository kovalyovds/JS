// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr = [];

// for (let i = 0; i < 50; i++) {
//     arr[i] = (i + 2) * 2;
// }
// console.log(arr);

// for (let i = 0; i < 50; i++) {
//     let q = i + 1;
//     if (q % 2 !== 0) {
//         arr[i] = i + 1;
//     } else {
//         arr[i] = i;
//     }
// }
// console.log(arr);

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 100);
// }
// console.log(arr);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// for (let i = 0; i < 20; i++) {
//     arr[i] = getRandomInt(8, 732);
// }
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемент

// for (let i = 0; i < 50; i++) {
//     if (i % 3 === 0) {
//         arr[i] = (i + 2) * 2;
//         console.log(arr[i]);
//     }
// }

// for (let i = 0; i < 50; i++) {
//     if (i % 3 === 0) {
//         let q = i + 1;
//         if (q % 2 !== 0) {
//             arr[i] = i + 1;
//             console.log(arr[i]);
//         } else {
//             arr[i] = i;
//             console.log(arr[i]);
//         }
//     }
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 3 === 0) {
//         arr[i] = Math.floor(Math.random() * 100);
//         console.log(arr[i]);
//     }
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// for (let i = 0; i < 20; i++) {
//     if (i % 3 === 0) {
//         arr[i] = getRandomInt(8, 732);
//         console.log(arr[i]);
//     }
// }


// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.

// for (let i = 0; i < 50; i++) {
//     if (i % 3 === 0) {
//         arr[i] = (i + 2) * 2;
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// console.log(arr[i]);

// for (let i = 0; i < 50; i++) {
//     if (i % 3 === 0) {
//         let q = i + 1;
//         if (q % 2 === 0) {
//             arr[i] = i + 1;
//             console.log(arr[i]);
//         } else {
//             arr[i] = i;
//             console.log(arr[i]);
//         }
//     }
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 3 === 0) {
//         arr[i] = Math.floor(Math.random() * 100);
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// for (let i = 0; i < 20; i++) {
//     if (i % 3 === 0) {
//         arr[i] = getRandomInt(8, 732);
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив

// let arrNew = [];

// for (let i = 0; i < 50; i++) {
//     if (i % 3 === 0) {
//         arr[i] = (i + 2) * 2;
//         if (arr[i] % 2 === 0) {
//             arrNew[i] = arr[i];
//         }
//     }
// }
// console.log(arrNew);

// for (let i = 0; i < 50; i++) {
//     if (i % 3 === 0) {
//         let q = i + 1;
//         if (q % 2 === 0) {
//             arr[i] = i + 1;
//             arrNew[i] = arr[i];
//         } else {
//             arr[i] = i;
//             arrNew[i] = arr[i];
//         }
//     }
// }
// console.log(arrNew);

// for (let i = 0; i < 20; i++) {
//     if (i % 3 === 0) {
//         arr[i] = Math.floor(Math.random() * 100);
//         if (arr[i] % 2 === 0) {
//             arrNew[i] = arr[i];
//         }
//     }
// }
// console.log(arrNew);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// for (let i = 0; i < 20; i++) {
//     if (i % 3 === 0) {
//         arr[i] = getRandomInt(8, 732);
//         if (arr[i] % 2 === 0) {
//             arrNew[i] = arr[i];
//         }
//     }
// }
// console.log(arrNew);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let EXAMPLE = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < EXAMPLE.length; i++) {
//     let exampleElement = EXAMPLE[i];
//     if (exampleElement % 2 === 0) {
//         console.log(EXAMPLE[i - 1]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let price = [100, 250, 50, 168, 120, 345, 188];


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrNew = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 100);
//     arrNew[i] = arr[i] * 5;
// }
// console.log(arrNew);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.