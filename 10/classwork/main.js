// - створити 2 форми по 2 інпути в кожній. Cтвоирити кнопку при кліку на яку считується та виводиться на консоль
//   інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб уникнути перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let divOne = document.createElement('div');
// divOne.innerText = 'Контейнер 1';
// divOne.style.margin = '20px';
//
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Контейнер 2';
// divTwo.style.margin = '20px';
// document.body.append(divOne, divTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// divOne.appendChild(formOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// divTwo.appendChild(formTwo);
//
// let imputOne = document.createElement('input');
// imputOne.setAttribute('name', 'inputOne');
//
// let imputTwo = document.createElement('input');
// imputTwo.setAttribute('name', 'inputTwo');
//
// let imputThree = document.createElement('input');
// imputThree.setAttribute('name', 'inputThree');
//
// let imputFour = document.createElement('input');
// imputFour.setAttribute('name', 'inputFour');
//
// let button = document.createElement('button');
// button.innerText = 'Test console';
// button.style.margin = '20px';
//
// document.body.append(button);
//
// formOne.append(imputOne, imputTwo);
// formTwo.append(imputThree, imputFour);
//
// button.addEventListener('click', function () {
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// });

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'create';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
// button.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let txt = inputThree.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(tr, td, txt);
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let mates = ['свиня', 'редиска', 'дурачок'];
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'test txt';
document.body.append(input, button);

button.onclick = function () {
    let valueInput = input.value;

    for (const mate of mates) {
        if (mate === valueInput) {
            alert('nonononono');
            input.value = '';
        } else {
            alert('Good');
            input.value = '';
        }
        return;
    }
}
