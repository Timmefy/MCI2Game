import { ctx, canvas } from "./canvas.js";
import { scale } from "./math.js";



export const touchUnten = {
    x: 0,
    y: 0,
}

export const touchOben = {
    x: 0,
    y: 0,
}

window.addEventListener("touchstart", ev =>{
    console.log("START")
    
}, true)


window.addEventListener("touchmove", e=> {
    
    for(let i = 0; i < e.changedTouches.length ; i++)
    {
    
    // Abgrenzung des Sppielfeldes für untere Seite
    if(e.touches[i].clientY >= window.innerHeight/2)
    {
        const rect = canvas.getBoundingClientRect();
        touchUnten.x = (e.touches[i].clientX - rect.left) * (canvas.width / rect.width);
        touchUnten.y = (e.touches[i].clientY - rect.top) * (canvas.height / rect.height);
    }
   
    // Abgrenzung des Sppielfeldes für obere Seite
    if(e.touches[i].clientY <= window.innerHeight/2)
    {
        const rectt = canvas.getBoundingClientRect();
        touchOben.x = (e.touches[i].clientX - rectt.left) * (canvas.width / rectt.width);
        touchOben.y = (e.touches[i].clientY - rectt.top) * (canvas.height / rectt.height);
    }
}
})


export class tets{
    constructor(ball1, ball2)
    {
        this.ball1 = ball1;
        this.ball2 = ball2;
        this.vector1 = {x:0, y:0}
        this.vector2 = {x:0, y:0}
        this.addControl();
       
    }
    
     addControl()
    {
        window.addEventListener("touchend", (e) =>{
                
        const factor = 0.07;

        for(const element of e.changedTouches)
        {
            if(element.clientY <= window.innerHeight/2 )
            {
                this.ball2.vel = scale(factor, this.vector2);
            }
            if(element.clientY >= window.innerHeight/2 )
            {
                this.ball1.vel = scale(factor, this.vector1);
            }
        }
        })   
    }


    update()
    {
        this.vector1 = {
            x: -(touchUnten
            .x - this.ball1.pos.x),
       y: -(touchUnten
    .y - this.ball1.pos.y),}
        this.vector2 = {
            x: -(touchOben.x - this.ball2.pos.x),
            y: -(touchOben.y - this.ball2.pos.y),
        }
    }
                    
    draw(){

            //Line Ball2
            ctx.save();
            ctx.linewidth = 500;
            ctx.lineCap = "round";
            ctx.strokeStyle ="rgba(255,255,255,0.5)";
            ctx.translate(this.ball2.pos.x , this.ball2.pos.y)

            ctx.beginPath();
           
            ctx.moveTo(0, 0);
   
            ctx.lineTo(this.vector2.x, this.vector2.y);

            ctx.stroke();
            ctx.closePath();
            ctx.restore();
             
            // Linie Ball1
            ctx.save();
            ctx.linewidth = 500;
            ctx.lineCap = "round";
            ctx.strokeStyle ="rgba(255,255,255,0.5)";
            ctx.translate(this.ball1.pos.x , this.ball1.pos.y)
    
            ctx.beginPath();
           
            ctx.moveTo(0, 0);
             
            ctx.lineTo(this.vector1.x, this.vector1.y);

            ctx.stroke();
            ctx.closePath();
            ctx.restore();
  }
}