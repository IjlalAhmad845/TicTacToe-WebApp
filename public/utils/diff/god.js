import { playerMarker, AIMarker } from "../../index.js";
import { isFinished } from "../finishHandler.js";

const god = (board) => {
  let bestScore = -Infinity;
  let bestMove;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = AIMarker;
      let score = minimax(board, 0, false);

      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
};

//minimax algorithm
//for every possible combination of moves
const minimax = (board, depth, isMaximizing) => {
  let result = isFinished(board);

  if (result !== null) {
    if (result === "draw") {
      return 0;
    } else if (result === playerMarker) {
      return -1;
    } else if (result === AIMarker) {
      return 1;
    }
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = AIMarker;
        let score = minimax(board, depth + 1, false);
        board[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = playerMarker;
        let score = minimax(board, depth + 1, true);
        board[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

export default god;
