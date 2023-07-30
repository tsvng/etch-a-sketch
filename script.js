const grid = document.querySelector(".grid-container");
const gridRow = document.createElement("div");
gridRow.classList.add("grid-row");

const gridPiece = document.createElement("div");
gridPiece.classList.add("grid-piece");
gridPiece.innerText = "";

let gridSize = 16;
function spawnGrid(gridSize) {
    //Create Row
    for (let j = 0; j < gridSize; j++) {
        gridRow.appendChild(gridPiece.cloneNode(true));
    }

    //Create Grid
    for (let i = 0; i < gridSize; i++) {
        grid.appendChild(gridRow.cloneNode(true));
    }
}
spawnGrid(gridSize);
//Hover detection
const gridPieces = document.querySelectorAll(".grid-piece");
gridPieces.forEach((piece) =>
    piece.addEventListener("mouseenter", function (e) {
        piece.classList.add("touched");
    })
);

const newGrid = document.querySelector(".clear");
newGrid.addEventListener("click", function (e) {
    gridSize = prompt("Desired grid square-dimension?");
    removeAllChildNodes(gridRow);
    removeAllChildNodes(grid);
    spawnGrid(gridSize);
    gridPieces.forEach((piece) => piece.classList.remove("touched"));
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
