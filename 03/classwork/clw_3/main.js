// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//         0   1   2  3   4   5   6   7   8     9
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// 2. перебрати його циклом for

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести числа тільки з непарним індексом

// i = 0;
// while (i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     if (i % 2 !== 0) {
//         console.log(arrElement);
//     }
// }

// 5. перебрати циклом while та вивести числа тільки парні значення

// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести числа тільки парні значення

// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     if (arrElement % 3 === 0) {
//         let arrElement = 'Okten';
//         console.log(`${i} ${arrElement}`);
//     } else {
//         console.log(arrElement);
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = arr.length - 1; i >= 0; i--) {
//     let arrElement = arr[i];
//     console.log(arrElement);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1
// let i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }
//2
// for (let i = arr.length - 1; i >= 0; i--) {
//     let arrElement = arr[i];
//     console.log(arrElement);
// }
//3
// i = arr.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }
//4
// for (let i = arr.length - 1; i >= 0; i--) {
//     let arrElement = arr[i];
//     if (i % 2 !== 0) {
//         console.log(arrElement);
//     }
// }
//5
// let i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }
//6
// for (let i = arr.length - 1; i >= 0 ; i--) {
//     let arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//     }
// }
//7
// for (let i = arr.length - 1; i >=0 ; i--) {
//     let arrElement = arr[i];
//     if (arrElement % 3 === 0) {
//         let arrElement = 'Okten';
//         console.log(`${i} ${arrElement}`);
//     } else {
//         console.log(arrElement);
//     }
// }