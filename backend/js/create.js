window.onload = function(){
    const title = document.getElementById('title');
    const imgLink = document.querySelector('#img_link');
    const shortDesc = document.getElementById('short_desc');
    const desc = document.getElementById('desc');
    const createBtn = document.getElementById('createBtn');

    const postsKey = 'posts';
    let oldPosts = JSON.parse(localStorage.getItem(postsKey));


    function createPost(){
        const date = new Date();
        const newPost = {
            title: title.value,
            imgLink: imgLink.value,
            shortDesc: shortDesc.value,
            desc: desc.value,
            publishDate: date.toLocaleDateString(),
            publishTime: date.toLocaleTimeString()
        }

        if( !oldPosts ){
            oldPosts = [];
        }
        oldPosts.push(newPost);
        localStorage.setItem(postsKey, JSON.stringify(oldPosts));
        // alert(`Published "${title.value}"`);
        // window.location.replace('./index.html')
        
    }

    createBtn.addEventListener('click', createPost);

}