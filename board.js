class Board {
  constructor() {
    this.board = [];
    this.blocks = [];
  }

  initBoard() {
    for (let i = 0; i < 21; i++) {
      this.board.push(new Array(10).fill(0));
    }
  }
  renderBoard() {
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].renderBlock();
    }
  }
  initBlock(name, x, y, falling) {
    var block = new Tetromino(name, x, y, falling);
    block.init(this.board, x, y);
    this.blocks.push(block);
  }
  moveBoard() {
    var newBoard = this.deepCopyBoard();
    for (let i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      const currentX = block.x;
      const currentY = block.y;
      var lastShape = block.shape[block.shape.length - 1];
      var canMove = true;
      for (let j = 0; j < lastShape.length; j++) {
        if (lastShape[j] == 1) {
          if (block.x + block.shape.length + 1 > newBoard.length) {
            canMove = false;
            block.falling = false;
          } else if (newBoard[block.x + block.shape.length][block.y+j] != 0) {
            canMove = false;
            block.falling = false;
            break;
          }
        }
      }
      if (canMove) {
        block.deInit(newBoard);
        block.unrenderBlock();
        block.moveBlock();
        block.init(newBoard, currentX + 1, currentY);
      }
    }
    this.board = newBoard;
    this.renderBoard();
}
  deepCopyBoard() {
    var newBoard = [];
    for (let i = 0; i < 21; i++) {
      newBoard.push(new Array(10).fill(0));
    }
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        newBoard[i][j] = this.board[i][j];
      }
    }
    return newBoard;
  }
}
