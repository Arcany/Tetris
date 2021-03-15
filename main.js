var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var tetrominos = ["I", "J", "L", "O", "S", "T", "Z"];
//Make lines
var xGridIndex = [];
var yGridIndex = [];
var board = new Board();
for (let x = 0.5; x < 301; x += 30) {
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 601);
  xGridIndex.push(x + 0.5);
}

for (let y = 0.5; y < 601; y += 30) {
  ctx.moveTo(0, y);
  ctx.lineTo(301, y);
  yGridIndex.push(y + 0.5);
}
ctx.strokeStyle = "BLACK";
ctx.stroke();
board.initBoard();

for (let i = 0; i < 1; i++) {
  board.initBlock(tetrominos[i], i * 2 + i, 1 - i, true);
}
board.renderBoard();

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

var stop = false;

function animate(newtime) {
  if (stop) {
    return;
  }
  //var fpsInterval = 1000 / 5;
  window.requestAnimationFrame(animate);
  var now = newtime;
  var elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    if (board.blocks.every((e) => e.falling == false)) {
      board.initBlock(choose(tetrominos), 0, 4, true);
    }
    board.moveBoard();
  }
}
function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = window.performance.now();
  startTime = then;
  animate();
}
startAnimating(4);
