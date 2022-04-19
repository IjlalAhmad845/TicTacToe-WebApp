let mode = localStorage.getItem("mode");
let difficulty = localStorage.getItem("difficulty");
let marker = localStorage.getItem("marker");

let difficultyOpacity = localStorage.getItem("difficultyOpacity");
let difficultyPointerEvents = localStorage.getItem("difficultyPointerEvents");

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
