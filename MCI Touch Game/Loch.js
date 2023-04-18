import { ctx } from "./canvas.js";
import { distance } from "./math.js";

export class Loch 
{
    constructor({ pos, color, size }) 
    {
        this.pos = pos;
        this.size = size;
        this.color = color;
    }

    draw() 
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    includes(whiteBall, BrownBall) 
    {
        return distance(this.pos, whiteBall.pos) <= this.size;
    }
}