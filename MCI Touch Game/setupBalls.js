import { Ball } from "./Ball.js";
import { canvas } from "./canvas.js";


export const COLORS = {
 
    WHITE1: "rgb(255,255,255)",
    WHITE2: "rgb(255,255,254)" 
   
};

const start = {
    
    x: canvas.width * 0.5,
    y: canvas.height * 0.5,
};


export const balls = [
    
    new Ball({
        pos: {
            
            x: start.x - (canvas.width*2),
            y: start.y - (canvas.height*2),
        },
        color: COLORS.WHITE2,
        
    }),

    new Ball({
        pos: {
            x: start.x + (canvas.width*2),
            y: start.y + (canvas.height*2),
        },
        color: COLORS.WHITE1,
    }),

];
 
//Ball zum Bedienen werden übergeben
export const whiteBall = balls.find(b => b.color == COLORS.WHITE1);
export const BrownBall = balls.find(b => b.color == COLORS.WHITE2);