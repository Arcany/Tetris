class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.tetrominos = ["I", "J", "L", "O", "S", "T", "Z"];
    this.board = new Board(this.ctx);
    this.fallingPiece = new Tetromino(this.randomBlock(), true, this.ctx);
  }
  run() {
    this.fallingPiece.renderBlock();
    if (this.collision()) {
      this.board.addtoBoard(this.fallingPiece);
      if (this.fallingPiece.x == 0) {
        this.fallingPiece.renderBlock();
        window.alert("Game over!");
        this.fallingPiece = null;
        this.board = new Board(this.ctx);
        this.ctx.clearRect(0,0,canvas.clientWidth,canvas.height);

      }
      this.fallingPiece = new Tetromino(this.randomBlock(), true, this.ctx);
    } else {
      this.moveDown();
    }
  }
  randomBlock() {
    var index = Math.floor(Math.random() * this.tetrominos.length);
    return this.tetrominos[index];
  }
  moveDown() {
    this.fallingPiece.moveBlock(this);
  }
  collision() {
    for (let i = 0; i < this.fallingPiece.shape.length; i++) {
      for (let j = 0; j < this.fallingPiece.shape[i].length; j++) {
        if (this.fallingPiece.shape[i][j] == 1) {
          let p = this.fallingPiece.x + i + 1;
          let q = this.fallingPiece.y + j + 1;
          if (p < 20 && q >= 0 && q <= 10) {
            if (this.board.board[p][q - 1] != 0) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
    }
    return false;
  }
}
