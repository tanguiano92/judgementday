var bgImg;
var x1 = 0;
var x2;
var scrollSpeed = .5;

function preload(){
  cross = loadModel('models/HellHeaven.obj');
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

let cross;

function preload() {
  // Load model with normalise parameter set to true
  cross = loadModel('models/HellHeaven.obj', true);
  bgImg = loadImage("images/pexels-felix-mittermeier-1205301.jpg");
}

function setup() {
  createCanvas(800, 700, WEBGL);
}

function draw() {
  background(0);
  scale(3); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(cross);
}
