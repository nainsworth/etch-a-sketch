// Generates Grid on Window startup
window.onload = function () {
  createGrid(16);
};
// Default color
let color = "black";

const gridSlider = document.getElementById("gridSlider");
const sliderValue = document.getElementById("sliderValue");

gridSlider.onmousemove = (e) => changeSliderValue(e.target.value);

// Function that generates cells from user input
function createGrid(cells) {
  let sketchPad = document.querySelector(".sketchPad");
  let cellGrid = sketchPad.querySelectorAll("div");
  cellGrid.forEach((e) => e.remove());
  sketchPad.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

  for (let i = 0; i < cells * cells; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", colorCell);
    sketchPad.insertAdjacentElement("beforeend", cell);
  }
}

// Function that colors in the cell on mouseover
function colorCell() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

// Function that changes the color to color in
function changeColor(choice) {
  color = choice;
}

// Updates Slider Value
function changeSliderValue(sizeValue) {
  sliderValue.innerText = `Grid Size: ${sizeValue} x ${sizeValue}`;
}

// Resets Etch-a-sketch
function clearEtch() {
  let sketchPad = document.querySelector(".sketchPad");
  let cellGrid = sketchPad.querySelectorAll("div");
  cellGrid.forEach((element) => (element.style.backgroundColor = "white"));
}

// Toggles Grid Lines
function toggleGrid() {
  let sketchPad = document.querySelector(".sketchPad");
  let cellGrid = sketchPad.querySelectorAll("div");
  cellGrid.forEach((e) => e.classList.toggle("cell"));
  sketchPad.classList.toggle("grid-Off");
}
