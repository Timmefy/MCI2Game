export const restartButton = document.getElementById("restartButton");

export function restartPage() 
{
  window.location.reload();
}

restartButton.addEventListener("click", restartPage);