function hideHeading(){
    document.querySelector("h1").style.display = 'none';

}

function showHeading(){
    document.querySelector("h1").style.display = 'block';

}

function changeHeadingColor(){
    document.getElementById("demo-heading").style.color ="blue"
}



function toggleHeading() {
    document.querySelector("h1").classList.toggle("hidden");
  }

  document
    .getElementById("two-funct-btn")
    .addEventListener("click", toggleHeading);
