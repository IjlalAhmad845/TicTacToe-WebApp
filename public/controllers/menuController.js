import { setMarker } from "../index.js";

//control mode drop down
$("#mode").change(function () {
  if (this.value === "vs Player") {
    $("#difficulty").css("opacity", "0.5");
    $("#difficulty").css("pointer-events", "none");
  } else {
    $("#difficulty").css("opacity", "1");
    $("#difficulty").css("pointer-events", "auto");
  }

  localStorage.setItem("mode", $("#mode").val());
  localStorage.setItem("difficultyOpacity", $("#difficulty").css("opacity"));
  localStorage.setItem(
    "difficultyPointerEvents",
    $("#difficulty").css("pointer-events")
  );
});

//control difficulty drop down
$("#difficulty").change(function () {
  localStorage.setItem("difficulty", $("#difficulty").val());
});

//control marker drop down
$("#marker").change(() => {
  setMarker();
  localStorage.setItem("marker", $("#marker").val());
});

//control start and reset buttons
$("#start").click(() => {
  $("#mode,#difficulty,#marker,#start").css("opacity", "0.5");
  $("#mode,#difficulty,#marker,#start").css("pointer-events", "none");

  $("#right").css("opacity", "1");
  $("#right").css("pointer-events", "auto");
});

$("#reset").click(() => {
  location.reload();
});
