// - Дано натуральное число n. Выведите все числа от 1 до n.

// let foo = (n) => {
//     if (typeof n === 'number') {
//         for (let i = 1; i <= n; i++) {
//             document.write(`${i} `);
//         }
//     } else {
//         alert('Введіть число');
//     }
// };
//
// foo(1234);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
//   в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let foo = (a, b) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//         if (a < b) {
//             for (let i = a; i <= b; i++) {
//                 document.write(`${i} `);
//             }
//         } else if (a > b) {
//             for (let i = a; i >= b; i--) {
//                 document.write(`${i} `);
//             }
//         } else {
//             document.write(`Числа равні ${a}=${b}!`)
//         }
//     } else {
//         alert('Введіть число');
//     }
// };
//
//
// foo(10, 5);

// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться
//   в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = [];

let foo = (array, i) => {
        let a = array[i];
        array[i] = array[i + 1];
        array[i + 1] = a;
    return array;
};

console.log(foo([9,8,0,4], 0));
console.log(foo([9,8,0,4], 1));
console.log(foo([9,8,0,4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець массиву.
//   Зберігаючи при цьому порядок не нульових значень. Довжина масиву від 2 до 100

// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let f = (array, q) => {
    let zeroArr = [];
    let otherArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element === q) {
            zeroArr.push(element);
        } else {
            otherArr.push(element);
        }
    }
    return otherArr.concat(zeroArr);
};

console.log(f([1,0,6,0,3], 0));
console.log(f([0,1,2,3,4], 0));
console.log(f([0,0,1,0], 0));