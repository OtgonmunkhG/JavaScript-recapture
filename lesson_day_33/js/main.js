
console.log("Hello, World")
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);

    document.getElementById("posts").innerHTML = data.map((item, index) => `<p class="parag" onclick=handleClick(${index})>${item.title}</p>`)
}


async function handleClick(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const datas = await response.json();
    console.log(datas);

    var parent = document.getElementById("comments");


    var comment = document.createElement("h1");
    comment.innerHTML = "Comments";
    document.body.appendChild(comment);
    var section = document.createElement("p");
    section.innerHTML = datas.map((item) => `<div>${item.body}</div>`);

    parent.appendChild(section);
    parent.insertBefore(comment, parent.children[0]);

}

fetchData()