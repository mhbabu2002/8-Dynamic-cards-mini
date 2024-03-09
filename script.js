//damy Data

// const posts = [
//     {
//         id: 1,
//         title: "this is title",
//         body: "This is body"
//     },
//     {
//         id: 2,
//         title: "this is title",
//         body: "This is body"
//     },
//     {
//         id: 3,
//         title: "this is title",
//         body: "This is body"
//     },
//     {
//         id: 4,
//         title: "this is title",
//         body: "This is body"
//     },
//     {
//         id: 5,
//         title: "this is title",
//         body: "This is body"
//     },
//     {
//         id: 6,
//         title: "this is title",
//         body: "This is body"
//     },
//     {
//         id: 7,
//         title: "this is title",
//         body: "This is body"
//     },
//     {
//         id: 8,
//         title: "this is title",
//         body: "This is body"
//     }
// ]


const loadApi = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    return data
}



const postsElement = document.querySelector(".posts");
const loadData = async() => {
    const posts =await loadApi('https://jsonplaceholder.typicode.com/posts')
    posts.map(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h3>${post.id}</h3>
            <br>
            <p>${post.title}</p>
            <br>
            <p>${post.body}</p>
        `
        postsElement.appendChild(postElement);
    })
}
loadData()