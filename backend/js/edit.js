window.onload = function () {
    const title = document.getElementById('title');
    const imgLink = document.querySelector('#img_link');
    const shortDesc = document.getElementById('short_desc');
    const desc = document.getElementById('desc');
    const createBtn = document.getElementById('createBtn');

    const postsKey = 'posts';
    let oldPosts = JSON.parse(localStorage.getItem(postsKey));

    const postId = localStorage.getItem('currently_editing');

    if (!postId || postId == '') {
        location.replace('index.html')
    }

    const editPost = oldPosts[postId];

    title.value = editPost.title;
    imgLink.value = editPost.imgLink;
    shortDesc.value = editPost.shortDesc;
    desc.value = editPost.desc;
    


    createBtn.addEventListener('click', function () {
        editPost.title = title.value;
        editPost.imgLink = imgLink.value;
        editPost.shortDesc = shortDesc.value;
        editPost.desc = desc.value;

        localStorage.setItem(postsKey, JSON.stringify(oldPosts));
        localStorage.setItem('currently_editing', '');
        location.replace('index.html')
    })
}