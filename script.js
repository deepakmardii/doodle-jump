//board
let board;
let boardWidth = 360; //from image
let boardHeight = 576;
let context;

//doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
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

//physics
let velocityX = 0;
let velocityY = 0; //doodler jump speed

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); // used fro drawing on board

  //   context.fillStyle = "green";
  //   context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);

  doodlerRightImg = new Image();
  doodlerRightImg.src = "./src/doodler-right.png";
  doodler.img = doodlerRightImg;
  doodlerRightImg.onload = function () {
    context.drawImage(
      doodler.img,
      doodler.x,
      doodler.y,
      doodler.width,
      doodler.height
    );
  };

  doodlerLeftImg = new Image();
  doodlerLeftImg.src = "./src/doodler-left.png";

  requestAnimationFrame(update);
  document.addEventListener("keydown", moveDoodler);
};

function update() {
  requestAnimationFrame(update);
  context.drawImage(
    doodler.img,
    doodler.x,
    doodler.y,
    doodler.width,
    doodler.height
  );

  //doodler
  doodler.x += velocityX;
}

function moveDoodler(e) {
  if (e.code == "ArrowRight" || e.code == "KeyD") {
    //move right
    velocityX = 4;
    doodler.img = doodlerRightImg;
  } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
    //move left
    velocityX = -4;
    doodler.img = doodlerLeftImg;
  }
}
