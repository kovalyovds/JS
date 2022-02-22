// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// -- Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let contentId = document.getElementById('content');
console.log(contentId);

// -- отримує текст з блоку з id "rules"

let rulesId = document.getElementById('rules');
console.log(rulesId);

// -- замініть текст параграфа з id 'content' на будь-який інший

contentId.innerHTML = '<i>qwe qweq  qweqweqwe qweqweqwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qweqwwe</i>'

// -- замініть текст параграфа з id 'rules' на будь-який інший

rulesId.innerHTML = '<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laudantium modi ut.</b>'

// -- змініть кожному елементу колір фону на червоний

let bgRed = document.body.children;
for (const bgRedElement of bgRed) {
    bgRedElement.style.backgroundColor = 'red'
}

// -- змініть кожному елементу колір тексту на синій

let itemBlue = document.body.children;
for (const itemBlueElement of itemBlue) {
    itemBlueElement.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rulesId.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRed = document.getElementsByClassName('fc_rules');
for (const fcRedElement of fcRed) {
    fcRedElement.style.color = 'red'
}