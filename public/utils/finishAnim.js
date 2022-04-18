import { circleWon } from "../components/circle.js";
import { crossWon } from "../components/cross.js";
import { AIMarker } from "../index.js";

const barAnim = (barPosition, whoWon) => {
  const barClass =
    "absolute transition-transform duration-500 ease-in-out bg-yellow-300 rounded-full z-10";
  const bar = $(`<div class="${barClass}"></div>`);

  //bar animation after addition to html flow
  setTimeout(() => {
    //extra large baar
    if (barPosition === 7 || barPosition === 8)
      bar.addClass("scale-[2.2] sm:scale-[3.2]");
    else bar.addClass("scale-[1.6] sm:scale-[2.5]");
    WonAnim(whoWon);
  }, 0);

  //different cases for diff bar positions
  if (barPosition === 1) {
    bar.addClass("w-40 h-1");

    $("#element-2").append(bar);
  } else if (barPosition === 2) {
    bar.addClass("w-40 h-1");

    $("#element-5").append(bar);
  } else if (barPosition === 3) {
    bar.addClass("w-40 h-1");

    $("#element-8").append(bar);
  } else if (barPosition === 4) {
    bar.addClass("w-1 h-40");

    $("#element-4").append(bar);
  } else if (barPosition === 5) {
    bar.addClass("w-1 h-40");

    $("#element-5").append(bar);
  } else if (barPosition === 6) {
    bar.addClass("w-1 h-40");

    $("#element-6").append(bar);
  } else if (barPosition === 7) {
    bar.addClass("w-40 h-1 rotate-45");

    $("#element-5").append(bar);
  } else if (barPosition === 8) {
    bar.addClass("w-40 h-1 -rotate-45");

    $("#element-5").append(bar);
  }
};

const WonAnim = (whoWon) => {
  //hiding grid
  $(".grid").css("opacity", "0");

  //choosing winner
  const winner = whoWon === "X" ? crossWon() : circleWon();

  //after grid is hidden, showing winner
  setTimeout(() => {
    $(".grid").hide();
    $("#right").addClass("mt-28");

    //adding winner to html flow
    $("#right").append(winner);

    //adding text
    $("#right").append(
      `<div class="self-center text-center text-2xl text-yellow-300 font-bold mt-24 sm:mt-28"> 
      ${finishMessage(whoWon)}
      </div>`
    );
  }, 700);

  //for zooming animation
  setTimeout(() => {
    winner.addClass("transition-transform duration-700 scale-[3]");
  }, 800);
};

const finishMessage = (whoWon) => {
  if ($("#mode")[0].selectedIndex !== 1) {
    if (whoWon === "X") return "CROSS WINS!!";
    else return "CIRCLE WINS!!";
  } else {
    if (whoWon === AIMarker) return "YOU LOST!!";
    else return "YOU WON!!";
  }
};
const drawAnim = () => {
  //hiding grid
  $(".grid").css("opacity", "0");

  const drawDiv = $(`<div class="flex justify-center items-center gap-10">`);
  drawDiv.append(circleWon());

  //cross is abosulte positioned that's why m-10
  const cross = crossWon();
  cross.addClass("mr-10");
  drawDiv.append(cross);

  //after grid is hidden, showing draw
  setTimeout(() => {
    $(".grid").hide();
    $("#right").addClass("mt-28");

    //adding draw div to html flow
    $("#right").append(drawDiv);

    //adding text
    $("#right").append(
      `<div class="self-center text-center text-2xl text-yellow-300 font-bold  mt-20 sm:mt-28"> 
      DRAW!!!
      </div>`
    );
  }, 700);

  //for zooming animation
  setTimeout(() => {
    drawDiv.addClass("transition-transform duration-700 scale-[2]");
  }, 800);
};
export { barAnim, drawAnim };
