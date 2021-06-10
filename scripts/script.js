let square = document.querySelector(".square");
let moveBy = 10;
let score = 0;
document.querySelector(".square").onclick = function () {
  document.querySelector(".square").style.display = "none";
  score++;
  score = document.querySelector("score");
  score.innerHTML = score;
};

window.addEventListener("load", () => {
  square.style.position = "absolute";
  square.style.left = 0;
  square.style.top = 0;
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      square.style.left = parseInt(square.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      square.style.left = parseInt(square.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      square.style.top = parseInt(square.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      square.style.top = parseInt(square.style.top) + moveBy + "px";
      break;
  }
});
