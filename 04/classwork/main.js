// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function foo(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// foo(55, 33, 88);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function foo(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// foo(24, 67, 44);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [1222, 3245, 123, 3456, 76, 1324, 234, 4567, 23];
//
// function foo(array) {
//     let max = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
//
// console.log(foo(arr));

// - створити функцію яка повертає найменьше число з масиву

// let arr = [1222, 3245, -123, 3456, 76, 1324, 234, 4567, 23];
//
// function foo(array) {
//     let min = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
//
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад [1,2,10]->13

// let arr = [10, 30, 10, 60, 70, 40, 20, 40, 20];
//
// function foo(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
//
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10, 30, 10, 60, 70, 40, 20, 40, 20, 50];
//
// function foo(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum / array.length;
// }
//
// console.log(foo(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//   (Math використовувати заборонено);

// function foo(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let argElement of arguments) {
//         if (argElement > max) {
//             max = argElement;
//         }
//         if (argElement < min) {
//             min = argElement;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log('min', foo(4, 5, 6, 3, 2, 5, 6, 8, 1));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function foo(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.floor(Math.random() * 100);
//     }
//     return arr
// }
//
// console.log(foo(4));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//   limit - аргумент, який характеризує кінцеве значення діапазону.

// function foo(length, limit) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.floor(Math.random() * limit);
//     }
//     return arr
// }
//
// console.log(foo(4, 10));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let qq = [1, 2, 3];
//
// function reverse(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//     return newArr;
// }
//
// console.log(reverse(qq));