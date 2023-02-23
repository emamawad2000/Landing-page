let mainimage=document.querySelector(".main-image")
let container=document.querySelector(".container")

function changeImage(newSrc){
    mainimage.src=newSrc
}

function changeColor(color){
    container.style.background=color
}