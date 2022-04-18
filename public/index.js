import placeMarker from "./controllers/markerController.js";
import AIMove from "./controllers/AIController.js";

$(".grid-element").click(function () {
  let index = this.id.substr(this.id.length - 1) - 1;

  //check if the index is empty
  if (!isIndexEmpty(index)) return;

  const whoWon = placeMarker(index);
  if (whoWon === "X" || whoWon === "O" || whoWon === "draw") {
    //game finished
    return;
  }

  if ($("#mode")[0].selectedIndex === 1) {
    //fix async problem
    //if AI is not played yet player should not be able to click on the grid
    $("#right").css("pointer-events", "none");

    setTimeout(() => {
      AIMove();
      $("#right").css("pointer-events", "auto");
    }, 500);
  }
});

const isIndexEmpty = (index) => {
  if (board[index] === "") return true;
  return false;
};
let playerMarker = $("#marker").val();
let AIMarker;
let toggler = playerMarker === "O";
const board = ["", "", "", "", "", "", "", "", ""];

const toggle = () => {
  playerMarker = toggler ? "O" : "X";
  AIMarker = toggler ? "X" : "O";
  toggler = !toggler;
};
export { toggle, toggler, board, playerMarker, AIMarker };
