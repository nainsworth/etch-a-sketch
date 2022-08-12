// Generates Grid on Window startup
 window.onload = function() {
     createGrid(16);
 }
// Default color
 let color = "black";

 // Function that generates cells from user input
 function createGrid(cells) {
    let sketchPad = document.querySelector(".sketchPad");
    sketchPad.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    
    for (let i = 0; i < (cells * cells); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.border = "1px solid blue";
        cell.addEventListener("mouseover", colorCell);
        sketchPad.insertAdjacentElement("beforeend", cell);
    }
 }
 
// Function that colors in the cell on mouseover
function colorCell() {
    this.style.backgroundColor = color;
}

// Function that changes the color to color in
function changeColor(choice) {
    color = choice;
}