var player = document.getElementById('player');
var game = document.getElementById('game');
var both = 0;
var interval;
var random = Math.floor(Math.random() * 360);
var cherry = document.createElement("div");
cherry.setAttribute("class", "cherry");
cherry.style.left = random + "px";
cherry.style.top = random + "px";
game.appendChild(cherry);
function moveLeft(){
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if(left > 0){
        player.style.left = left - 2 + "px";
    }
}


function moveRight(){
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if(left<380){
        player.style.left = left + 2 + "px";
    }
}

function moveUp(){
    var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if(top > 0) {
        player.style.top = top - 2 + "px";
    }
}

function moveDown() {
    var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if(top < 460) {
        player.style.top = top + 2 + "px";
    }
}



document.addEventListener("keydown", event => {
    if(both == 0){
        both++;
        if(event.key === "ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key === "ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
        if(event.key === "ArrowUp") {
            interval = setInterval(moveUp, 1);
        }
        if(event.key === "ArrowDown") {
            interval = setInterval(moveDown, 1);
        }
    }
});


document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

