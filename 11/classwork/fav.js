let favorites = JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favorites) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `<h2>${favorite.name}</h2>`;
    document.body.appendChild(userDiv);
}