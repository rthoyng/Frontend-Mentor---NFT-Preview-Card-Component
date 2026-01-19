const popUp = document.getElementById("popUp");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", ()=>{
    popUp.classList.add("reveal")
})
popUp.addEventListener("click", ()=>{
    popUp.classList.remove("reveal");
})