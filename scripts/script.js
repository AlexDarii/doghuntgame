let duck = document.querySelector("#duck");
let moveBy = 10;
let score = 0;

document.querySelector("#duck").onclick = function () {
  document.querySelector("#duck").style.display = "none";
  score++;
  
  let scoreh1= document.querySelector("h1");
  scoreh1.innerHTML = score;
};


               

window.addEventListener("load", () => {
  duck.style.position = "absolute";
  duck.style.left = 0;
  duck.style.top = 0;
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      duck.style.left = parseInt(duck.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      duck.style.left = parseInt(duck.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      duck.style.top = parseInt(duck.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      duck.style.top = parseInt(duck.style.top) + moveBy + "px";
      break;
  }
});
