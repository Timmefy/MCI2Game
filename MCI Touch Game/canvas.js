export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

export const margin = 10;

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;


export function clearCanvas()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}