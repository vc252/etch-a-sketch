let penColor = "black";
let gridNumber = 10;

const container = document.querySelector(".gridContainer");
let computedStyle = getComputedStyle(container);
const height = parseFloat(computedStyle.height);
let gridSize = height/gridNumber;
let mousedown = false;

window.addEventListener("mousedown",()=>{
    mousedown = true;
})

window.addEventListener("mouseup",()=>{
    mousedown = false;
})

const colorSelector = document.querySelector("input");
colorSelector.addEventListener("input",()=>{
    penColor = document.querySelector("input").value;
})

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click",()=>{
    document.querySelectorAll(".gridBox").forEach((box)=>box.style.backgroundColor = "white");
})

container.addEventListener("mousemove",(e)=>{
    if (e.target.classList.contains("gridBox") && mousedown) {
        e.target.style.backgroundColor = penColor;
    }
})

for (let i=0; i<gridNumber*gridNumber; i++) {
    let grid = document.createElement("div")
    grid.classList.add("gridBox");
    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
    container.append(grid);
}




