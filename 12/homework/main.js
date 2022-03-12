// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let wraper = document.createElement('div');
//         wraper.classList.add('wraper');
//         for (const post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('post');
//             divPost.innerHTML = `<h3>userId: ${post.userId} ID: ${post.id}</h3>
//                                  <h4>Title: ${post.title}</h4>
//                                  <h5>Body: ${post.body}</h5>`;
//             wraper.appendChild(divPost);
//             document.body.appendChild(wraper);
//         }
//     });


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const comment of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('comment');
            divComment.innerHTML = `<h3>ID: ${comment.id} (${comment.postId})</h3>
                                    <h5><i>${comment.email}</i></h5>
                                    <h5>${comment.name}</h5>
                                    <h5>${comment.body}</h5>`
            wraper.appendChild(divComment);
            document.body.appendChild(wraper);
        }
    });