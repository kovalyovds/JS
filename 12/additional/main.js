//  Отримати відповідь з цього ресурсу відповідь,
//  та вивести в документ як в прикладі на занятті
//  https://jsonplaceholder.typicode.com/users
//  кожному елементу юзера створити кнопку, при клику на яку в
//  окремий блок виводяться всі пости поточного юзера.
//  Кожному елементу post створити кнопку, при клику на яку в
//  окремий блок виводяться всі коментарі поточного поста

let divContainer = document.createElement('div');
divContainer.classList.add('container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `<h3>${user.name} ${user.surname}</h3>`
            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'Posts';
            buttonPost.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let divPost = document.createElement('div');
                                divPost.classList.add('post');
                                divPost.innerText = `${post.id} ${post.title}`;
                                let buttonComment = document.createElement('button');
                                buttonComment.innerText = 'Comment';
                                buttonComment.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(value => value.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let divComment = document.createElement('div');
                                                    divComment.classList.add('comment');
                                                    divComment.innerText = `${comment.id} - ${comment.body}`
                                                    divPost.appendChild(divComment);
                                                }
                                            }
                                            buttonComment.disabled = true;
                                        })
                                }
                                divPost.appendChild(buttonComment);
                                userDiv.appendChild(divPost);
                            }
                        }
                        buttonPost.disabled = true;
                    })
            }
            userDiv.appendChild(buttonPost);
            divContainer.appendChild(userDiv);
        }
    })

document.body.appendChild(divContainer);