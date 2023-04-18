
export function wingame() 
{
    const body = document.body;
    const winScreen =  document.createElement("div");
    const restart = document.getElementById("restartButton");

    winScreen.id = "winscreen";
    winScreen.classList.add("screen");
    winScreen.innerText = "Someone Won!";

    winScreen.appendChild(restart);
    body.appendChild(winScreen);
    return;
}


export function losegame() 
{
    const body = document.body;
    const loseScreen =  document.createElement("div");
    const restart = document.getElementById("restartButton");

    loseScreen.id = "losescreen";
    loseScreen.classList.add("screen");
    loseScreen.innerText = "Someone Lost!";

    loseScreen.appendChild(restart)
    body.appendChild(loseScreen);
    return;
}