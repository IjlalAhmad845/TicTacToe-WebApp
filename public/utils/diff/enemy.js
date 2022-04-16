import { AIMarker } from "../../index.js";
import kid from "./kid.js";

//blocks the player from winning
const enemy = (board, marker) => {
  //if the player has two markers in a row, block them
  //if AI has two markers in a row take the third
  if (board[0] === marker && board[1] === marker && board[2] === "") return 2;
  else if (board[0] === marker && board[2] === marker && board[1] === "")
    return 1;
  else if (board[1] === marker && board[2] === marker && board[0] === "")
    return 0;
  else if (board[3] === marker && board[4] === marker && board[5] === "")
    return 5;
  else if (board[3] === marker && board[5] === marker && board[4] === "")
    return 4;
  else if (board[4] === marker && board[5] === marker && board[3] === "")
    return 3;
  else if (board[6] === marker && board[7] === marker && board[8] === "")
    return 8;
  else if (board[6] === marker && board[8] === marker && board[7] === "")
    return 7;
  else if (board[7] === marker && board[8] === marker && board[6] === "")
    return 6;
  else if (board[0] === marker && board[3] === marker && board[6] === "")
    return 6;
  else if (board[0] === marker && board[6] === marker && board[3] === "")
    return 3;
  else if (board[3] === marker && board[6] === marker && board[0] === "")
    return 0;
  else if (board[1] === marker && board[4] === marker && board[7] === "")
    return 7;
  else if (board[1] === marker && board[7] === marker && board[4] === "")
    return 4;
  else if (board[4] === marker && board[7] === marker && board[1] === "")
    return 1;
  else if (board[2] === marker && board[5] === marker && board[8] === "")
    return 8;
  else if (board[2] === marker && board[8] === marker && board[5] === "")
    return 5;
  else if (board[5] === marker && board[8] === marker && board[2] === "")
    return 2;
  else if (board[0] === marker && board[4] === marker && board[8] === "")
    return 8;
  else if (board[0] === marker && board[8] === marker && board[4] === "")
    return 4;
  else if (board[4] === marker && board[8] === marker && board[0] === "")
    return 0;
  else if (board[2] === marker && board[4] === marker && board[6] === "")
    return 6;
  else if (board[2] === marker && board[6] === marker && board[4] === "")
    return 4;
  else if (board[4] === marker && board[6] === marker && board[2] === "")
    return 2;

  //no winning situation for AI
  if (marker === AIMarker) return -1;
  return kid(board);
};

export default enemy;
