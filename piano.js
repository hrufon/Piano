function playNote(piano){
const key = document.getElementById(piano);
key.play();
}

document.addEventListener('keydown', function(e) {
if(e.keyCode == 65){
document.getElementById("piano1").play();
}
if(e.keyCode == 83){
document.getElementById("piano2").play();
}
if(e.keyCode == 68){
document.getElementById("piano3").play();
}
if(e.keyCode == 70){
document.getElementById("piano4").play();
}
if(e.keyCode == 71){
document.getElementById("piano5").play();
}
if(e.keyCode == 72){
document.getElementById("piano6").play();
}
if(e.keyCode == 74){
document.getElementById("piano7").play();
}
if(e.keyCode == 75){
document.getElementById("piano8").play();
}
});
