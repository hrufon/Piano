function playNote(piano){
const key = document.getElementById(piano);
key.play();
}
document.addEventListener('keydown', function(e) {
let piano = ''
switch(e.keyCode){
case 65: {
piano = 'piano1';
break;
}
case 83: {
piano = 'piano2';
break;
}
case 68: {
piano = 'piano3';
break;
}
case 70: {
piano = 'piano4';
break;
}
case 71: {
piano = 'piano5';
break;
}
case 72: {
piano = 'piano6';
break;
}
case 74: {
piano = 'piano7';
break;
}
case 75: {
piano = 'piano8';
break;
}
default: return;
}
playNote(piano);
showPressBtnAnimation(piano);
});
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
document.addEventListener('keyup', function(e) {
let piano = ''
switch(e.keyCode){
case 65: {
piano = 'piano1';
break;
}
case 83: {
piano = 'piano2';
break;
}
case 68: {
piano = 'piano3';
break;
}
case 70: {
piano = 'piano4';
break;
}
case 71: {
piano = 'piano5';
break;
}
case 72: {
piano = 'piano6';
break;
}
case 74: {
piano = 'piano7';
break;
}
case 75: {
piano = 'piano8';
break;
}
default: return;
}
playNote(piano);
resetBtnAnimation(piano);
});
function resetBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.remove('active');
}
