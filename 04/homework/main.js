// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function s(a, b) {
//     return sResult = a * b;
// }
//
// console.log(s(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function s(r) {
//     return sResult = 3.14 * (r ** 2);
// }
//
// console.log(s(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function s(h, r) {
//     return sResult = (2 * 3.14 * r * h) + (2 * 3.14 * (r ** 2));
// }
//
// console.log(s(4, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1, 2, 3, 4, 5, 'qwe', 'asd', 'zxc', true, false];
//
// function arrFun(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement = arr[i];
//         console.log(arrElement);
//     }
// }
//
// arrFun(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function msg(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// msg('Hi Mentor');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(txt) {
//     document.write(`<ul>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`</ul>`);
// }
//
// foo('asdf');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(txt, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// foo('qwer', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, 2, 3, 4, 5, 'qwe', 'asd', 'zxc', true, false];
//
// function foo(array) {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         document.write(`<li>${arrayElement}`);
//     }
//     document.write(`</ol>`);
// }
//
// foo(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

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
//     {id: 10, name: 'olya', age: 31},
//     {id: 11, name: 'max', age: 31}
// ];
//
// function userFoo(array) {
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
//     }
// }
//
// userFoo(users);