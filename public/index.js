import placeMarker from "./controllers/markerController.js";
import AIMove from "./controllers/AIController.js";

$(".grid-element").click(function () {
  let index = this.id.substr(this.id.length - 1) - 1;
  const whoWon = placeMarker(index);
  if (whoWon === "X" || whoWon === "O" || whoWon === "draw") {
    //game finished
    return;
  }
  $("#right").css("pointer-events", "none");

  if ($("#mode")[0].selectedIndex === 1) {
    setTimeout(() => {
      AIMove();
      $("#right").css("pointer-events", "auto");
    }, 500);
  }
});

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
