let button_start = document.getElementById("button_start");
let train = document.getElementById("train");

button_start.addEventListener("mouseenter", ()=>{
    button_start.src = "./img/START_yellow.png";
    train.classList.add("train_move");
    train.classList.remove("train");
})

button_start.addEventListener("mouseleave", ()=>{
    button_start.src = "./img/START_blue.png";
    train.classList.add("train");
    train.classList.remove("train_move");
})