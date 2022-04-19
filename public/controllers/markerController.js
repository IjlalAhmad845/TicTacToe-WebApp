import { circle } from "../components/circle.js";
import { cross } from "../components/cross.js";
import { toggle, toggler, board } from "../index.js";
import { isFinished, whichPosition } from "../utils/finishHandler.js";
import { barAnim, drawAnim } from "../utils/finishAnim.js";

const elements = [
  $("#element-1"),
  $("#element-2"),
  $("#element-3"),
  $("#element-4"),
  $("#element-5"),
  $("#element-6"),
  $("#element-7"),
  $("#element-8"),
  $("#element-9"),
];

//place marker to given index
const placeMarker = (index) => {
  if (board[index] === "") {
    elements[index].append(
      toggler
        ? circle(elements[index].attr("id"))
        : cross(elements[index].attr("id"))
    );
    board[index] = toggler ? "O" : "X";
    toggle();
  }

  const whoWon = isFinished(board);
  if (whoWon === "X" || whoWon === "O") {
    barAnim(whichPosition(board), whoWon);

    //blocking clicks
    $("#right").css("pointer-events", "none");
  } else if (whoWon === "draw") {
    drawAnim();
  }

  return whoWon;
};

export default placeMarker;
