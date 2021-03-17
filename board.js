class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.board = [];
    this.blocks = [];
    for (let i = 0; i < 20; i++) {
      this.board.push(new Array(10).fill(0));
    }
  }

  renderBoard() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[j].length; j++) {
        if (this.board[i][j] != 0) {
          
        }
      }
    }
  }
  addtoBoard(block) {
    for (let k = 0; k < block.shape.length; k++) {
      for (let l = 0; l < block.shape[k].length; l++) {
        if (block.shape[k][l] != 0) {
          this.board[block.x + k][block.y + l] = block.name;
        }
      }
    }
  }
}
