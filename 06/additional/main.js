// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cetString = (str, n) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i += n) {
//         arr.push(str.substring(i, i + n));
//     }
//     return arr;
// };
//
// console.log(cetString('наслаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти.
//   Перевірка повинна включати в себе:
//   данні до знака равлика(@),
//   наявність равлика,
//   крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//   функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validator = (email) => {
    let test = email.toLowerCase();
    let index = 100;
    for (let i = 0; i < test.length; i++) {
        if (test[i] === ' ' || test[i] === '_' || test[i] === '-' || test[i] === '/' || test[i] === '=' || test[i] === '+') {
            console.log(`Введіть email без знаку "${test[i]}"`);
            return
        } else if (test[i] === '@') {
            index = i;
            if (index < test.lastIndexOf('.') - 1) {
            } else {
                console.log('Не вистачає "."')
                return
            }
        }
    }
    return console.log(test);
};

validator('SoMe.EmAil@gmail.com');

// //         if (email[i] === '@' && email[i + 2] === '.') {
// //             console.log('OK');
// //         } else if (email[i] === '@') {
// //             check.push(email[i]);
// //             console.log(check);
// //         }
// //             }
// // };
// // && test[i] === '@' && test[i + 1] !== '.'
//
// // check.push(test[i]);


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let sort = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
//
// console.log(sort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//   let symb = "о", str = "Астрономия это наука о небесных объектах";
//   document.writeln(count(str, symb)) // 5

// let count = (str, stringsearch) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === `${stringsearch}`) {
//             arr.push(str[i]);
//         }
//     }
//     return console.log(arr.length);
// };
//
// count('Астрономия это наука о небесных объектах', 'о');

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//   let str = "Сила тяжести приложена к центру масс тела";
//   document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutString = (str, n) => {
//     let result = [];
//     let arrayStr = str.split(' ');
//     for (let i = 0; i < n; i++) {
//         result.push(arrayStr[i])
//     }
//     return console.log(result.join(' '));
// };
//
// cutString('Сила тяжести приложена к центру масс тела', 5);