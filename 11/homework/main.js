// -створити форму з інпутами для name та age.
//  При відправці форми записати об'єкт в localstorage

let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    e.preventDefault();

    let nameInput = e.target.name.value;
    let ageInput = e.target.age.value;
    let user = {nameInput, ageInput};
    localStorage.setItem(nameInput, JSON.stringify(user));
}

// -створити форму з інпутами для model,type та volume автівки.
//  при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let f2 = document.forms.f2;
f2.onsubmit = function (e) {
    e.preventDefault();

    let model = e.target.model.value;
    let type = e.target.type.value;
    let volume = e.target.volume.value;
    let car = `[${model}, ${type}, ${volume}]`;
    localStorage.setItem('CarArray', JSON.stringify(car));
}