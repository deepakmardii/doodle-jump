//board
let board;
let boardWidth = 360; //from image
let boardHeight = 576;
let context;

//doodler
let doodlerHeight = 46;
let doodlerWidth = 46;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = {
  img: null,
  x: doodlerX,
  y: doodlerY,
  width: doodlerWidth,
  height: doodlerHeight,
};

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  boardWidth = boardWidth;
  context = board.getContext("2d"); // used fro drawing on board
};
