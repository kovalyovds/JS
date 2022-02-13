// - Знайти та вивести довижину настипних стрінгових значень
//  'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

console.log(' dirty string   '.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let strArr = 'Каждый охотник желает знать';

let foo = (str) => str.split(' ');

console.log(foo(strArr));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//   що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let del = (txt, num) => txt.substring(0, num);

console.log(del('Каждый охотник желает знать', 9));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//   При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
//   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insertDash = (str) => str.replaceAll(' ', '-').toUpperCase();

console.log(insertDash('HTML JavaScript PHP'));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let fReg = (str) => str[0].toUpperCase() + str.slice(1);

console.log(fReg('asdf'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');

console.log(capitalize('okten hi you are welcome'));