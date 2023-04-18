import { ctx, canvas, margin } from "./canvas.js";
import { Pocket } from "./Pocket.js";

export const pockets = [

    new Pocket({
        pos: {x: canvas.width - margin*6, y: canvas.height/2 - margin*9},
        color: "black",
        size: 35
    }),

    new Pocket({
        pos: {x: margin * 6, y: canvas.height/2 + margin*8},
        color: "Black",
        size: 35
    }),

];