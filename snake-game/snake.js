var canvas, context;

window.onload = function(){
    canvas = document.getElementById("canvas")
    context = canvas.getContext("2d")
    document.addEventListener("keydown", keyDownEvent)

    //render speed
    setInterval(draw,1000/15)
}

var width = 400;
var height = 400;
var prev=-1;
var tail = 0;
var snake = [];
var posx = width/2;
var posy = height/2;
var var_posx=0;
var var_posy=0;
var foodx= Math.floor(Math.random()*(width-10)/10)*10;
var foody= Math.floor(Math.random()*(height-10)/10)*10;

function keyDownEvent(event){
    
    switch(event.keyCode){
        //left
        case 37:
            if (prev!=39){
                var_posx=-10;
                var_posy=0;
                prev=37;
            }
            break;
        //up
        case 38:
            if (prev!=40){
                var_posx=0;
                var_posy=-10;
                prev=38;
            }
            break;
        //right
        case 39:
            if (prev!=37){
                var_posx=10;
                var_posy=0;
                prev=39;
            }
            break;
        //down
        case 40:
            if (prev!=38){
                var_posx=0;
                var_posy=10;
                prev=40;
            }
            break;

    }
}

function between(x,a,b){
    return x>=a && x<=b;
}

function validatePosition(x,y) {
    return between(x,0,width) && between(y,0,height) && undefined===snake.find(elem => elem[0]==x && elem[1]==y);
}

function draw(){
    posx+=var_posx;
    posy+=var_posy;
    if(validatePosition(posx,posy)){
        if(posx==foodx && posy==foody){
            foodx= Math.floor(Math.random()*(width-10)/10)*10
            foody= Math.floor(Math.random()*(height-10)/10)*10
            snake.push([posx,posy]);
        }
        if(snake.length>1){
            var i=0;
            while(i<snake.length){
                snake[i]=snake[i+1];
                i++;
            }
            snake[snake.length-1] = [posx-var_posx,posy-var_posy];
        }
        else if(snake.length==1){
            snake[snake.length-1] = [posx-var_posx,posy-var_posy];
        }
    }
    else{
        //TODO
        console.log("OUT OF RANGE")
    }

    //color bg
    context.fillStyle = "gray";
    context.fillRect(0,0,width,height);

    //color snake
    context.fillStyle="yellow";
    context.fillRect(posx,posy, 10,10);
    var i=0;
    while(i<snake.length){
        context.fillRect(snake[i][0], snake[i][1], 10, 10);
        i++;
    }
    //color food
    context.fillStyle = "red";
    context.fillRect(foodx, foody, 10,10);
}

