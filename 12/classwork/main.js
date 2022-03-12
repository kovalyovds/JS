// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            divPost.innerHTML = `<h3>userId: ${post.userId} ID: ${post.id}</h3>
                                 <h4>Title: ${post.title}</h4>
                                 <h5>Body: ${post.body}</h5>`;
            let button = document.createElement('button');
            button.innerText = 'Comments';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComment = document.createElement('div');
                                divComment.classList.add('comment');
                                divComment.innerHTML = `<h3>ID: ${comment.id} (${comment.postId})</h3>
                                    <h5><i>${comment.email}</i></h5>
                                    <h5>${comment.name}</h5>
                                    <h5>${comment.body}</h5>`;
                                divPost.appendChild(divComment);
                            }
                            button.disabled = true;
                        }
                    });
            }
            divPost.appendChild(button);
            wraper.appendChild(divPost);
            document.body.appendChild(wraper);
        }
    });