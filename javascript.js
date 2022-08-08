const container = document.getElementById("container");


for (let i = 0; i < 16; i++) {
    const col = document.createElement("div");
    container.appendChild(col);
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        col.appendChild(cell);
    }
}