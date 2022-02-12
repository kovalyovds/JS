// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let foo = (a, b, c) => {(a < b && a < c) ? console.log(a) : (b < a && b < c) ? console.log(b) : console.log(c)};
//
// foo(7,6,1);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let foo = (a, b, c) => {(a > b && a > c) ? console.log(a) : (b > a && b > c) ? console.log(b) : console.log(c)};
//
// foo(1,2,3);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [1222, 3245, 123, 3456, 76, 1324, 234, 567, 23];
//
// let foo = (array) => {
//     let max = array[0];
//     for (let element of array) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// };
//
// console.log(foo(arr));

// - створити функцію яка повертає найменьше число з масиву

// let arr = [1222, 3245, -123, 3456, 76, 1324, 234, 4567, 23];
//
// let foo = (array) => {
//     let min = array[0];
//     for (let element of array) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// };
//
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [10, 30, 10, 60, 70, 40, 20, 40, 20];
//
// let foo = (array) => {
//     let sum = 0;
//     for (let element of array) {
//         sum += element;
//     }
//     return sum;
// };
//
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10, 30, 10, 60, 70, 40, 20, 40, 20, 50];
//
// let foo = (array) => {
//     let sum = 0;
//     for (let element of array) {
//         sum += element;
//     }
//     return sum / array.length;
// };
//
// console.log(foo(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let x = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (let argElement of arg) {
//         if (argElement > max) {
//             max = argElement;
//         }
//         if (argElement < min) {
//             min = argElement;
//         }
//     }
//     console.log(max);
//     return min;
// };
//
// console.log('min', x(4, 5, 6, 3, 20, 5, 6, -8, 1));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let foo = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.floor(Math.random() * 100);
//     }
//     return arr;
// };
//
// console.log(foo(5));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//   limit - аргумент, який характеризує кінцеве значення діапазону.

// let foo = (length, limit) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.floor(Math.random() * limit);
//     }
//     return arr;
// };
//
// console.log(foo(7, 10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let qq = [1, 2, 3, 4, 5];
//
// let reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//     return newArr;
// };
//
// console.log(reverse(qq));