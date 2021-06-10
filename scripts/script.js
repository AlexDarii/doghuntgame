let duck = document.querySelector("#duck");
let moveBy = 100;
let score = 0;
let counter = 15;

document.querySelector("#duck").onclick = function () {
  document.querySelector("#duck").style.display = "none";
  score++;
  let scoreh1 = document.querySelector("h1");
  scoreh1.innerHTML = score;
};

window.addEventListener("load", () => {
  duck.style.position = "absolute";
  duck.style.left = 0;
  duck.style.top = 0;
});

setInterval(timer, 1000);
function timer() {
  counter--;
  id = document.getElementById("count");
  id.innerHTML = counter;
}

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
