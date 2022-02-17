// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
//   якщо два аргументи - складає або конкатенує їх між собою.

// let foo = (...arg) => {
//     if (arg.length === 1) {
//         console.log(arg[0]);
//     } else {
//         let x = '';
//         for (let i = 0; i < arg.length; i++) {
//             let element = arg[i];
//             x += element;
//         }
//         console.log(x);
//     }
// };
//
// foo('qwer', 1, 2, 'asd');


// - створити функцію яка приймає два масиви та скаладає значення елементів з однаковими індексами
//   та повертає новий результуючий масив.
//   EXAMPLE:
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];
// результат [3,5,7,9]

// let newArr = [];
//
// let summ = (x, y) => {
//     for (let i = 0; i < x.length; i++) {
//         let x1 = x[i];
//         for (let j = 0; j < y.length; j++) {
//             let y1 = y[j];
//             if (i === j) {
//                 newArr[i] = x1 + y1;
//             }
//         }
//     }
//     return console.log(newArr);
// };
//
// summ(arr1,arr2);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrStr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

let newArrKey = [];

let key = (x) => {
    for (let x1 of x) {
        for (let keys in x1) {
            console.log(keys);
            let q = 0;
            keys[q] = keys;
            newArrKey[q] = keys;
            ++q;
        }
    }
    return console.log(newArrKey);
};

key(arrStr);



//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]