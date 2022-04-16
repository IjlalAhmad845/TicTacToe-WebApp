import { toggle } from "../index.js";

//control mode drop down
$("#mode").change(function () {
  if (this.value === "vs Player") {
    $("#difficulty").css("opacity", "0.5");
    $("#difficulty").css("pointer-events", "none");
  } else {
    $("#difficulty").css("opacity", "1");
    $("#difficulty").css("pointer-events", "auto");
  }

  localStorage.setItem("difficultyOpacity", $("#difficulty").css("opacity"));
  localStorage.setItem(
    "difficultyPointerEvents",
    $("#difficulty").css("pointer-events")
  );
});

//control marker drop down
$("#marker").change(() => {
  toggle();
});

//control start and reset buttons
$("#start").click(() => {
  $("#mode,#difficulty,#marker,#start").css("opacity", "0.5");
  $("#mode,#difficulty,#marker,#start").css("pointer-events", "none");

  $("#right").css("opacity", "1");
  $("#right").css("pointer-events", "auto");

  localStorage.setItem("mode", $("#mode").val());
  localStorage.setItem("difficulty", $("#difficulty").val());
  localStorage.setItem("marker", $("#marker").val());
});

$("#reset").click(() => {
  location.reload();
});
