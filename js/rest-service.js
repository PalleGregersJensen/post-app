const endpoint = "https://api-project-pgj-2023-default-rtdb.firebaseio.com/";



// Get all posts - HTTP Method: GET
async function getPosts() {
    const response = await fetch(`${endpoint}/posts.json`); // fetch request, (GET)
    const data = await response.json(); // parse JSON to JavaScript
    const posts = prepareData(data); // convert object of object to array of objects
    return posts; // return posts
}


// Update an existing post - HTTP Method: DELETE
async function deletePost(id) {
    const response = await fetch(`${endpoint}/posts/${id}.json`, {
        method: "DELETE"
    });
    if (response.ok) {
        console.log("New post succesfully deleted from Firebase 🔥");
        updatePostsGrid(); // update the post grid to display all posts and the new post
    }
}

export {endpoint, getPosts, deletePost};
