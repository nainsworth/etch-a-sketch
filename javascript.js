const container = document.getElementById("container");

// Generates Grid on Window startup
window.onload = function() {
    createGrid(16,16);
}

// Function that generates cells from user input
function createGrid(cellRows, cellCols) {
    for (let i = 0; i < cellCols; i++) {
        const col = document.createElement("div");
        container.appendChild(col);
        for (let j = 0; j <  cellRows; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            col.appendChild(cell);
        }
    }
    blackCell();
}

// Function that changes cells to black on mouse over
function blackCell() {
    const blackCells = document.querySelectorAll(".cell");
    blackCells.forEach(cells => cells.addEventListener("mouseover", () => {
        cells.setAttribute("style", "background: black;");
    }))
}


