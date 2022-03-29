// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// let obj = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let qqqq = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
        new Geo('-37.3159', '81.1496')), '1-770-736-8031 x56442', 'hildegard.org',
    new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));

console.log(qqqq);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(tag, action, attribute) {
        this.tag = tag;
        this.action = action;
        this.attribute = attribute;
    }
}

class Attribute {
    constructor(name, action) {
        this.name = name;
        this.action = action;
    }
}

let a = new Tag('<a>', 'предназначен для создания ссылок', [new Attribute('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
    new Attribute('coords', 'Устанавливает координаты активной области.')]);

console.log(a);

let div = new Tag('<div>', 'является блочным элементом', [new Attribute('align', 'Задает выравнивание содержимого тега'),
    new Attribute('title', 'Добавляет всплывающую подсказку к содержимому.')]);

console.log(div);

let h1 = new Tag('<h1>', 'важный заголовок первого уровня', [new Attribute('align', 'Определяет выравнивание заголовка.'),
    new Attribute('class', 'Определяет имя класса'), new Attribute('hidden', 'Скрывает содержимое элемента от просмотра.')]);

console.log(h1);

let span = new Tag('<span>', 'предназначен для определения строчных элементов документа', [new Attribute('style', 'Применяется для определения стиля элемента с помощью правил CSS.'),
    new Attribute('title', 'Описывает содержимое элемента в виде всплывающей подсказки.')]);

console.log(span);

let imput = new Tag('<input>', 'позволяет создавать разные элементы интерфейса', [new Attribute('autofocus', 'Устанавливает фокус в поле формы.'),
    new Attribute('formaction', 'Определяет адрес обработчика формы.')]);

console.log(imput);

let form = new Tag('<form>', 'устанавливает форму на веб-странице', [new Attribute('name', 'Имя формы.'),
    new Attribute('enctype', 'Способ кодирования данных формы.')]);

console.log(form);

let option = new Tag('<option>', 'определяет отдельные пункты списка', [new Attribute('label', 'Указание метки пункта списка.'),
    new Attribute('disabled', 'Заблокировать для доступа элемент списка.'), new Attribute('selected', 'Заранее устанавливает определенный пункт списка выделенным.')]);

console.log(option);

let select = new Tag('<select>', 'позволяет создать элемент интерфейса в виде раскрывающегося списка', [
    new Attribute('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'),
    new Attribute('form', 'Связывает список с формой.'),
    new Attribute('size', 'Количество отображаемых строк списка.'), new Attribute('disabled', 'Блокирует доступ и изменение элемента.')]);

console.log(select);