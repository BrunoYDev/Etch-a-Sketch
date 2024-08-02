let container = document.getElementById("container");

let setDimension = document.createElement("button");

let board = document.createElement("div");
board.setAttribute("id", "board");


const selectDimensions = (dimension) => {
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${dimension},1fr)`;
    board.style.gridTemplateRows = `repeat(${dimension},1fr)`;

    for(i = 0; i<dimension*dimension; i++){
        let block = document.createElement("div");
        block.addEventListener("mouseenter",() => block.style.backgroundColor = "black");
        block.setAttribute("class", "block");
    
        board.appendChild(block);
    }
};


const selectDimensionPopup = () => {
    const requestDimension = Number(prompt("Input a number between 2 and 100!"));
    
    if(isNaN(requestDimension)){
        alert("Only Number!");
        return;
    }

    if(requestDimension <2 || requestDimension >100){
        alert("Invalid Dimension!");
        return;
    }

    selectDimensions(requestDimension);
}



setDimension.innerText = "Set Dimension";
setDimension.onclick = selectDimensionPopup;

container.appendChild(setDimension);
container.appendChild(board);
