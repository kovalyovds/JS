// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let as = 'hello';
let as1 = 'owu';
let as2 = 'com';
let as3 = 'ua';
let as4 = 1;
let as5 = 10;
let as6 = -999;
let as7 = 123;
let as8 = 3.14;
let as9 = 2.7;
let as10 = 16;
let as11 = true;
let as12 = false;

console.log(as);
console.log(as1);
console.log(as2);
console.log(as3);
console.log(as4);
console.log(as5);
console.log(as6);
console.log(as7);
console.log(as8);
console.log(as9);
console.log(as10);
console.log(as11);
console.log(as12);

// alert(as);
// alert(as1);
// alert(as2);
// alert(as3);
// alert(as4);
// alert(as5);
// alert(as6);
// alert(as7);
// alert(as8);
// alert(as9);
// alert(as10);
// alert(as11);
// alert(as12);


document.write(as);
document.write(as1);
document.write(as2);
document.write(as3);
document.write(as4);
document.write(as5);
document.write(as6);
document.write(as7);
document.write(as8);
document.write(as9);
document.write(as10);
document.write(as11);
document.write(as12);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

as = 4444;
as1 = 1122;
as2 = 1231231231;
as3 = 'qwerty';
as4 = 'qqaazz';
as5 = 'qqqqqqqq';
as6 = 55555;
as7 = 'q1w2e3r45t';
as8 = 854.258;
as9 = 'sdfvaefvqever';
as10 = 111111111;
as11 = 1212121212121;
as12 = 777777777;

console.log(as);
console.log(as1);
console.log(as2);
console.log(as3);
console.log(as4);
console.log(as5);
console.log(as6);
console.log(as7);
console.log(as8);
console.log(as9);
console.log(as10);
console.log(as11);
console.log(as12);

// alert(as);
// alert(as1);
// alert(as2);
// alert(as3);
// alert(as4);
// alert(as5);
// alert(as6);
// alert(as7);
// alert(as8);
// alert(as9);
// alert(as10);
// alert(as11);
// alert(as12);


document.write(as);
document.write(as1);
document.write(as2);
document.write(as3);
document.write(as4);
document.write(as5);
document.write(as6);
document.write(as7);
document.write(as8);
document.write(as9);
document.write(as10);
document.write(as11);
document.write(as12);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Денис';
let middleName = 'Сергійович';
let lastName = 'Ковальов';

let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let fName = prompt('Ім`я');
let mName = prompt('По батькові');
let old = prompt('Вік');
console.log('Вітаю', fName, mName, 'Тобі', old, 'років.')


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(123 === '123');
console.log(123 == '123');

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");