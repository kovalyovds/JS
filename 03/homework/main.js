// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr1 = [123, 56426, 8945, 21121, 5654];
// let arr2 = ['qweqwe', 'asdqwd', 'ykughfd', 'hbvcxp', 'etgdvn'];
// let arr3 = ['qqqqqq', 44444, true, 'qwerty', false];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 12345;
// arr[1] = 'qwe';
// arr[2] = true;
// arr[3] = 98765;
// arr[4] = false;
// arr[5] = 'asd';
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>sadfdfag</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>asdfgasdf ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// while (i < 20) {
//     document.write(`<h1>Okten</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
// while (i < 20) {
//     document.write(`<h1>Okten ${i}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];
// for (let number of arr) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['sadf','awEFASDF','WEFSA','sdfgn','eowiprtgu','isudyfc','nvbcm','zmdgWasd','pWMSJNB','KJnj'];
// for (let string of arr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['qqqqqq', 44444, true, 'qwerty', false, 3245234, 'sadjbnfcjsdnc', [1,2,3,4,5], 'idfsjiv', true];
// for (let arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [666, 'qwer', true, 555, false, 'ewr123', true, 2341231, false, 44444444];
// for (let arrElement of arr) {
//     if (typeof arrElement === 'boolean') {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [666, 'qwer', true, 555, false, 'ewr123', true, 2341231, false, 44444444];
// for (let arrElement of arr) {
//     if (typeof arrElement === 'number') {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [666, 'qwer', true, 555, false, 'ewr123', true, 2341231, false, 44444444];
// for (let arrElement of arr) {
//     if (typeof arrElement === 'string') {
//         console.log(arrElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 12345;
// arr[1] = 'qwe';
// arr[2] = true;
// arr[3] = 98765;
// arr[4] = false;
// arr[5] = 'asd';
// arr[6] = 3456;
// arr[7] = [123, true, 'asd'];
// arr[8] = 'ofdkgbodk';
// arr[9] = 2093874;
// for (let arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }