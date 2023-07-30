const grid = document.querySelector(".grid-container");
const gridRow = document.createElement("div");
gridRow.classList.add("grid-row");
const gridPiece = document.createElement("div");
gridPiece.classList.add("grid-piece");
gridPiece.innerText = "";

//Create Row
for (let j = 0; j < 16; j++) {
    gridRow.appendChild(gridPiece.cloneNode(true));
}

//Create Grid
for (let i = 0; i < 16; i++) {
    grid.appendChild(gridRow.cloneNode(true));
}
