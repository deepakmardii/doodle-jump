//board
let board;

let boardWidth = 360; //from image
let boardHeight = 576;

let context;

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  boardWidth = boardWidth;
  context = board.getContext("2d"); // used fro drawing on board
};
