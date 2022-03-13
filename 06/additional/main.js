// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cetString = (str, n) => {
    let arr = [];
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.substring(i, i + n));
    }
    return arr;
};

console.log(cetString('наслаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
//   данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//   функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let validator = (email) => {
//     email.toLowerCase();
//     let check = [];
//     let emailStr = '';
//     for (let i = 0; i < email.length; i++) {
//         let element = email[i];
//         if (email[i] !== ' ' || email[i] !== '_' || email[i] !== '-' || email[i] !== '/') { //і тому подібні знаки...
//             check.push(email[i]);
//             // for (let j = 0; j < check.length; j++) {
//             //     let element1 = check[j];
//             // if (email[i] === '@' && email[i + 1] !== '.' && email[i - 1] === 'string') {
//             //     console.log('OK');
//             // }
//         }
//     }
//     for (const checkElement of check) {
//         emailStr += checkElement;
//     }
//     return console.log(emailStr);
// };
//
// validator('someeMAIL@iq.ua');

//         if (email[i] === '@' && email[i + 2] === '.') {
//             console.log('OK');
//         } else if (email[i] === '@') {
//             check.push(email[i]);
//             console.log(check);
//         }
//             }
// };


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
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
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'