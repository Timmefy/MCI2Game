import {ctx, canvas, margin} from "./canvas.js";

export function drawCloth() {
    ctx.fillStyle = "rgb(26,130,30)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}


export function border(text){
    ctx.fillStyle = 'grey';
    ctx.fillRect( 0, canvas.height/2 - canvas.height/40 , canvas.width, canvas.height/20);

    ctx.fillStyle = 'sienna';
    ctx.fillRect(0, 0, canvas.width, margin);
    ctx.fillRect(0, canvas.height - margin, canvas.width, margin);
    ctx.fillRect(0, 0, margin, canvas.height);
    ctx.fillRect(canvas.width - margin, 0, margin, canvas.height);

    ctx.fillStyle = '#111';
    ctx.strokeStyle = 'green';
}


export function zeitL(text)
{
    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(text, canvas.width / 6, canvas.height / 2);
}

export function zeitR(text)
{
   
    ctx.save();

    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    //Positionierung und Rotation vom Text
    ctx.translate(canvas.width, canvas.height/2 + canvas.height/40 );
    ctx.rotate(2*Math.PI / 2);
    
    ctx.fillStyle = 'white';
    ctx.fillText(text, canvas.width/6, canvas.height /35);
  
    ctx.restore();
}