function playNote(piano){
const key = document.getElementById(piano);
key.play();
}

document.addEventListener('keydown', function(e) {
if(e.keyCode == 65){
playNote('piano1')
}
if(e.keyCode == 83){
playNote('piano2')
}
if(e.keyCode == 68){
playNote('piano3')
}
if(e.keyCode == 70){
playNote('piano4')
}
if(e.keyCode == 71){
playNote('piano5')
}
if(e.keyCode == 72){
playNote('piano6')
}
if(e.keyCode == 74){
playNote('piano7')
}
if(e.keyCode == 75){
playNote('piano8')
}
});
