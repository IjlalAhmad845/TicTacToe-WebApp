import kid from "../utils/diff/kid.js";
import enemy from "../utils/diff/enemy.js";
import god from "../utils/diff/god.js";
import placeMarker from "../controllers/markerController.js";
import { board, playerMarker, AIMarker } from "../index.js";
const AIMove = () => {
  let index = enemy(board, AIMarker);

  //its first priority to win itself, rather than block
  if (index === -1) {
    if ($("#difficulty").val() === "Kid") index = kid(board);
    else if ($("#difficulty").val() === "Enemy")
      index = enemy(board, playerMarker);
    else if ($("#difficulty").val() === "God") index = god(board);
  }
  placeMarker(index);
};

export default AIMove;
