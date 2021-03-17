class Tetromino {
  constructor(name, falling, ctx) {
    this.name = name;
    this.x = 0;
    this.y = 4;
    this.falling = falling;
    this.ctx = ctx;
    if (name == "I") {
      this.shape = [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
      this.color = "CYAN";
    } else if (name == "J") {
      this.shape = [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      this.color = "BLUE";
    } else if (name == "L") {
      this.shape = [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ];
      this.color = "ORANGE";
    } else if (name == "O") {
      this.shape = [
        [1, 1],
        [1, 1],
      ];
      this.color = "YELLOW";
    } else if (name == "S") {
      this.shape = [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ];
      this.color = "GREEN";
    } else if (name == "T") {
      this.shape = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      this.color = "PURPLE";
    } else if (name == "Z") {
      this.shape = [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ];
      this.color = "RED";
    }
  }

  renderBlock() {
    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        if (this.shape[i][j] == 1) {
          this.ctx.fillStyle = this.color;
          this.ctx.fillRect(
            (this.y + j) * 30 + 1,
            (this.x + i) * 30 + 1,
            29,
            29
          );
        }
      }
    }
  }
  moveBlock(game, event) {
    this.unrenderBlock();
    switch (event) {
      case "left":
        if (this.y > 0) {
          this.y -= 1;
        }
        if (game.collision()) {
          this.y -= 1;
        }
        break;
      case "right":
        if (this.y < 10) {
          this.y += 1;
          if (game.collision()) {
            this.y -= 1;
          }
        }
        break;
      default:
        this.x += 1;
    }
    this.renderBlock();
  }

  rotateBlock() {
    this.unrenderBlock();
    this.shape = this.shape[0].map((val, index) =>
      this.shape.map((row) => row[index]).reverse()
    );
    this.renderBlock();
  }
  unrenderBlock() {
    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        if (this.shape[i][j] == 1) {
          this.ctx.clearRect(
            (this.y + j) * 30 + 1,
            (this.x + i) * 30 + 1,
            29,
            29
          );
        }
      }
    }
  }
}
