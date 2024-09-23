function changeText(){
    const h1 = document.getElementById("main-heading");
    h1.innerText="New Welcome message";

}

document.getElementById("add-item").addEventListener("click",function(){
    let newListItem = document.createElement("li");
    newListItem.innerText = "Item 4";

    document.getElementById("item-list").appendChild(newListItem);

});

document.getElementById("change-text").addEventListener("mouseover",function(){
    let listItems = document.querySelectorAll("li");
    listItems.forEach((item)=>{
        item.style.color = "blue";
    })
})

document.getElementById("change-text").addEventListener("mouseout",function(){
    let listItems = document.querySelectorAll("li");
    listItems.forEach((item)=>{
        item.style.color = "black";
    })
})

document.body.addEventListener("dblclick",function(){
    // alert("hello++");
    let parent = document.getElementById('item-list');
        parent.removeChild(parent.lastElementChild)
});

document.getElementsByClassName("description").addEventListener("mouseover",function(){
    document.getElementsByClassName("description").innerText = "This is a complex paragraph of text"
})