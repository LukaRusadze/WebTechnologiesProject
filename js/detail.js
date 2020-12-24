
window.onload = function () {
    const key = 'postId__Detail';
    const currentPostId = localStorage.getItem(key);
    const postContainer = document.querySelector('.post');
    const articleTitle = document.querySelector('.title')
    if (!currentPostId) {
        location.replace('index.html');
    }

    const posts = JSON.parse(localStorage.getItem('posts')).reverse();
    const currentPost = posts[currentPostId];
    currentPost.viewCount += 1;
    localStorage.setItem('posts', JSON.stringify(posts.reverse()));
    articleTitle.innerHTML = currentPost.title;
    postContainer.innerHTML = `<article>
                                        <div class="post--img">
                                            <img src="${currentPost.imgLink}" alt="${currentPost.title}">
                                        </div>
                                        <p class="post--dsc">${currentPost.desc}</p>
                                    </article>`
}   