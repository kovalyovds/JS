// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function Users(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new Users(1, 'vasya', 'vasilyev', 'vasya@gmail.com', 3806712345678);
let user2 = new Users(2, 'leha', 'alexeev', 'leha@gmail.com', 3806758614733);
let user3 = new Users(3, 'anna', 'ivanova', 'anna@gmail.com', 3806759674288);
let user4 = new Users(4, 'liza', 'petrova', 'liza@gmail.com', 3806762485366);
let user5 = new Users(5, 'vova', 'sidorov', 'vova@gmail.com', 3806787512456);
let user6 = new Users(6, 'sasha', 'serov', 'sasha@gmail.com', 3806778945632);
let user7 = new Users(7, 'petro', 'poroh', 'petro@gmail.com', 3806765432187);
let user8 = new Users(8, 'vova', 'zelen', 'zvova@gmail.com', 3806778945685);
let user9 = new Users(9, 'sveta', 'romashkina', 'sveta@gmail.com', 3806752147869);
let user10 = new Users(10, 'natasha', 'vovkina', 'natasha@gmail.com', 3806752369784);

let userArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

console.log(userArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let filterArr = userArr.filter(value => value.id % 2 === 0);

console.log(filterArr);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArr = userArr.sort((a, b) => b.id - a.id); // зробив сортування навпаки, бо массив зроблений по зростанню

console.log(sortArr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let client1 = new Client(1, 'vasya', 'vasilyev', 'vasya@gmail.com', 3806712345678, ['qwe', 'asd', 'zxc']);
let client2 = new Client(2, 'leha', 'alexeev', 'leha@gmail.com', 3806758614733, ['sdf', 'ert', 'cvb']);
let client3 = new Client(3, 'anna', 'ivanova', 'anna@gmail.com', 3806759674288, ['ghj', 'ert']);
let client4 = new Client(4, 'liza', 'petrova', 'liza@gmail.com', 3806762485366, ['ert', 'asd']);
let client5 = new Client(5, 'vova', 'sidorov', 'vova@gmail.com', 3806787512456, ['qwe', 'asd', 'cvb', 'poi']);
let client6 = new Client(6, 'sasha', 'serov', 'sasha@gmail.com', 3806778945632, ['wer', 'cvb', 'rty']);
let client7 = new Client(7, 'petro', 'poroh', 'petro@gmail.com', 3806765432187, ['ert', 'asd', 'vbn', 'iuy']);
let client8 = new Client(8, 'vova', 'zelen', 'zvova@gmail.com', 3806778945685, ['rty', 'fgh', 'sdf']);
let client9 = new Client(9, 'sveta', 'romashkina', 'sveta@gmail.com', 3806752147869, ['asd', 'zxc']);
let client10 = new Client(10, 'natasha', 'vovkina', 'natasha@gmail.com', 3806752369784, ['wer', 'dfg']);

let clientArr = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

console.log(clientArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortArrClient = clientArr.sort((a, b) => a.order.length - b.order.length);

console.log(sortArrClient);