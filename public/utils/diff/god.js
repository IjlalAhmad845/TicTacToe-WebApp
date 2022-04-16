import { playerMarker, AIMarker } from "../../index.js";
import enemy from "./enemy.js";

//every possible move of player
const god = (board) => {
  //if player is in center, take corner if not taken already
  if (board[4] === playerMarker && !isMarkerOnCorner(board, AIMarker))
    return randomCorner();

  //if player is in corner, take center if not taken already
  if (isMarkerOnCorner(board, playerMarker) && board[4] === "") return 4;

  //only one edge move of AI is enough
  if (!isMarkerOnEdge(board, AIMarker)) {
    //rest of the possible moves of player
    if (
      board[0] === playerMarker &&
      (board[8] === playerMarker ||
        board[5] === playerMarker ||
        board[7] === playerMarker)
    )
      return randomEdge(board);
    else if (
      board[2] === playerMarker &&
      (board[6] === playerMarker ||
        board[3] === playerMarker ||
        board[7] === playerMarker)
    )
      return randomEdge(board);
    else if (
      board[6] === playerMarker &&
      (board[1] === playerMarker ||
        board[2] === playerMarker ||
        board[5] === playerMarker)
    )
      return randomEdge(board);
    else if (
      board[8] === playerMarker &&
      (board[0] === playerMarker ||
        board[1] === playerMarker ||
        board[3] === playerMarker)
    )
      return randomEdge(board);
  }

  //if above cases are not met, take enemy move
  return enemy(board);
};

//randomly select a corner
const randomCorner = () => {
  const corners = [0, 2, 6, 8];
  const random = Math.floor(Math.random() * 4);
  return corners[random];
};

//randomly select a edge if available
const randomEdge = (board) => {
  const edges = [1, 3, 5, 7];
  const random = Math.floor(Math.random() * 4);
  if (board[edges[random]] === "") return edges[random];
  else return randomEdge(board);
};

//checking marker is on any corner
const isMarkerOnCorner = (board, marker) => {
  const corners = [0, 2, 6, 8];
  for (let i = 0; i < corners.length; i++) {
    if (board[corners[i]] === marker) return true;
  }
  return false;
};

//checking marker is on any edge
const isMarkerOnEdge = (board, marker) => {
  const edges = [1, 3, 5, 7];
  for (let i = 0; i < edges.length; i++) {
    if (board[edges[i]] === marker) return true;
  }
  return false;
};
export default god;
