//telling the user who won
const isFinished = (board) => {
  let winner = null;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
    }
  }

  //checking for draw
  if (winner === null && hasOpenSpots(board) === false) {
    winner = "draw";
  }

  return winner;
};

const hasOpenSpots = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") return true;
  }
  return false;
};

//tells which position is matched
const whichPosition = (board) => {
  const lines = [
    [0, 1, 2], //position 1
    [3, 4, 5], //position 2
    [6, 7, 8], //position 3
    [0, 3, 6], //position 4
    [1, 4, 7], //position 5
    [2, 5, 8], //position 6
    [0, 4, 8], //position 7
    [2, 4, 6], //position 8
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      //returning bar position
      return i + 1;
    }
  }
  return -1;
};
export { isFinished, whichPosition };
