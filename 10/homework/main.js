// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//   чтобы при клике на кнопку исчезал элемент с id="text".

let clik = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    clik.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let delButt = document.getElementById('delButton');
delButt.onclick = function () {
    delButt.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//   та повідомити про це користувача

document.getElementById('button3').onclick = function () {
    let age = document.getElementById('age').value;
    if (!age) {
        alert('Введіть свій вік!')
    } else if (+age < 18) {
        alert('Sorry');
    } else {
        alert('yes!!!')
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

let divFather = document.createElement('div');
for (const comment of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');
    h3.innerText = comment.name;
    p.innerText = comment.body;
    btn.innerText = 'Close txt';
    btn.onclick = () => {
        p.classList.add('pHidden');
    }
    div.append(h3, p, btn);
    divFather.append(div, hr);
}
document.body.appendChild(divFather);













