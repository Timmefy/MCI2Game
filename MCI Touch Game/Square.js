import { ctx, canvas } from "./canvas.js";
import { distance } from "./math.js";

export class square {
    constructor({ pos, color}) {
        this.pos = pos;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillRect(this.pos.x, this.pos.y, this.pos.width, this.pos.height);
        ctx.fill();
        ctx.closePath();
    }

    includes(whiteBall, BrownBall) {
        return distance(this.pos, whiteBall.pos) <= this.size;
        return distance(this.pos, BrownBall.pos) <= this.size;
    }
}