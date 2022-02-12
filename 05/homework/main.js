// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника

// let s = (a, b) => a * b;
//
// console.log(s(2,5));

// - створити функцію яка обчислює та повертає площу кола

// let s = (r) => 3.14 * (r ** 2);
//
// console.log(s(5));

// - створити функцію яка обчислює та повертає площу циліндру

// let s = (h, r) => {return (2 * 3.14 * r * h) + (2 * 3.14 * (r ** 2))};
//
// console.log(s(5,3));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let a = [100, 200, 300];
//
// let b = (array) => {
//     for (let element of array) {
//         console.log(element);
//     }
// };
//
// b(a);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let txt = (message) => {
//     document.write(`<p>${message}</p>`);
// };
//
// txt('okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ulLi = (message) => {
//     document.write(`<ul>`);
//     document.write(`<li>${message}</li>`);
//     document.write(`<li>${message}</li>`);
//     document.write(`<li>${message}</li>`);
//     document.write(`</ul>`);
// };
//
// ulLi('asd');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulLi = (message, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${message}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// ulLi('qwerty', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [10, 20, 30, 'qwe', 'asd', true, false, 'zxc'];
//
// let foo = (arr) => {
//     document.write(`<ol>`);
//     for (let arrEl of arr) {
//         document.write(`<li>${arrEl}</li>`);
//     }
//     document.write(`</ol>`);
// }
//
// foo(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 11, name: 'olya', age: 31},
//     {id: 12, name: 'max', age: 31}
// ];
//
// let user = (array) => {
//     for (let element of array) {
//         document.write(`<div>${element.id} - ${element.name} (${element.age}).</div>`);
//     }
// };
//
// user(users);