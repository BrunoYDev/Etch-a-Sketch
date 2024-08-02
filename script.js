let container = document.getElementById("container");

let setDimension = document.createElement("button");

let goDrawn = document.createElement("button");

let active = false; // change the board to On or Off

let board = document.createElement("div");
board.setAttribute("id", "board");

const selectDimensions = (dimension) => {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${dimension},1fr)`;
  board.style.gridTemplateRows = `repeat(${dimension},1fr)`;

  for (let i = 0; i < dimension * dimension; i++) {
    let block = document.createElement("div");
    block.setAttribute("class", "block");
    board.appendChild(block);
  }
};

const selectDimensionPopup = () => {
  const requestDimension = Number(prompt("Input a number between 2 and 100!"));

  if (isNaN(requestDimension)) {
    alert("Only Number!");
    return;
  }

  if (requestDimension < 2 || requestDimension > 100) {
    alert("Invalid Dimension!");
    return;
  }

  selectDimensions(requestDimension);
};

const drawing = (event) => {
    event.target.style.backgroundColor = "black";
}

const activateDeactivateBoard = () => {
  let allBlocks = Array.from(document.querySelectorAll(".block"));

  if (allBlocks.length == 0) {
    alert("No blocks on the board, Please set an dimension!");
    return;
  }


  if (!active) {
    allBlocks.forEach((block) => {
      block.addEventListener("mouseenter", drawing);
    });
    active = true;
    goDrawn.innerText = "Drawing..";
    return;
  } else{
    allBlocks.forEach((block) => {
      block.removeEventListener("mouseenter", drawing);
    });
    active = false;
    goDrawn.innerText = "Drawn";
    return;
  }
};

setDimension.innerText = "Set Dimension";
setDimension.onclick = selectDimensionPopup;

goDrawn.innerText = "Drawn";

goDrawn.onclick = activateDeactivateBoard;

container.appendChild(setDimension);
container.appendChild(goDrawn);
container.appendChild(board);
