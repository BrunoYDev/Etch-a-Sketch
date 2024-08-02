let container = document.getElementById("container"); // Container Div

let setDimension = document.createElement("button"); // Set Dimension Button

let goDrawn = document.createElement("button"); // Drawn Button

let active = false; // change the board to On or Off

let board = document.createElement("div"); // Board Div
board.setAttribute("id", "board");

const selectDimensions = (dimension) => { // Function that uses the input value from user to set the dimensions of the blocks on the board.
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${dimension},1fr)`;
  board.style.gridTemplateRows = `repeat(${dimension},1fr)`;

  for (let i = 0; i < dimension * dimension; i++) {
    let block = document.createElement("div");
    block.setAttribute("class", "block");
    board.appendChild(block);
  }
};

const selectDimensionPopup = () => { // Call the popUp and pick the user input.
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

const drawing = (event) => { // Change the background color of the selected element.
    event.target.style.backgroundColor = "black";
}

const activateDeactivateBoard = () => { // Function that activate or deactivate the board.
  let allBlocks = Array.from(document.querySelectorAll(".block"));

  if (allBlocks.length == 0) {
    alert("No blocks on the board, Please set an dimension!");
    return;
  }

  if (!active) {                                                       // This function checks the 'active' variable. If the variable is false, it iterates over every block and adds an event listener.
    allBlocks.forEach((block) => {                                     // If the variable is already true, the code does the opposite, iterating over every block and removing the event listeners.
      block.addEventListener("mouseenter", drawing);                   // Then, it returns and ends the function.
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
