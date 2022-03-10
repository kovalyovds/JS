// Все робити за допомоги js.
// - створити блок,

let div = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.backgroundColor = 'black';
div.style.color = 'white';
div.style.fontSize = '44px';

// - додати цей блок в body.

document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.

let clonDiv = div.cloneNode(true);
document.body.appendChild(clonDiv);

// document.body.appendChild(div.cloneNode(true));


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const item of coursesAndDurationArray) {
    let divItem = document.createElement('div');
    divItem.innerText = `${item.title} - ${item.monthDuration} місяців`;
    document.body.append(divItem);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `"${element.title}"`;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${element.monthDuration} місяців`;
    divElement.append(h1, p);
    document.body.append(divElement);
}