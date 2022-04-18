import placeMarker from "./controllers/markerController.js";
import AIMove from "./controllers/AIController.js";

let isAIplayed = false;
$(".grid-element").click(function () {
  let index = this.id.substr(this.id.length - 1) - 1;

  if (!isPlaceEmpty(index)) return;
  const whoWon = placeMarker(index);
  if (whoWon === "X" || whoWon === "O" || whoWon === "draw") {
    //game finished
    return;
  }

  //fix async problem
  //if AI is not played yet player should not be able to click on the grid
  $("#right").css("pointer-events", "none");

  if ($("#mode")[0].selectedIndex === 1) {
    setTimeout(() => {
      AIMove();
      $("#right").css("pointer-events", "auto");
      isAIplayed = true;
    }, 500);
  }
});

const isPlaceEmpty = (index) => {
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
