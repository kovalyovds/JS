let userDetails = JSON.parse(localStorage.getItem('userDetails'));


let userContainer = document.createElement('div');
userContainer.classList.add('wrapper');

for (const user of userDetails) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('user');
    for (const userKey in user) {
        let userContent = document.createElement('div');
        userContent.classList.add('userContent');
        userDiv.appendChild(userContent);
        if (typeof user[userKey] !== 'object') {
            userContent.innerHTML = `<h3>${userKey} - ${user[userKey]}</h3>`;
        } else {
            let userContentSmall = document.createElement('div');
            userContentSmall.classList.add('userContentSmall');
            userContent.appendChild(userContentSmall);
            for (const userKeyKey in user[userKey]) {
                let qwe = user[userKey][userKeyKey];
                let userContentSmallqwe = document.createElement('div');
                if (typeof qwe !== 'object') {
                    userContentSmallqwe.classList.add('userContentSmallqwe');
                    userContentSmallqwe.innerHTML = `<h4>${userKeyKey} - ${user[userKey][userKeyKey]}</h4>`;
                    userContentSmall.appendChild(userContentSmallqwe);
                } else {
                    for (const item in user[userKey][userKeyKey]) {
                        let little = document.createElement('div');
                        little.classList.add('little');
                        userContentSmall.appendChild(little);
                        little.innerHTML = `<h5>${item} - ${user[userKey][userKeyKey][item]}</h5>`;
                    }
                }
            }
        }
    }
    let button = document.createElement('button');
    button.innerText = 'Post of current user';
    let divPosts = document.createElement('div');
    divPosts.classList.add('posts');
    button.onclick = function (e) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => value.json())
            .then(posts => {
                for (const post of posts) {
                    let divPost = document.createElement('div');
                    divPost.classList.add('post');
                    let buttonPost = document.createElement('button');
                    buttonPost.classList.add('buttonPost');
                    let anchor = document.createElement('a');
                    anchor.innerText = 'post details';
                    anchor.href = `./post-details.html?data=${JSON.stringify(post)}`
                    buttonPost.appendChild(anchor)
                    divPost.innerText = `${post.title}`
                    divPost.appendChild(buttonPost);
                    divPosts.appendChild(divPost);
                    button.disabled = true;
                }
            })
    }
    userContainer.append(userDiv, button, divPosts);
}
document.body.appendChild(userContainer);
