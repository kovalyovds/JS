let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let divPost = document.createElement('div');
divPost.classList.add('divPost');

for (const postKey in post) {
    let keyPost = document.createElement('div');
    keyPost.classList.add('keyPost');
    keyPost.innerHTML = `<h3>${postKey} - ${post[postKey]}</h3>`
    divPost.appendChild(keyPost);
}

let buttonComment = document.createElement('button');
buttonComment.classList.add('buttonComment');
buttonComment.innerText = 'Comments'
buttonComment.onclick = function (e) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {
                let divComment = document.createElement('div');
                divComment.classList.add('comment');
                divComment.innerHTML = `<h3>ID: ${comment.id} (${comment.postId})</h3>
                                    <h5><i>${comment.email}</i></h5>
                                    <h5>${comment.name}</h5>
                                    <h5>${comment.body}</h5>`;
                divPost.appendChild(divComment);
                buttonComment.disabled = true;
            }
        })
}

divPost.appendChild(buttonComment);
document.body.appendChild(divPost);