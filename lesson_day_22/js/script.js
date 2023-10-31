console.log("Lesson Day 22 - DOM - HTML Functions");

let h2Element = document.createElement("h2");
h2Element.innerHTML = "My favorite foods";

let parent = document.getElementById("content");

parent.appendChild(h2Element);


h2Element.setAttribute("class", "my-favorite-food");

let foods = ["Buuz", "Huushuur", "Noudel", "Tsartsamag", ];

let ulELement = document.createElement("ul");



for(let i = 0; i < foods.length; i++) {
    let liElement = document.createElement("li");
    liElement.setAttribute("id", "item");
     liElement.innerText = foods[i]
     ulELement.appendChild(liElement);
}




parent.appendChild(ulELement);

ulELement.setAttribute("class", "unorderede")


let h4Element = document.createElement("h4");
h4Element.innerText = "MY fav food";
parent.insertBefore(h4Element, ulELement);



let button = document.createElement("button");

button.setAttribute("style", "border-style:none; background-color:purple; padding: 40px;");

button.innerText = "Click me";

parent.appendChild(button);


function showAlert() {  
    alert("Hello, World");
}


button.addEventListener("click", showAlert);