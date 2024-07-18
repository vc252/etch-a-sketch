let penColor = "black";
let gridNumber = 10;
let rgbSelected = false;

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
    rgbSelected = false;
    penColor = document.querySelector("input").value;
})

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click",()=>{
    document.querySelectorAll(".gridBox").forEach((box)=>box.style.backgroundColor = "white");
})

const rgbButton = document.querySelector("#rgb-button");
rgbButton.addEventListener("click",()=>rgbSelected = !rgbSelected)

container.addEventListener("mousemove",(e)=>{
    if (e.target.classList.contains("gridBox") && mousedown) {
        if (rgbSelected) {
            penColor = randomColor();
        }
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

function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++) {
        let index = Math.floor(Math.random()*16);
        color += hex[index];
    }
    return color;
}




