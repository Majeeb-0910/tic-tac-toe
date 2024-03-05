const cells = document.querySelectorAll("td");
let currentPlayer = "X";
let x_wins = document.querySelector("#x-points");
let o_wins = document.querySelector("#o-points");
let ow = 0;
let xw = 0;

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e) {
  // Check if the cell is empty
  if (e.target.textContent === "") {
    // Mark the cell with the current player's symbol
    e.target.textContent = currentPlayer;

    // Check if the game is over
    checkForWin();

    // Switch to the other player
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
  }
  else{
    resetGame()
  }
}

function checkForWin() {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  winningCombinations.forEach((combination) => {
    const cell1 = document.getElementById(`cell-${combination[0]}`);
    const cell2 = document.getElementById(`cell-${combination[1]}`);
    const cell3 = document.getElementById(`cell-${combination[2]}`);

    if (cell1.textContent === currentPlayer && cell2.textContent === currentPlayer && cell3.textContent === currentPlayer) {
        cell1.style.color = "green"
        cell2.style.color = "green"
        cell3.style.color = "green"
        
        if(currentPlayer === "X"){
            xw++;
            x_wins.textContent = xw;
        }else{
            ow++;
            o_wins.textContent = ow;
        }
        // alert("Player ' "+ currentPlayer +" '"+" Wins!!!!")
    }
    
  });
}

let p_reset = document.querySelector("#preset");

p_reset.addEventListener("click",function() {
    xw=0;
    x_wins.textContent = xw;
    ow=0;
    o_wins.textContent = ow;
});

function checkForDraw() {
  let draw = true;
  cells.forEach((cell) => {
    if (cell.textContent === "") {
      draw = false;
    }
  });

  if (draw) {
    alert("It's a draw!");
  }
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.color = "aquamarine"
  });

  currentPlayer = "X";
}