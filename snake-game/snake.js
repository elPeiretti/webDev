import "./SnakeGame.js";

function keyDownEvent(event, game){
        
    switch(event.keyCode){
        //left
        case 37:
            if (game.prev!=39){
                game.var_posx=-10;
                game.var_posy=0;
                game.prev=37;
            }
            break;
        //up
        case 38:
            if (game.prev!=40){
                game.var_posx=0;
                game.var_posy=-10;
                game.prev=38;
            }
            break;
        //right
        case 39:
            if (game.prev!=37){
                game.var_posx=10;
                game.var_posy=0;
                game.prev=39;
            }
            break;
        //down
        case 40:
            if (game.prev!=38){
                game.var_posx=0;
                game.var_posy=10;
                game.prev=40;
            }
            break;
        //enter
        case 13:
            if(game.GAMEOVER){
                game.restart();
            }
    }
}

function draw(){

    g.gameLoop();
    if(g.GAMEOVER){
        g.gameOver();
    }
    else{
        g.paintCanvas();
    }
    
}


var canvas, context;
var g;

window.onload = function(){
    canvas = document.getElementById("canvas")
    context = canvas.getContext("2d")
    g = new SnakeGame(canvas,context);
    document.addEventListener("keydown", (ev) => (keyDownEvent(ev,g)));
    //render speed
    setInterval(draw,1000/15)
}


