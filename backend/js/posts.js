const postsKey = 'posts';
window.onload = function () {
    const postsContainer = document.getElementById('posts');
    let postsArray = JSON.parse(localStorage.getItem(postsKey));
    console.log(postsArray);

    if (postsArray) {
        for (let i = 0; i < postsArray.length; i++) {
            const currentPost = postsArray[i];
            postsContainer.innerHTML += `
                <tr class="post--item">
                    <td>${currentPost.title}</td>
                    <td>
                        <img src="${currentPost.imgLink}" width="200">
                    </td>
                    <td>
                        <p>${currentPost.shortDesc}</p>
                    </td>
                    <td>
                        <button data-id="${i}" class="btn removeBtn" onclick="remove(${i})">
                        <i class="fas fa-minus-circle"></i>
                        </button>
                    </td>
                    <td>
                        <button data-id="${i}" class="btn editBtn" onclick="edit(${i})">
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                    </td>
                </tr>`;
        }
    }
}
function remove(postId){
    console.log( "Remove", postId )
    let postsArray = JSON.parse(localStorage.getItem(postsKey));
    let removedElement = postsArray.splice(parseInt(postId), 1);
    localStorage.setItem(postsKey, JSON.stringify(postsArray))
    location.reload();
}
function edit(postId){
    console.log( "Edit", postId )
    localStorage.setItem('currently_editing', postId);
    location.replace('edit.html');
}