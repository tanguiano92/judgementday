var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 2;

function preload(){
	bgImg = loadImage("images/pexels-felix-mittermeier-1205301.jpg");
}

function setup() {
  createCanvas(2000, 900);

  x2 = width;
}

function draw() {
	image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }

}
