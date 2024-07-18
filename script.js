let penColor = "black";
let gridNumber = 16;
let rgbSelected = false;
let eraserSelected = false;

const container = document.querySelector(".gridContainer");
let mousedown = false;

window.addEventListener("mousedown",()=>{
    mousedown = true;
})

window.addEventListener("mouseup",()=>{
    mousedown = false;
})

const colorSelector = document.querySelector("#favcolor");
colorSelector.addEventListener("input",(e)=>{
    rgbSelected = false;
    penColor = e.target.value;
})

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click",()=>{
    document.querySelectorAll(".gridBox").forEach((box)=>box.style.backgroundColor = "white");
})

const penSize = document.querySelector("#penSize");
penSize.addEventListener("change",(e)=>{
    gridNumber = 101 - e.target.value;
    clearButton.dispatchEvent(new Event("click"));
    container.innerHTML = "";
    addGrids();
})

const eraseButton = document.querySelector("#erase-button");
eraseButton.addEventListener("click",()=>{
    eraserSelected = !eraserSelected;
})



const rgbButton = document.querySelector("#rgb-button");
rgbButton.addEventListener("click",()=>rgbSelected = !rgbSelected)

container.addEventListener("mousemove",(e)=>{
    if (e.target.classList.contains("gridBox") && mousedown) {
        if (rgbSelected) {
            penColor = randomColor();
        }
        if (!eraserSelected) {
            e.target.style.backgroundColor = penColor;
        } else {
            e.target.style.backgroundColor = "white";
        }
    }
})

function addGrids() {
    let computedStyle = getComputedStyle(container);
    const height = parseFloat(computedStyle.height);
    let gridSize = height/gridNumber;
    for (let i=0; i<gridNumber*gridNumber; i++) {
        let grid = document.createElement("div")
        grid.classList.add("gridBox");
        grid.style.height = `${gridSize}px`;
        grid.style.width = `${gridSize}px`;
        container.append(grid);
    }
}

addGrids();

function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++) {
        let index = Math.floor(Math.random()*16);
        color += hex[index];
    }
    return color;
}




