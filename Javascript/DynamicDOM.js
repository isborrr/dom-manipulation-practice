
function addTasK(){
    let listItems = document.getElementById("todo-list");
    let newItem = document.createElement("li");
    newItem.innerText = "New Task";
    listItems.appendChild(newItem);
}


function removeLastTask(){
    let parent = document.getElementById("todo-list");
    parent.removeChild(parent.lastElementChild);
}

function clearList(){

    document.getElementById("todo-list").innerHTML = ' ';
}

// document.querySelectorAll('li').addEventListener("click", function(){
//     alert("running");
//     let items = document.querySelectorAll("li");
//     items.forEach( item =>{
//         item.style.color = "blue";
//         item.style.textDecoration = "text-decoration: line-through";
//     })
// })



document.getElementById("todo-list").addEventListener("click",function(event){
    console.log(event.target.tagName);
    if(event.target.tagName ==='LI'){
        event.target.classList.toggle('completed');

    }
})