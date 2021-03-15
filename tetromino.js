class Tetromino {
  constructor(name, x, y, falling) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.falling = falling;
    if (name == "I") {
      this.shape = [[1, 1, 1, 1]];
      this.color = "CYAN";
    } else if (name == "J") {
      this.shape = [
        [1, 0, 0, 0],
        [1, 1, 1, 0],
      ];
      this.color = "BLUE";
    } else if (name == "L") {
      this.shape = [
        [0, 0, 0, 1],
        [0, 1, 1, 1],
      ];
      this.color = "ORANGE";
    } else if (name == "O") {
      this.shape = [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
      ];
      this.color = "YELLOW";
    } else if (name == "S") {
      this.shape = [
        [0, 1, 1, 0],
        [1, 1, 0, 0],
      ];
      this.color = "GREEN";
    } else if (name == "T") {
      this.shape = [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
      ];
      this.color = "PURPLE";
    } else if (name == "Z") {
      this.shape = [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
      ];
      this.color = "RED";
    }
  }

  init(board, x, y) {
    var first = 0;
    for (let k = 0; k < this.shape.length; k++) {
      for (let l = 0; l < this.shape[k].length; l++) {
        if (this.shape[k][l] != 0) {
          if (!first) {
            board[x + k][y + l] = this;
            first = true;
          } else {
            board[x + k][y + l] = this.name;
          }
        }
      }
    }
  }

  deInit(board) {
    for (let k = 0; k < this.shape.length; k++) {
      for (let l = 0; l < this.shape[k].length; l++) {
        if (this.shape[k][l] != 0) {
          board[this.x + k][this.y + l] = 0;
        }
      }
    }
  }
  renderBlock() {
    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        if (this.shape[i][j] == 1) {
          ctx.beginPath();
          ctx.rect(this.y * 30 + j * 30 + 1, -30+this.x * 30 + i * 30 + 1, 29, 29);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
  moveBlock() {
    this.x += 1;
  }
  unrenderBlock() {
    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        if (this.shape[i][j] == 1) {
          ctx.clearRect(
            this.y * 30 + j * 30 + 1,
            -30+this.x * 30 + i * 30 + 1,
            29,
            29
          );
        }
      }
    }
  }
}
