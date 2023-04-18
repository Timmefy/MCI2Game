import { ctx, canvas, margin } from "./canvas.js";
import { Loch } from "./Loch.js";

export const loecher = [


    //Loch oben links, Loch
    new Loch({
        pos: {x: canvas.width/4, y: canvas.height/5},
        color: "lightblue",
        size: 99
    }),
    
    
    //Loch oben rechts, Loch
    new Loch({
        pos: {x: canvas.width/1.5, y: margin},
        color: "lightblue",
        size: 50
    }),
    
    new Loch({ // Loch, oben rechts
        pos: {x: canvas.width/1.25, y: canvas.height/5},
        color: "Black",
        size: 60,
        color: "lightblue"
    }),

    new Loch({ //Loch oben, mitte
        pos: {x: canvas.width/1.8 , y: canvas.height/2.8},
        color: "Black",
        size: 98,
        color: "lightblue"
    }),




    //Loch unten rechts, Loch
    new Loch({
        pos: {x: canvas.width/1.35 , y: canvas.height/1.22},
        color: "lightblue",
        size: 99
    }),

    //Loch unten links, Loch
    new Loch({
        pos: {x: canvas.width/3 , y: canvas.height - margin},
        color: "lightblue",
        size: 50
    }),

    new Loch({ // Loch unten, mitte, links
        pos: {x: canvas.width/2.3, y: canvas.height/1.55},
        color: "Black",
        size: 98,
        color: "lightblue"
    }),


    new Loch({ // Loch unten, links
        pos: {x: canvas.width/5 , y: canvas.height/1.25 },
        color: "Black",
        size: 60,
        color: "lightblue"
    }),

];  