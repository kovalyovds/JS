// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let name = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
};
name(n1, '.');
name(n2, '-');
name(n3, '_');


//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні
//     від 0 до 100.

let rndm = (x) => {
    let newRandom = [];
    for (let i = 0; i < x; i++) {
        newRandom.push(Math.floor(Math.random() * 100));
    }
    return newRandom;
};

rndm(10);

// - створити (або згенерувати, за допомоги попередньої функції) масив
//   рандомних цілих числових значень. Відсортувати його за допомоги sort

let newRndm = rndm(20);
newRndm.sort((a,b) => a-b);
console.log(newRndm);

newRndm.sort((a,b) => b-a);
console.log(newRndm);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових
//   значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(newRndm.filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
//   за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(newRndm.map(value => value.toString()));

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його
//   від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];

let sortNums = (numsArr, direction) => {
    if (direction === 'ascending') return numsArr.sort((a,b) => a-b);
    if (direction === 'descending') return numsArr.sort((a,b) => b-a);
};
console.log(sortNums(nums, 'descending'));
//   sortNums('ascending') // [3,11,21]
//   sortNums('descending') // [21,11,3]

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration >= 5));