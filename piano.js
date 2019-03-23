function playNote() { 
let A = document.getElementById("piano1"); 
A.play();
}
let S = document.getElementById("piano2");{
S.play();
}
let D = document.getElementById("piano3");{
D.play();
}
let F = document.getElementById("piano4");{
F.play();
}
function playNote1() { 
let G = document.getElementById("piano5");
G.play();
}
let H = document.getElementById("piano6");{
H.play();
}
let J = document.getElementById("piano7");{
J.play();
}
let K = document.getElementById("piano8");{
K.play();
}

document.addEventListener('keydown', function(e) {
if(e.keyCode == 65){
document.getElementById("piano1").play();
$("button.1").css('background-color', '#9f9b9b');
}
if(e.keyCode == 83){
document.getElementById("piano2").play();
$("button.2").css('background-color', '#9f9b9b');
}
if(e.keyCode == 68){
document.getElementById("piano3").play();
$("button.3").css('background-color', '#9f9b9b');
}
if(e.keyCode == 70){
document.getElementById("piano4").play();
$("button.4").css('background-color', '#9f9b9b');
}
if(e.keyCode == 71){
document.getElementById("piano5").play();
$("button.5").css('background-color', '#9f9b9b');
}
if(e.keyCode == 72){
document.getElementById("piano6").play();
$("button.6").css('background-color', '#9f9b9b');
}
if(e.keyCode == 74){
document.getElementById("piano7").play();
$("button.7").css('background-color', '#9f9b9b');
}
if(e.keyCode == 75){
document.getElementById("piano8").play();
$("button.8").css('background-color', '#9f9b9b');
}
});
