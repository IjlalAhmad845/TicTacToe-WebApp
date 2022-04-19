//telling the user who won
const isFinished = (board) => {
  let winner = null;
  if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
    return board[0];
  } else if (
    board[3] !== "" &&
    board[3] === board[4] &&
    board[4] === board[5]
  ) {
    return board[3];
  } else if (
    board[6] !== "" &&
    board[6] === board[7] &&
    board[7] === board[8]
  ) {
    return board[6];
  } else if (
    board[0] !== "" &&
    board[0] === board[3] &&
    board[3] === board[6]
  ) {
    return board[0];
  } else if (
    board[1] !== "" &&
    board[1] === board[4] &&
    board[4] === board[7]
  ) {
    return board[1];
  } else if (
    board[2] !== "" &&
    board[2] === board[5] &&
    board[5] === board[8]
  ) {
    return board[2];
  } else if (
    board[0] !== "" &&
    board[0] === board[4] &&
    board[4] === board[8]
  ) {
    return board[0];
  } else if (
    board[2] !== "" &&
    board[2] === board[4] &&
    board[4] === board[6]
  ) {
    return board[2];
  }

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
  if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
    return 1;
  } else if (
    board[3] !== "" &&
    board[3] === board[4] &&
    board[4] === board[5]
  ) {
    return 2;
  } else if (
    board[6] !== "" &&
    board[6] === board[7] &&
    board[7] === board[8]
  ) {
    return 3;
  } else if (
    board[0] !== "" &&
    board[0] === board[3] &&
    board[3] === board[6]
  ) {
    return 4;
  } else if (
    board[1] !== "" &&
    board[1] === board[4] &&
    board[4] === board[7]
  ) {
    return 5;
  } else if (
    board[2] !== "" &&
    board[2] === board[5] &&
    board[5] === board[8]
  ) {
    return 6;
  } else if (
    board[0] !== "" &&
    board[0] === board[4] &&
    board[4] === board[8]
  ) {
    return 7;
  } else if (
    board[2] !== "" &&
    board[2] === board[4] &&
    board[4] === board[6]
  ) {
    return 8;
  } else {
    return -1;
  }
};
export { isFinished, whichPosition };
