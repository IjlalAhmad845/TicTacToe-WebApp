import { circleHover } from "../components/circle.js";
import { crossHover } from "../components/cross.js";
import { toggler, board } from "../index.js";

$(
  "#element-1,#element-2,#element-3,#element-4,#element-5,#element-6,#element-7,#element-8,#element-9"
).hover(
  function () {
    let index = this.id.substr(this.id.length - 1) - 1;

    if (board[index] === "") {
      $(this).append(toggler ? circleHover(this.id) : crossHover(this.id));
    }
  },
  function () {
    $("#" + this.id + "-circle-hover").remove();
    $("#" + this.id + "-cross-hover").remove();
  }
);
