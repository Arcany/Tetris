var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Make lines
var xGridIndex = [];
var yGridIndex = [];
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

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    game.fallingPiece.moveBlock(game, "left");
  }
  else if (event.key == "ArrowRight"){
    game.fallingPiece.moveBlock(game, "right");
  }
  else if (event.key == " "){
    game.fallingPiece.rotateBlock();
  }
  else if (event.key == "ArrowDown"){
    game.fallingPiece.moveBlock(game);
  }
});
var game = new Game(ctx);
var stop = false;

setInterval(() => {
  game.run();
  
}, 250);
