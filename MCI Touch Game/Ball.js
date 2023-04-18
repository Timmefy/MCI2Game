import { ctx, canvas } from "./canvas.js";

import { losegame, wingame } from "./winscreen.js";

const gamestate = {win: false, lose: false};
export {gamestate};

export class Ball{
    constructor({pos, color, vel}){
    this.pos = pos;
    this.color = color;
    this.vel = vel ?? {x: 0, y:0 };
    this.size = 35;
    this.friction = 0.96;
    this.inSquare = false;
    this.inPocket = false;
    this.inLoch = false;
    
    }

    draw(){
        if(this.inSquare) return;
        if(this.inPocket) {
            wingame();
            gamestate.win = true;
            return;
        }
        if(this.inLoch) {
            losegame();
            gamestate.lose = true;
            return;
        } 
            

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.pos.x, this.pos.y,this.size, 0, 2*Math.PI );
        ctx.fill();
        ctx.closePath();
    }

    update(balls, pockets, squares, loecher) {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        this.vel.x *= this.friction;
        this.vel.y *= this.friction;

        
        if (this.inLoch === false)this.checkLoecher(loecher);
        this.checkSquares(squares);
        this.checkPockets(pockets);
    

        this.bounceOfWalls(balls);
        this.handleTime();

    }

    get idle(){
        return this.vel.x == 0 && this.vel.y == 0;
    }

    bounceOfWalls(balls) {

        
        if (this.pos.y +this.size+ this.size   >= canvas.height/2 &&  this.pos.x  < canvas.width/3  && (this.pos.y  - this.size <= canvas.height/2  && this.pos.x < canvas.width/3 )) {
           
            this.pos.y = canvas.height/2 - this.size -this.size ;
            this.vel.y *= -1;
        
        }else if (this.pos.y - (this.size) - this.size  <= canvas.height/2   &&  this.pos.x <= canvas.width/3  && (this.pos.y - (this.size) >= canvas.height/2   && this.pos.x < canvas.width/3 )) {
         
            this.pos.y = canvas.height/2 +  (this.size) + this.size ;
            this.vel.y *= -1;
        }

       
        if (this.pos.y + this.size + this.size   >= canvas.height/2 &&  this.pos.x  > canvas.width - canvas.width  && (this.pos.y  - this.size <= canvas.height/2  && this.pos.x > canvas.width - canvas.width )) {
               
            this.pos.y = canvas.height/2 - this.size - this.size;
            this.vel.y *= -1;
        
        }else if (this.pos.y - (this.size) - this.size  <= canvas.height/2   &&  this.pos.x >= canvas.width - canvas.width  && (this.pos.y - (this.size) >= canvas.height/2   && this.pos.x > canvas.width - canvas.width )) {
           
            this.pos.y = canvas.height/2 +  (this.size) + this.size ;
            this.vel.y *= -1;
        }

        if (this.pos.x + this.size >= canvas.width ) {
            
            this.pos.x = canvas.width  - this.size;
            this.vel.x *= -1;
        } else if (this.pos.x - this.size <= 0) {
         
            this.pos.x = this.size ;
            this.vel.x *= -1;
           
        }

        if (this.pos.y + this.size >= canvas.height  ) {
          
            this.pos.y = canvas.height - this.size;
            this.vel.y *= -1;
        } else if (this.pos.y - this.size <= 0 ) {
         
            this.pos.y = this.size;
            this.vel.y *= -1;
        }
        

    }

    handleTime()
    {
        const threshold = 0.04;
        if(Math.abs(this.vel.x) < threshold)
        {
            this.vel.x = 0;
        }
        if(Math.abs(this.vel.y) < threshold)
        {
            this.vel.y = 0;
        }
    }

    checkLoecher(loecher) {
        loecher.forEach(Loch => {
            if (Loch.includes(this)) {
                this.inLoch = true;
                return;
            }
        })
    }

    checkSquares(squares) {
        squares.forEach(square => {
            if (square.includes(this)) {
                this.inSquare = true;
                return;
            }
        })
    }
    
    checkPockets(pockets) {
        pockets.forEach(Pocket => {
            if (Pocket.includes(this)) {
                this.inPocket = true;
                return;
            }
        })
    }
}