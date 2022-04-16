const mode = localStorage.getItem("mode");
const difficulty = localStorage.getItem("difficulty");
const marker = localStorage.getItem("marker");

const difficultyOpacity = localStorage.getItem("difficultyOpacity");
const difficultyPointerEvents = localStorage.getItem("difficultyPointerEvents");

if (mode === null) mode = "vs Player";
if (difficulty === null) difficulty = "Kid";
if (marker === null) marker = "O";
if (difficultyOpacity === null) difficultyOpacity = "0.5";
if (difficultyPointerEvents === null) difficultyPointerEvents = "none";

$("#mode").val(mode);
$("#difficulty").val(difficulty);
$("#marker").val(marker);
$("#difficulty").css("opacity", difficultyOpacity);
$("#difficulty").css("pointer-events", difficultyPointerEvents);
