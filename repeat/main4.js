// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let s1 = (a, b) => a * b;

console.log(s1(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let s2 = (r) => (3.14 * Math.pow(r, 2));

console.log(s2(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let s3 = (h, r) => (2 * 3.14 * r * h + 2 * 3.14 * Math.pow(r, 2));

console.log(s3(1, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [11, 22, 33, 44, 55, 66];

let foo = () => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};

foo(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let p = (add) => {
    document.write(`<p>${add}</p>`);
};

p('qwerty');
p('123qwed123');

// - створити функцію яка створює ul з трьома елементами li.
//   Текст li задати через аргумент всім однаковий

let ul = (txt) => {
    document.write(`<ul>`)
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`</ul>`)
};

ul('qazwsx');

// - створити функцію яка створює ul з трьома елементами li.
//   Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ul1 = (agr, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${agr}</li>`)
    }
    document.write(`</ul>`)
};

ul1('qweasdzxc12', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//   та будує для них список

let ol = (arrOl) => {
    document.write(`<ol>`)
    for (let i = 0; i < arrOl.length; i++) {
        document.write(`<li>${arrOl[i]}</li>`)
    }
    document.write(`</ol>`)
}

ol([123, 33, 345, 'qwe', true, 'asd']);

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age,
//   та виводить їх в документ. Для кожного об'єкту окремий блок.

let fooArr = (array) => {
    for (const element of array) {
        document.write(`<div>${element.id} - ${element.name} - ${element.age}</div>`)
    }
};

let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];

fooArr(newArray);

// CWCWCWCWCWCWCWCWCWCWCWCWCWCWCWCWCW

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let fooMin = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
};

fooMin(4, 3, -7);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let fooMax = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

fooMax(3, 43, 5)

// - створити функцію яка повертає найбільше число з масиву

let fMaxArr = (array) => {
    let max = array[0];
    for (const element of array) {
        if (element > max) {
            max = element;
        }
    }
    return console.log(max);
};

let qwe = [12, 345, 3456, 234, -7689, 234, 456, 234, 312];

fMaxArr(qwe);

// - створити функцію яка повертає найменьше число з масиву

let fMinArr = (array) => {
    let min = array[0];
    for (const element of array) {
        if
    }
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].