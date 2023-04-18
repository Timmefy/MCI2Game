
import { drawCloth, border, zeitL, zeitR} from "./BodenBande.js";
import { clearCanvas } from "./canvas.js";

import { balls, BrownBall, whiteBall} from "./setupBalls.js";
import {  tets } from "./Controller.js";
import { Pocket } from "./Pocket.js";
import { pockets } from "./setupPocket.js";
import { restartButton, restartPage } from "./restart.js";
import { squares } from "./setupSquare.js";
import { square } from "./Square.js";
import { loecher } from "./setupLoch.js";
import { Loch } from "./Loch.js";
import { Ball, gamestate } from "./Ball.js";
import { losegame } from "./winscreen.js";


const controller1 = new tets(whiteBall, BrownBall);

balls.forEach((ball) => ball.draw());
let time = 0
let i = 0
let m = 10
function loop()
{

    time++;  
    if( time % 60 == 0)
    {
        i++;
        m = 10 - i;
    }
    if(time == 600)
    {  
        losegame();
    }


    clearCanvas();
        drawCloth();
        border(m);
        zeitL(m);
        zeitR(m);

        pockets.forEach((p) => p.draw());
        squares.forEach((s) => s.draw());
        loecher.forEach((L) => L.draw());

        balls.forEach((b) => b.update(balls, pockets, squares, loecher));
        if (gamestate.lose === false || gamestate.win === false)
        {
        balls.forEach((b) => b.draw());
        }

        controller1.update();
        controller1.draw();
      
    requestAnimationFrame(loop);
      
}
loop();