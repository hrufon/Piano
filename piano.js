function playNote(piano){
const key = document.getElementById(piano);
key.play();
}
    
document.addEventListener('keydown', function(e) {
if(e.keyCode == 65){  
playNote('piano1');
showPressBtnAnimation('piano1');
}
});
        
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
    
document.addEventListener('keyup', function(e) {
if(e.keyCode == 65){  
resetBtnAnimation('piano1')
}
});

document.addEventListener('keydown', function(e) {
if(e.keyCode == 83){  
playNote('piano2');
showPressBtnAnimation('piano2');
}
});
            
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
        
document.addEventListener('keyup', function(e) {
if(e.keyCode == 83){  
resetBtnAnimation('piano2')
}
});  

function resetBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.remove('active');
}

document.addEventListener('keydown', function(e) {
if(e.keyCode == 68){  
playNote('piano3');
showPressBtnAnimation('piano3');
}
});
                
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
            
document.addEventListener('keyup', function(e) {
if(e.keyCode == 68){  
resetBtnAnimation('piano3')
}
});

document.addEventListener('keydown', function(e) {
if(e.keyCode == 70){  
playNote('piano4');
showPressBtnAnimation('piano4');
}
});
                    
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
                
document.addEventListener('keyup', function(e) {
if(e.keyCode == 70){  
resetBtnAnimation('piano4')
}
});

document.addEventListener('keydown', function(e) {
if(e.keyCode == 71){  
playNote('piano5');
showPressBtnAnimation('piano5');
}
});
                        
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
                    
document.addEventListener('keyup', function(e) {
if(e.keyCode == 71){  
resetBtnAnimation('piano5')
}
});

document.addEventListener('keydown', function(e) {
if(e.keyCode == 72){  
playNote('piano6');
showPressBtnAnimation('piano6');
}
});
                            
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
                        
document.addEventListener('keyup', function(e) {
if(e.keyCode == 72){  
resetBtnAnimation('piano6')
}
});

document.addEventListener('keydown', function(e) {
if(e.keyCode == 74){  
playNote('piano7');
showPressBtnAnimation('piano7');
}
});
                                
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
                            
document.addEventListener('keyup', function(e) {
if(e.keyCode == 74){  
resetBtnAnimation('piano7')
}
});

document.addEventListener('keydown', function(e) {
if(e.keyCode == 75){  
playNote('piano8');
showPressBtnAnimation('piano8');
}
});
                                    
function showPressBtnAnimation(btnName){
const btn = document.querySelector('#'+btnName + '+button');
btn.classList.add('active');
}
                                
document.addEventListener('keyup', function(e) {
if(e.keyCode == 75){  
resetBtnAnimation('piano8')
}
});
