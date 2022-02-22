// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, made, year, maxSpeed, vol) {
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.vol = vol;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//         this.info = function () {
//             for (let carKey in this) {
//                 if (typeof this[carKey] !== 'function') {
//                     console.log(`${carKey} - ${this[carKey]}`);
//                 }
//             }
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed;
//             console.log(this.maxSpeed);
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         };
// }
//
// let addCar = new Car('AUDI', 'Germany', 2020,260,2);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(40);
// addCar.drive();
// addCar.changeYear(2022);
// addCar.info();
// addCar.addDriver('Vova');
// console.log(addCar);
// addCar.info();

// -  (Те саме, тільки через клас)
//    Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//    Додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, made, year, maxSpeed, vol) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.vol = vol;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        this.info = function () {
            for (let carKey in this) {
                if (typeof this[carKey] !== 'function') {
                    console.log(`${carKey} - ${this[carKey]}`);
                }
            }
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = this.maxSpeed + newSpeed;
            console.log(this.maxSpeed);
        };
        this.changeYear = function (newValue) {
            this.year = newValue;
        };
        this.addDriver = function (driver) {
            this.driver = driver;
        };
    }
}

let addCar = new Car('AUDI', 'Germany', 2020, 260, 2);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(40);
addCar.drive();
addCar.changeYear(2022);
addCar.info();
addCar.addDriver('Vova');
console.log(addCar);
addCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let arrPopel = [];

let p1 = new Popelushka('ira', 44, 37);
let p2 = new Popelushka('anna', 33, 40);
let p3 = new Popelushka('inna', 20, 44);
let p4 = new Popelushka('liza', 25, 35);
let p5 = new Popelushka('sveta', 37, 39);
let p6 = new Popelushka('katya', 48, 35);
let p7 = new Popelushka('nadya', 22, 37);
let p8 = new Popelushka('nina', 26, 41);
let p9 = new Popelushka('alla', 38, 37);
let p10 = new Popelushka('masha', 28, 36);

arrPopel.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);
console.log(arrPopel);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princ {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let princ = new Princ('vasya', 66,37);
console.log(princ);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let foo = (popel, princ) => {
    for (let popelElement of popel) {
        if (popelElement.footsize === princ.shoe) {
            console.log(`Твоя попелюшка - ${popelElement.name}`);
        }
    }
}

foo(arrPopel,princ);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let popelPrinc = arrPopel.find(value => value.footsize === princ.shoe);
console.log(popelPrinc);