window.onload = function () {
    const postsContainer = document.querySelector('.posts');
    const postsKey = 'posts';
    var navbar = document.getElementsByClassName('list');
    let postsArray = JSON.parse(localStorage.getItem(postsKey));

    if (postsArray) {
        postsArray = postsArray.reverse();
        for (let index = 0; index < postsArray.length; index++) {
            const currentPost = postsArray[index];
            let date = new Date;
            const newPost = `
                <div class="post--item" data-post-id="${index}">
                    <article>
                        <a target="_blank" class="post--image">
                            <img src="${currentPost.imgLink}" alt="${currentPost.title}">
                        </a>
                        <h1 class="post--title"> 
                        <a class="post-item-link" target="_blank">${currentPost.title}</a>
                    </h1>
                        <p class="post--desc"><br>${currentPost.publishDate}<br>${currentPost.publishTime}<p>
                    </article>
                </div>`;
            postsContainer.innerHTML += newPost;
        }
        attachListener('click', '.post--item');
    }

}

function search(value) {
    const postsContainer = document.querySelector('.posts');
    const postsKey = 'posts';
    let postsArray = JSON.parse(localStorage.getItem(postsKey));

    if (postsArray) {
        postsArray = postsArray.reverse();
        postsContainer.innerHTML = "";
        for (let index = 0; index < postsArray.length; index++) {     
            if (postsArray[index].title.toLowerCase().includes(value.toLowerCase())) {
                const currentPost = postsArray[index];
                let date = new Date;
                const newPost = `
                <div class="post--item" data-post-id="${index}">
                    <article>
                        <a target="_blank" class="post--image">
                            <img src="${currentPost.imgLink}" alt="${currentPost.title}">
                        </a>
                        <h1 class="post--title"> 
                        <a class="post-item-link" target="_blank">${currentPost.title}</a>
                    </h1>
                        <p class="post--desc"><br>${currentPost.publishDate}<br>${currentPost.publishTime}<p>
                    </article>
                </div>`;
                postsContainer.innerHTML += newPost;
            }
            attachListener('click', '.post--item'); 
        };
    }

}

function attachListener(eventType, selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(function (element) {
        element.addEventListener(eventType, function () {
            if (this.matches('span')) {
                const posts = JSON.parse(localStorage.getItem('posts')).reverse();
                localStorage.setItem('posts', JSON.stringify(posts));
            }
            if ('postId' in this.dataset) {
                localStorage.setItem('postId__Detail', this.dataset.postId);
                location.replace('detail.html');
            }
        });
    })
}
