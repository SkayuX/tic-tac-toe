let board: any = [[], [], [], [], [], [], [], [], []];

let isX: boolean = true;
let gameEnded: boolean = false;

// place X or O depending on current stage of the match

const placeMark = (position: number) => {
  if (gameEnded) {
    return alert("Game already ended.");
  }

  // Get needful elements
  const el = window.document.getElementById(`board-position-${position}`)!;
  const divEl = document.getElementById(`board-mark-${position}`)!;
  divEl.className = "board-mark";

  if (board[position].length === 0) {
    if (isX) {
      isX = false;
      divEl.innerText = "X";
      document.getElementById("current-move")!.innerText = "O";
    } else {
      isX = true;
      divEl.innerText = "O";
      document.getElementById("current-move")!.innerText = "X";
    }

    board[position].push({ occupied: true });
    el.appendChild(divEl);
    checkWinner();
  } else {
    return alert("This board place is already occupied!");
  }
};

const checkWinner = () => {
  // all needful elements
  let a1: string = document.getElementById(`board-mark-0`)!.innerText;
  let a2: string = document.getElementById(`board-mark-1`)!.innerText;
  let a3: string = document.getElementById(`board-mark-2`)!.innerText;
  let a4: string = document.getElementById(`board-mark-3`)!.innerText;
  let a5: string = document.getElementById(`board-mark-4`)!.innerText;
  let a6: string = document.getElementById(`board-mark-5`)!.innerText;
  let a7: string = document.getElementById(`board-mark-6`)!.innerText;
  let a8: string = document.getElementById(`board-mark-7`)!.innerText;
  let a9: string = document.getElementById(`board-mark-8`)!.innerText;

  // check if X wins

  if (a1 == "X" && a2 == "X" && a3 == "X") {
    return makeWinner("X", true);
  } else if (a1 == "X" && a5 == "X" && a9 == "X") {
    return makeWinner("X", true);
  } else if (a1 == "X" && a4 == "X" && a7 == "X") {
    return makeWinner("X", true);
  } else if (a4 == "X" && a5 == "X" && a6 == "X") {
    return makeWinner("X", true);
  } else if (a7 == "X" && a8 == "X" && a9 == "X") {
    return makeWinner("X", true);
  } else if (a3 == "X" && a4 == "X" && a5 == "X") {
    return makeWinner("X", true);
  } else if (a3 == "X" && a5 == "X" && a7 == "X") {
    return makeWinner("X", true);
  }

  // check if O wins

  if (a1 == "O" && a2 == "O" && a3 == "O") {
    return makeWinner("O", true);
  } else if (a1 == "O" && a5 == "O" && a9 == "O") {
    return makeWinner("O", true);
  } else if (a1 == "O" && a4 == "O" && a7 == "O") {
    return makeWinner("O", true);
  } else if (a4 == "O" && a5 == "O" && a6 == "O") {
    return makeWinner("O", true);
  } else if (a7 == "O" && a8 == "O" && a9 == "O") {
    return makeWinner("O", true);
  } else if (a2 == "O" && a5 == "O" && a8 == "O") {
    return makeWinner("O", true);
  } else if (a3 == "O" && a5 == "O" && a7 == "O") {
    return makeWinner("O", true);
  }

  // draw if no-one won

  if (
    (a1 == "X" || a1 == "O") &&
    (a2 == "X" || a2 == "O") &&
    (a3 == "X" || a3 == "O") &&
    (a4 == "X" || a4 == "O") &&
    (a5 == "X" || a5 == "O") &&
    (a6 == "X" || a6 == "O") &&
    (a7 == "X" || a7 == "O") &&
    (a8 == "X" || a8 == "O") &&
    (a9 == "X" || a9 == "O")
  ) {
    return makeWinner("Match", true);
  }
};

const restartMatch = () => {
  window.location.reload();
};

// if someone won, announce it and give player button to restart

const makeWinner = (whoWon: string, endGame: boolean) => {
  if (endGame) {
    alert(`Game Ended. ${whoWon} wins!`);
  } else {
    alert(`Game Ended. No Winners.`);
  }

  const restartBtn = window.document.createElement("button");
  restartBtn.addEventListener("click", restartMatch);
  restartBtn.className = "restart-btn";
  restartBtn.innerText = "Restart";
  const botContent = window.document.getElementById("bottom-content")!;
  botContent.innerHTML = "";
  botContent.appendChild(restartBtn);

  gameEnded = true;
};
