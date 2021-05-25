class SnakeGame {
    
    constructor(canvas,context){
        this.context = context;
        this.width=canvas.width;
        this.height=canvas.height;
        this.GAMEOVER=false;
        this.prev=-1;
        this.snake = [];
        this.posx = this.width/2;
        this.posy = this.height/2;
        this.var_posx=0;
        this.var_posy=0;
        this.foodx= Math.floor(Math.random()*(this.width-10)/10)*10;
        this.foody= Math.floor(Math.random()*(this.height-10)/10)*10;
    }

    validatePosition() {
        return between(this.posx,0,this.width) 
                && between(this.posy,0,this.height) 
                && undefined===this.snake.find(elem => elem[0]==this.posx && elem[1]==this.posy);
    }

    gameLoop(){
        this.posx+=this.var_posx;
        this.posy+=this.var_posy;
        if(this.validatePosition()){
            if(this.posx==this.foodx && this.posy==this.foody){
                this.foodx= Math.floor(Math.random()*(this.width-10)/10)*10
                this.foody= Math.floor(Math.random()*(this.height-10)/10)*10
                this.snake.push([this.posx,this.posy]);
            }
            if(this.snake.length>1){
                let i=0;
                while(i<this.snake.length){
                    this.snake[i]=this.snake[i+1];
                    i++;
                }
                this.snake[this.snake.length-1] = [this.posx-this.var_posx,this.posy-this.var_posy];
            }
            else if(this.snake.length==1){
                this.snake[this.snake.length-1] = [this.posx-this.var_posx,this.posy-this.var_posy];
            }
        }
        else{
            this.GAMEOVER = true;
        }
    }

    gameOver(){
        this.context.fillStyle = "black";
        this.context.fillRect(0,0,this.width,this.height);
        
        this.context.fillStyle = "red";
        this.context.font = "50px Arial";
        this.context.fillText("GAME OVER",(this.width/2)-(50*3),this.height/2);
        
        this.context.fillStyle = "white";
        this.context.font = "25px Arial";
        this.context.fillText("Points = ",(this.width/2)-(25*2.5),(this.height/2)+40);
        this.context.fillText(this.snake.length,(this.width/2)+25*1.5,(this.height/2)+40);

        this.context.font = "25px Arial";
        this.context.fillText("Press ENTER to Play Again",(this.width/2)-(25*6),(this.height/2)+100);
    }

    paintCanvas(){
        //color bg
        this.context.fillStyle = "gray";
        this.context.fillRect(0,0,this.width,this.height);
    
        //color snake
        this.context.fillStyle="yellow";
        this.context.fillRect(this.posx,this.posy, 10,10);
        let i=0;
        while(i<this.snake.length){
            this.context.fillRect(this.snake[i][0], this.snake[i][1], 10, 10);
            i++;
        }
        //color food
        this.context.fillStyle = "red";
        this.context.fillRect(this.foodx, this.foody, 10,10);
    }

    restart(){
        this.GAMEOVER=false;
        this.prev=-1;
        this.snake = [];
        this.posx = this.width/2;
        this.posy = this.height/2;
        this.var_posx=0;
        this.var_posy=0;
        this.foodx= Math.floor(Math.random()*(this.width-10)/10)*10;
        this.foody= Math.floor(Math.random()*(this.height-10)/10)*10;
    }
}

function between(x,a,b){
    return x>=a && x<=b;
}
